import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import foodsHandler from './api/foods.js';
import subscribeHandler from './api/subscribe.js';

function apiDev() {
  return {
    name: 'api-dev',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const pathname = new URL(req.url, 'http://localhost').pathname;
        const handler = {
          '/api/foods': foodsHandler,
          '/api/subscribe': subscribeHandler,
        }[pathname];

        if (handler) {
          let body;
          if (req.method !== 'GET' && req.method !== 'HEAD') {
            req.setEncoding('utf8');
            body = '';
            for await (const chunk of req) body += chunk;
          }

          const request = new Request(`http://localhost${req.url}`, {
            method: req.method,
            body,
          });
          const response = await handler.fetch(request);

          res.statusCode = response.status;
          response.headers.forEach((value, key) => res.setHeader(key, value));
          res.end(await response.text());
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), apiDev()],
  input: {
    home: resolve(import.meta.dirname, 'index.html'),
    about: resolve(import.meta.dirname, 'about-us/index.html'),
  },
});

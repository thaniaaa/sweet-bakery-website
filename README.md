# Sweet Bakery

Sweet Bakery is a bakery landing page built with React, Vite, and Tailwind CSS. It showcases product categories, featured items, the bakery's story, and a newsletter subscription form.

## Design reference

This project recreates the **Bakery Shop Landing Page** shown in the reference image below. Its overall layout and visual direction were adapted to the Sweet Bakery brand and the assets available in this project.

![Bakery Shop Landing Page design reference](<src/assets/Bakery Shop Landing page (1).jpg>)

## Key decisions

- **Reusable components.** `src/Components/` contains base UI elements (`Button`, `Card`, `Input`, and `Skeleton`), while `src/Sections/` contains page sections. This keeps `App.jsx` focused on composing the page and makes the UI easier to maintain.
- **Clear interaction states.** The hero carousel changes slides every three seconds. The featured-food section includes Previous/Next navigation, loading skeletons, an error message, and a retry action. The newsletter form shows a loading indicator and submission feedback.
- **Dedicated About Us page.** The About Us section links to `/about-us/` for a more detailed introduction to the bakery.
- **Temporary data storage.** Product data and subscriber emails are stored in in-memory arrays. Subscriber data is not retained when the server restarts.

## API

The following endpoints are available when running `npm run dev`.

### `GET /api/foods`

Returns the product list. The example shows one item from a `200 OK` response; the actual response contains all products.

```http
GET /api/foods HTTP/1.1

HTTP/1.1 200 OK
Content-Type: application/json

[{"id":1,"name":"Mango Cake","price":38000,"image":"/foods/product1.jpg"}]
```

`price` is in Indonesian rupiah, and `image` points to an asset in `public/foods/`.

### `POST /api/subscribe`

Accepts an email address as JSON. Example of a successful subscription:

```http
POST /api/subscribe HTTP/1.1
Content-Type: application/json

{"email":"pelanggan@example.com"}

HTTP/1.1 200 OK
Content-Type: application/json

{"message":"Berhasil berlangganan."}
```

An empty or invalid email returns `400 Bad Request` with `{"message":"Email wajib diisi dan harus valid."}`. Both endpoints return `405 Method Not Allowed` for unsupported HTTP methods.

## Run locally

With Node.js and npm installed, run the following commands from the project root:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173/`). To run the code checks and create a production build:

```bash
npm run lint
npm run build
```

**Deployment note:** The API middleware in `vite.config.js` runs only in the development server. To keep the endpoints available after deployment, the handlers in `api/` must run on a serverless platform; a static build alone does not serve the API.

const subscribers = []
const emailPattern = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/

export default {
  async fetch(request) {
    if (request.method !== 'POST') {
      return Response.json(
        { message: 'Method Not Allowed' },
        { status: 405, headers: { Allow: 'POST' } },
      )
    }

    const payload = await request.json().catch(() => null)
    const email = typeof payload?.email === 'string' ? payload.email.trim() : ''

    if (!emailPattern.test(email)) {
      return Response.json(
        { message: 'Email wajib diisi dan harus valid.' },
        { status: 400 },
      )
    }

    subscribers.push(email)
    return Response.json({ message: 'Berhasil berlangganan.' }, { status: 200 })
  },
}

import { useEffect, useRef, useState } from 'react'
import Button from '../Components/Button'
import Input from '../Components/Input'
import './NewsletterSection.css'

function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (feedback && !dialog.open) dialog.showModal()
    if (!feedback && dialog.open) dialog.close()
  }, [feedback])

  async function handleSubmit(event) {
    event.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const result = await response.json().catch(() => ({}))

      if (response.status === 400) {
        setFeedback({
          type: 'error',
          message: result.message || 'Email wajib diisi dan harus valid.',
        })
      } else if (response.status === 200) {
        setEmail('')
        setFeedback({
          type: 'success',
          message: result.message || 'Berhasil berlangganan.',
        })
      } else {
        setFeedback({
          type: 'error',
          message: 'Terjadi kesalahan. Silakan coba lagi.',
        })
      }
    } catch {
      setFeedback({
        type: 'error',
        message: 'Koneksi terputus. Periksa internet Anda dan coba lagi.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__container">
        <h2 id="newsletter-title" className="newsletter__title">
          Subscribe To Our Newsletter
        </h2>
        <p className="newsletter__description">
          Subscribe to our newsletter and never miss a treat! Get exclusive
          offers, fresh updates, and sweet surprises from Sweet Bakery delivered
          straight to your inbox.
        </p>

        <form className="newsletter__form" onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
          <label className="newsletter__sr-only" htmlFor="newsletter-email">
            Email Address
          </label>
          <Input
            id="newsletter-email"
            className="newsletter__input"
            type="email"
            name="email"
            placeholder="Email Address"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            className="newsletter__button"
            disabled={isSubmitting}
          >
            {isSubmitting && <span className="newsletter__spinner" aria-hidden="true" />}
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
      </div>

      <dialog
        ref={dialogRef}
        className="newsletter__dialog"
        aria-labelledby="newsletter-dialog-title"
        aria-describedby="newsletter-dialog-message"
        onClose={() => setFeedback(null)}
      >
        <h3 id="newsletter-dialog-title" className="newsletter__dialog-title">
          {feedback?.type === 'success' ? 'Berhasil Berlangganan' : 'Gagal Berlangganan'}
        </h3>
        <p id="newsletter-dialog-message" className="newsletter__dialog-message">
          {feedback?.message}
        </p>
        <Button type="button" onClick={() => setFeedback(null)}>
          Tutup
        </Button>
      </dialog>
    </section>
  )
}

export default NewsletterSection

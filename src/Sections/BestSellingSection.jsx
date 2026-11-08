import bestSellingImage from '../assets/best_product-removebg-preview (1).png'
import './BestSellingSection.css'

function BestSellingSection() {
  return (
    <section className="best-selling" aria-labelledby="best-selling-title">
      <div className="best-selling__container">
        <div className="best-selling__content">
          <h2 id="best-selling-title" className="best-selling__title">
            Best Sell<br />Food In This Week!
          </h2>
          <p className="best-selling__description">
            Our best-selling croissant is baked until golden and flaky, with a
            soft, buttery center. Freshly made for a sweet little moment any
            day of the week.
          </p>
        </div>
        <div className="best-selling__image-wrap">
          <img
            src={bestSellingImage}
            alt="Golden croissant with a decorative ribbon"
            className="best-selling__image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default BestSellingSection

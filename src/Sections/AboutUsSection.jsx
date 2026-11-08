import Button from '../Components/Button'
import cupcakesImage from '../assets/threecupcakes-removebg-preview.png'
import './AboutUsSection.css'

function AboutUsSection() {
  return (
    <section id="about-us" className="about-us-section">
      <div className="about-us-section__container">
        <div className="about-us-section__image-wrap">
          <img
            src={cupcakesImage}
            alt="Three cupcakes topped with cream and cherries"
            className="about-us-section__image"
          />
        </div>

        <div className="about-us-section__content">
          <h2 className="about-us-section__title">About Sweet Bakery</h2>
          <p className="about-us-section__description">
            Sweet Bakery brings a little joy to everyday moments. From soft
            cakes to freshly baked treats, we make each bite feel special.
          </p>
          <Button href="/about-us/" className="about-us-section__button">
            About Us
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection

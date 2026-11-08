import Navbar from '../Sections/Navbar'
import berryTreats from '../assets/product9.jpg'
import chocolateCake from '../assets/product18.jpg'
import './AboutUsDetail.css'

function AboutUsDetail() {
  return (
    <div className="about-detail-page">
      <Navbar detailPage />

      <main className="about-detail">
        <div className="about-detail__frame">
          <div className="about-detail__eyebrow" aria-hidden="true">
            <span>/ Sweet Bakery</span>
            <span>/ Our story</span>
            <span>01 / 01</span>
          </div>

          <header className="about-detail__header">
            <p className="about-detail__kicker">Baked with heart, shared with joy</p>
            <h1>ABOUT US</h1>
          </header>

          <div className="about-detail__hero-image">
            <img
              src={berryTreats}
              alt="Chocolate berry treats topped with cream and strawberries"
            />
          </div>

          <section className="about-detail__intro" aria-labelledby="about-detail-intro-title">
            <h2 id="about-detail-intro-title">
              A little sweetness makes every day feel special.
            </h2>
            <p>
              Sweet Bakery was made for the moments worth sharing. We bring
              together comforting flavors, careful baking, and a touch of joy
              in every treat we make.
            </p>
          </section>

          <section className="about-detail__story" aria-labelledby="about-detail-story-title">
            <div className="about-detail__story-copy">
              <p className="about-detail__label">01 / What we do</p>
              <h2 id="about-detail-story-title">Fresh treats, thoughtfully made.</h2>
              <p>
                From soft cakes to sweet pastries, we bake with care so each
                bite feels as lovely as the moment around it. Our favorites are
                made to be enjoyed slowly and shared freely.
              </p>
            </div>
            <div className="about-detail__story-image">
              <img
                src={chocolateCake}
                alt="A slice of chocolate cake with cream and a cherry"
                loading="lazy"
              />
            </div>
          </section>

          <section className="about-detail__values" aria-label="Our approach">
            <div>
              <p className="about-detail__label">02 / Our promise</p>
              <h2>Good things take care.</h2>
              <p>
                We pay attention to the little details, from the flavors we
                choose to the finishing touches that make a treat memorable.
              </p>
            </div>
            <div>
              <p className="about-detail__label">03 / For every moment</p>
              <h2>Made to share.</h2>
              <p>
                A celebration, a quiet afternoon, or a simple hello—there is
                always room for something sweet at the table.
              </p>
            </div>
          </section>
        </div>

        <footer className="about-detail__closing">
          <p className="about-detail__label">Sweet Bakery / Made with care</p>
          <h2>Every moment deserves a little sweetness.</h2>
          <a href="/#menu">Explore our menu <span aria-hidden="true">↗</span></a>
        </footer>
      </main>
    </div>
  )
}

export default AboutUsDetail

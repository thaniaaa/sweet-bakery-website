import Card from '../Components/Card'
import breadImage from '../assets/bread.jpg'
import cakeImage from '../assets/cake.jpg'
import cookiesImage from '../assets/cookies.jpg'
import donutImage from '../assets/donut.jpg'
import './CategorySection.css'

const categories = [
  { name: 'Bread', image: breadImage },
  { name: 'Cake', image: cakeImage },
  { name: 'Cookies', image: cookiesImage },
  { name: 'Donut', image: donutImage },
]

function CategorySection() {
  return (
    <section id="categories" className="category-section">
      <div className="category-section__container">
        <p className="category-section__eyebrow">
          Our categories
        </p>
        <h2 className="category-section__title">
          Welcome To Our Store
        </h2>
        <p className="category-section__description">
          Discover our freshly baked favorites, crafted with care to make every
          moment a little sweeter.
        </p>

        <div className="category-section__grid">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="category-card"
            >
              <img
                src={category.image}
                alt={category.name}
                className="category-card__image"
              />
              <h3 className="category-card__title">
                {category.name}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection

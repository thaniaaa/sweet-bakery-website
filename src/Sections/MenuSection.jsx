import { useEffect, useState } from 'react'
import Button from '../Components/Button'
import Card from '../Components/Card'
import Skeleton from '../Components/Skeleton'
import './MenuSection.css'

const pageSize = 8
const priceFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
})

function FoodCard({ food }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Card className="featured-food__card featured-food__card--loaded">
      <div className="featured-food__media">
        {!imageLoaded && <Skeleton className="featured-food__image-skeleton" />}
        <img
          src={food.image}
          alt={food.name}
          loading="lazy"
          className={`featured-food__image${imageLoaded ? ' featured-food__image--loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
      </div>
      <div className="featured-food__details">
        <p className="featured-food__price">
          {priceFormatter.format(food.price)}
        </p>
        <h3 className="featured-food__name">{food.name}</h3>
      </div>
    </Card>
  )
}

function MenuSection() {
  const [page, setPage] = useState(0)
  const [loadedFoods, setLoadedFoods] = useState(null)
  const [error, setError] = useState(false)
  const [requestKey, setRequestKey] = useState(0)
  const isLoading = loadedFoods === null && !error
  const totalPages = Math.ceil((loadedFoods?.length ?? 0) / pageSize)
  const visibleFoods = loadedFoods?.slice(page * pageSize, (page + 1) * pageSize) ?? []

  useEffect(() => {
    const controller = new AbortController()

    async function loadFoods() {
      try {
        const response = await fetch('/api/foods', { signal: controller.signal })
        if (!response.ok) throw new Error('Failed to load foods')

        const foods = await response.json()
        if (!Array.isArray(foods)) throw new Error('Invalid foods response')

        setLoadedFoods(foods)
      } catch {
        if (!controller.signal.aborted) setError(true)
      }
    }

    loadFoods()

    return () => controller.abort()
  }, [requestKey])

  function retry() {
    setLoadedFoods(null)
    setError(false)
    setPage(0)
    setRequestKey((current) => current + 1)
  }

  return (
    <section id="menu" className="featured-food">
      <div className="featured-food__container">
        <h2 className="featured-food__title">Our Featured Food</h2>
        <p className="featured-food__description">
          Discover our favorite cakes, pastries, and sweet treats, made to
          brighten every day.
        </p>

        {error ? (
          <div className="featured-food__error" role="alert">
            <p>Produk belum bisa dimuat. Silakan coba lagi.</p>
            <Button type="button" onClick={retry}>Coba Lagi</Button>
          </div>
        ) : (
          <>
            <div className="featured-food__grid" aria-busy={isLoading}>
              {isLoading
                ? Array.from({ length: pageSize }, (_, index) => (
                    <Card key={index} className="featured-food__card">
                      <div className="featured-food__media">
                        <Skeleton className="featured-food__image-skeleton" />
                      </div>
                      <div className="featured-food__details">
                        <Skeleton className="featured-food__skeleton-price" />
                        <Skeleton className="featured-food__skeleton-name" />
                      </div>
                    </Card>
                  ))
                : visibleFoods.map((food) => <FoodCard key={food.id} food={food} />)}
            </div>

            <div className="featured-food__controls">
              <Button
                type="button"
                className="featured-food__button--previous"
                onClick={() => setPage((current) => current - 1)}
                disabled={isLoading || page === 0}
              >
                Previous
              </Button>
              <Button
                type="button"
                className="featured-food__button--next"
                onClick={() => setPage((current) => current + 1)}
                disabled={isLoading || page >= totalPages - 1}
              >
                Next
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default MenuSection

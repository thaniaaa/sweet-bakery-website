import Navbar from './Sections/Navbar'
import HeroSection from './Sections/HeroSection'
import CategorySection from './Sections/CategorySection'
import MenuSection from './Sections/MenuSection'
import AboutUsSection from './Sections/AboutUsSection'
import NewsletterSection from './Sections/NewsletterSection'
import BestSellingSection from './Sections/BestSellingSection'

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f9cada] text-[#171214]">
      <Navbar />
      <HeroSection />
      <CategorySection />
      <AboutUsSection />
      <MenuSection />
      <BestSellingSection />
      <NewsletterSection />
    </main>
  )
}

export default App

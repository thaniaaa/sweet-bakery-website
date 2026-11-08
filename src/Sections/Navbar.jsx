const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About Us', href: '/about-us/' },
]

const detailNavigation = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/#menu' },
  { label: 'About Us', href: '/about-us/' },
]

function Navbar({ detailPage = false }) {
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-[#eadde1]/70 backdrop-blur-md ${detailPage ? 'bg-[#fffdfb]/90' : 'bg-[#f9cada]/90'}`}>
      <nav
        aria-label="Main navigation"
        className={detailPage
          ? 'mx-auto flex h-20 w-full items-center justify-between px-5 sm:px-8 lg:px-12'
          : 'mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12'}
      >
        <a
          href={detailPage ? '/' : '#home'}
          className="text-lg font-black tracking-[-0.04em] text-[#2b191e] sm:text-xl"
        >
          Sweet Bakery
        </a>

        <ul className="flex items-center gap-5 sm:gap-8 lg:gap-11">
          {(detailPage ? detailNavigation : navigation).map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-xs font-bold text-[#2b191e] transition-colors hover:text-[#c4414b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b93643] sm:text-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

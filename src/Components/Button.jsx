function Button({ children, className = '', href, ...props }) {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-[#d94f58] px-7 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(172,50,65,0.22)] transition-colors duration-200 hover:bg-[#c4414b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b93643] ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button

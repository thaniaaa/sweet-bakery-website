function Card({ children, className = '', ...props }) {
  return (
    <article
      className={`overflow-hidden rounded-3xl bg-white shadow-sm ${className}`}
      {...props}
    >
      {children}
    </article>
  )
}

export default Card

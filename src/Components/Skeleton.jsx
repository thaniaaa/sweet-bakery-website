function Skeleton({ className = '', ...props }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-2xl bg-pink-100 ${className}`}
      {...props}
    />
  )
}

export default Skeleton

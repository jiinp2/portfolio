function Label({ children, className = '' }) {
  return (
    <span className={`text-label font-normal text-gray-600 bg-gray-100 py-1.5 px-3 rounded-full mb-8 tracking-tight leading-tight block w-fit ${className}`}>
      {children}
    </span>
  )
}

export default Label


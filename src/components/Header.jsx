function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-black/[0.06] py-3 sticky top-0 z-[100] max-sm:py-2">
      <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center md:max-lg:px-4 max-md:flex-col max-md:gap-3 max-md:px-4">
        {/* Left - Name/Logo */}
        <div className="flex-[0_0_auto]">
          <span className="text-text no-underline text-xl font-semibold tracking-normal transition-colors duration-200 hover:text-indigo-500">
            Jiin Park
          </span>
        </div>

        {/* Right - Resume Button */}
        <div className="flex-[0_0_auto]">
          <a
            href="/JiinPark_Resume_Portfolio.pdf"
            className="bg-text text-white no-underline py-2 px-4 rounded-lg font-medium text-sm transition-all duration-150 border border-transparent hover:bg-gray-700 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] max-md:py-1.5 max-md:px-3 max-sm:text-xs max-sm:py-1.5 max-sm:px-2.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

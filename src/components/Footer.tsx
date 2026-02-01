export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <img
          src="/logo.png"
          alt="Mulligans"
          className="h-10 w-auto"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 text-mulligan-gray text-sm">
          <span>410 Highway 21 Bypass, Fort Mill, SC 29715</span>
          <a href="mailto:MulligansFM@Gmail.com" className="hover:text-mulligan-blue transition-colors">
            MulligansFM@Gmail.com
          </a>
          <a href="tel:803-548-0044" className="hover:text-mulligan-blue transition-colors">
            (803) 548-0044
          </a>
        </div>
      </div>
    </footer>
  )
}

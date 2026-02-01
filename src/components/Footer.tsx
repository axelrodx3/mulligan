export default function Footer() {
  return (
    <footer className="bg-tavern-black border-t border-tavern-gray py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-display text-lg text-tavern-white">Mulligans Sports Bar & Grille</p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-tavern-silver text-sm">
          <span>410 Highway 21 Bypass, Fort Mill, SC 29715</span>
          <a href="mailto:MulligansFM@Gmail.com" className="hover:text-mulligan-gold transition-colors">
            MulligansFM@Gmail.com
          </a>
          <a href="tel:803-548-0044" className="hover:text-mulligan-gold transition-colors">
            (803) 548-0044
          </a>
        </div>
      </div>
    </footer>
  )
}

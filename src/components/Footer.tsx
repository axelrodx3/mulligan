const SOCIAL_LINKS = [
  {
    href: 'https://www.facebook.com/profile.php?id=100090319329163',
    label: 'Facebook',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    href: 'https://www.yelp.com/biz/mulligans-sports-bar-and-grille-fort-mill?osq=Mulligans+Sports+Bar+%26+Grille',
    label: 'Yelp',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 0-.182-1.507l-.455-.38C15.197 5.43 12.576 4 9.72 4 4.29 4 0 8.29 0 13.72c0 2.263.78 4.38 2.122 6.06.123.155.31.237.5.237.112 0 .224-.03.323-.095l3.074-1.78c.463-.268.618-.878.327-1.334L3.576 13.77a1.074 1.074 0 0 1 .566-1.643l5.428-1.558c.658-.188 1.018-.905.807-1.555l-1.62-4.952a1.05 1.05 0 0 1 .634-1.323.996.996 0 0 1 1.24.444l2.63 5.318c.355.718 1.314.99 2.062.577l4.677-2.545a1.06 1.06 0 0 1 1.488.422c.183.358.1.796-.197 1.043z" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/mulligans_fortmill?igsh=MTMzNnY0aTkzcW14ZQ==',
    label: 'Instagram',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    href: 'https://www.doordash.com/store/30915869?src=yp&delivery=true&utm_source_id=9c61cbf7-44e0-4156-a9f2-e16bdacaca82',
    label: 'Order on DoorDash',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Social & Order Links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {SOCIAL_LINKS.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-mulligan-gray-dark hover:border-mulligan-blue hover:text-mulligan-blue hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 font-medium text-sm"
              aria-label={label}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-200">
          <img src="/logo.png" alt="Mulligans" className="h-10 w-auto" />
          <div className="flex flex-wrap items-center justify-center gap-4 text-mulligan-gray text-sm">
            <span>410 Highway 21 Bypass, Fort Mill, SC 29715</span>
            <a href="mailto:MulligansFM@Gmail.com" className="hover:text-mulligan-blue transition-colors duration-200 hover:underline underline-offset-2">
              MulligansFM@Gmail.com
            </a>
            <a href="tel:803-548-0044" className="hover:text-mulligan-blue transition-colors duration-200 hover:underline underline-offset-2">
              (803) 548-0044
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

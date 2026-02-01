const DOORDASH_URL = 'https://www.doordash.com/store/30915869?src=yp&delivery=true'

export default function StickyOrderBar() {
  return (
    <a
      href={DOORDASH_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-2 px-4 py-3 bg-mulligan-blue hover:bg-mulligan-blue-dark text-white font-semibold text-center shadow-lg transition-colors duration-200 active:scale-[0.98]"
    >
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
      <span>Order on DoorDash</span>
    </a>
  )
}

import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const GALLERY_PHOTOS = [
  { src: '/drinks1.png', alt: 'Bar with drinks and specials' },
  { src: '/drinks2.png', alt: 'Liquor display at Mulligans' },
  { src: '/drinks3.png', alt: 'Bartender pouring at Mulligans' },
  { src: '/location1.png', alt: 'Mulligans sports bar interior' },
  { src: '/food1.png', alt: 'Buffalo wings and fries' },
  { src: '/food2.png', alt: 'Loaded potato skins' },
  { src: '/food3.png', alt: 'Mozzarella sticks with marinara' },
  { src: '/food4.png', alt: 'French dip sandwich' },
]

const HOURS = [
  { days: 'Monday – Thursday', time: '3:00 PM – 1:00 AM' },
  { days: 'Friday & Saturday', time: '12:00 PM – 1:00 AM' },
  { days: 'Sunday', time: '1:00 PM – 1:00 AM' },
]

const WEEKLY_SPECIALS = [
  { day: 'Monday', special: '$4 House Shots' },
  { day: 'Tuesday', special: '$2 Tacos / $3 Mex Beer' },
  { day: 'Wednesday', special: '$8 Burgers' },
  { day: 'Thursday', special: "$4 Well's / $4 Fireball" },
  { day: 'Friday', special: '$9.99 Fish N Chips' },
  { day: 'Saturday', special: '$13 Domestic Bucket' },
  { day: 'Sunday', special: 'Happy Hour All Day' },
]

/**
 * Hours: Mon-Thu 3PM-1AM, Fri-Sat 12PM-1AM, Sun 1PM-1AM
 * All times in local timezone. "1AM" means 1AM the next calendar day.
 */
function isOpenNow(): { open: boolean; status: string } {
  const now = new Date()
  const day = now.getDay() // 0=Sun, 1=Mon, ..., 6=Sat
  const currentMinutes = now.getHours() * 60 + now.getMinutes()

  const CLOSE_AT = 1 * 60 + 0 // 1:00 AM

  let open: boolean

  if (day === 0) {
    // Sunday: 1PM-1AM. Before 1AM = still Saturday's hours. After 1PM = Sunday's hours.
    const OPEN_AT = 13 * 60 + 0 // 1:00 PM
    open = currentMinutes < CLOSE_AT || currentMinutes >= OPEN_AT
  } else if (day === 5 || day === 6) {
    // Fri-Sat: 12PM-1AM
    const OPEN_AT = 12 * 60 + 0 // 12:00 PM
    open = currentMinutes < CLOSE_AT || currentMinutes >= OPEN_AT
  } else {
    // Mon-Thu: 3PM-1AM
    const OPEN_AT = 15 * 60 + 0 // 3:00 PM
    open = currentMinutes < CLOSE_AT || currentMinutes >= OPEN_AT
  }

  return { open, status: open ? 'Open Now' : 'Closed' }
}

const TAGLINE_PHRASES = ['Sports.', 'Great food.', 'Good vibes.']

const ON_TAP = ['Modelo', 'Miller Lite', 'Juicy Jay', 'Allagash', 'Coors Banquet']

const AMENITIES = [
  '14 Large HD Flat Screen TVs',
  'Massive 80" TV',
  '4 Tap Trivia TVs',
  '2 Pool Tables',
  'Cornhole Room',
  '2 Dart Boards',
  'Outside Patio with TV',
  'DJ Fri & Sat 9:30 PM – 1:00 AM',
]

function getTodaySpecialIndex() {
  return (new Date().getDay() + 6) % 7 // Maps Sun=0..Sat=6 to Mon=0..Sun=6
}

export default function Home() {
  const { open, status } = isOpenNow()
  const todayIndex = getTodaySpecialIndex()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)
  const [taglinePhraseIndex, setTaglinePhraseIndex] = useState(0)
  const [taglineText, setTaglineText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [taglineReady, setTaglineReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setTaglineReady(true), 1200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!taglineReady) return
    const phrase = TAGLINE_PHRASES[taglinePhraseIndex]
    const target = `Fort Mill's destination for ${phrase}`

    if (!isDeleting) {
      if (taglineText.length < target.length) {
        const timer = setTimeout(() => setTaglineText(target.slice(0, taglineText.length + 1)), 60)
        return () => clearTimeout(timer)
      }
      const pause = setTimeout(() => setIsDeleting(true), 2500)
      return () => clearTimeout(pause)
    } else {
      if (taglineText.length > 0) {
        const timer = setTimeout(() => setTaglineText(taglineText.slice(0, -1)), 40)
        return () => clearTimeout(timer)
      }
      setIsDeleting(false)
      setTaglinePhraseIndex((i) => (i + 1) % TAGLINE_PHRASES.length)
    }
  }, [taglineText, taglinePhraseIndex, isDeleting, taglineReady])


  useEffect(() => {
    if (lightboxIndex === null) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i === null ? null : (i - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length))
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i === null ? null : (i + 1) % GALLERY_PHOTOS.length))
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [lightboxIndex])

  return (
    <div>
      {/* Hero */}
      <section className="pt-24 pb-10 px-6 bg-gradient-to-b from-gray-50/80 via-white to-white">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="/logo.png"
            alt="Mulligans Sports Bar & Grille"
            className="mx-auto max-w-md w-full mb-6 animate-hero-enter"
            style={{ animationDelay: '0.1s' }}
          />
          <p
            className="text-mulligan-gray-dark text-xl md:text-2xl font-semibold mb-6 tracking-tight animate-hero-enter min-h-[2.5rem] md:min-h-[3rem] flex flex-wrap justify-center gap-0"
            style={{ animationDelay: '0.25s' }}
          >
            <span>{taglineText}</span>
            <span className="inline-block w-0.5 h-6 md:h-7 bg-mulligan-blue ml-0.5 animate-pulse" aria-hidden="true" />
          </p>
          <div
            className="animate-hero-enter mb-8"
            style={{ animationDelay: '0.4s' }}
          >
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-semibold text-white ${
                open ? 'bg-green-600 animate-open-pulse' : 'bg-red-600'
              }`}
            >
              {status}
            </span>
          </div>
          <div
            className="flex flex-wrap gap-4 justify-center animate-hero-enter"
            style={{ animationDelay: '0.55s' }}
          >
            <Link
              to="/menu"
              className="px-6 py-3 bg-mulligan-blue hover:bg-mulligan-blue-dark text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg"
            >
              View Menu
            </Link>
            <Link
              to="/location"
              className="px-6 py-3 border-2 border-mulligan-blue text-mulligan-blue hover:bg-mulligan-blue hover:text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg"
            >
              Location & Hours
            </Link>
            <a
              href="https://www.doordash.com/store/30915869?src=yp&delivery=true"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#FF3008] hover:bg-[#e62e06] text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg"
            >
              Order on DoorDash
            </a>
          </div>
        </div>
      </section>

      {/* Venue Photos - delayed so it doesn't show during hero entrance */}
      <section className="py-16 px-6 bg-gray-50 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-mulligan-blue mb-10 tracking-wide text-center">
            Food & Drinks
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_PHOTOS.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-mulligan-blue focus:ring-offset-2 rounded-xl overflow-hidden"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-44 md:h-52 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>

          {lightboxIndex !== null && (
            <div
              className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
              onClick={() => setLightboxIndex(null)}
              onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
              onTouchEnd={(e) => {
                touchEndX.current = e.changedTouches[0].clientX
                const diff = touchStartX.current - touchEndX.current
                const threshold = 50
                if (diff > threshold) {
                  setLightboxIndex((i) => (i === null ? 0 : (i + 1) % GALLERY_PHOTOS.length))
                } else if (diff < -threshold) {
                  setLightboxIndex((i) => (i === null ? 0 : (i - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length))
                }
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Photo gallery"
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex(null)
                }}
                className="absolute top-4 right-4 z-[100] min-w-[44px] min-h-[44px] w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 active:bg-white/20 rounded-full transition-colors text-2xl"
                aria-label="Close"
              >
                ×
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setLightboxIndex((i) => (i === null ? 0 : (i - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length))
                }}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-[100] min-w-[48px] min-h-[48px] flex items-center justify-center text-white hover:bg-white/10 active:bg-white/20 rounded-full transition-colors text-4xl touch-manipulation"
                aria-label="Previous"
              >
                ‹
              </button>
              <img
                src={GALLERY_PHOTOS[lightboxIndex].src}
                alt={GALLERY_PHOTOS[lightboxIndex].alt}
                className="max-w-[90vw] max-h-[85vh] object-contain z-0 select-none pointer-events-none"
                draggable={false}
              />
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setLightboxIndex((i) => (i === null ? 0 : (i + 1) % GALLERY_PHOTOS.length))
                }}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-[100] min-w-[48px] min-h-[48px] flex items-center justify-center text-white hover:bg-white/10 active:bg-white/20 rounded-full transition-colors text-4xl touch-manipulation"
                aria-label="Next"
              >
                ›
              </button>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[100] text-white/80 text-sm">
                {lightboxIndex + 1} / {GALLERY_PHOTOS.length}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Specials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-mulligan-blue mb-10 tracking-wider text-center">
            Specials
          </h2>

          {/* Today's Special - prominent callout */}
          <div className="mb-10 rounded-xl bg-mulligan-blue/10 border-2 border-mulligan-blue p-6 text-center">
            <p className="text-mulligan-blue text-sm font-semibold uppercase tracking-wider mb-1">Today&apos;s Special</p>
            <p className="font-display text-2xl md:text-3xl text-mulligan-blue tracking-wide">
              {WEEKLY_SPECIALS[todayIndex].day}
            </p>
            <p className="text-mulligan-gray-dark text-lg md:text-xl font-medium mt-1">
              {WEEKLY_SPECIALS[todayIndex].special}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-display text-xl text-mulligan-blue mb-4">Happy Hour</h3>
              <p className="text-mulligan-gray-dark mb-2 font-medium">3:00 – 7:00 PM Mon–Fri</p>
              <ul className="space-y-1 text-mulligan-gray">
                <li>$4 Well Drinks</li>
                <li>$5 Wine</li>
                <li>$3 Domestic Bottle</li>
              </ul>
              <h3 className="font-display text-2xl text-mulligan-blue mt-6 mb-4 tracking-wide">Daily</h3>
              <ul className="space-y-1 text-mulligan-gray">
                <li>Fried Mushrooms $9.00</li>
                <li>Philly Eggrolls $11.00</li>
              </ul>
            </div>
            <div>
              <img
                src="/specials-board.png"
                alt="Weekly specials board"
                className="w-full rounded-xl shadow-lg border border-gray-200"
              />
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                {WEEKLY_SPECIALS.map(({ day, special }, i) => {
                  const isToday = i === todayIndex
                  return (
                    <div
                      key={day}
                      className={`flex justify-between items-center py-3 px-3 rounded-lg ${
                        isToday ? 'bg-mulligan-blue/10 border-2 border-mulligan-blue' : 'border-b border-gray-200'
                      }`}
                    >
                      <span className="font-medium text-mulligan-gray-dark flex items-center gap-2">
                        {isToday && (
                          <span className="px-1.5 py-0.5 bg-mulligan-blue text-white text-xs font-bold rounded">
                            TODAY
                          </span>
                        )}
                        {day}
                      </span>
                      <span className={isToday ? 'text-mulligan-blue-dark font-semibold' : 'text-mulligan-gray'}>
                        {special}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="hidden md:grid mt-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {WEEKLY_SPECIALS.map(({ day, special }, i) => {
              const isToday = i === todayIndex
              return (
                <div
                  key={day}
                  className={`rounded-lg p-4 text-center transition-all duration-200 hover:shadow-md hover:scale-[1.02] ${
                    isToday
                      ? 'bg-mulligan-blue/15 border-2 border-mulligan-blue shadow-md ring-2 ring-mulligan-blue/20'
                      : 'bg-mulligan-blue/5 border border-mulligan-blue/20 hover:bg-mulligan-blue/10'
                  }`}
                >
                  {isToday && (
                    <span className="inline-block px-2 py-0.5 bg-mulligan-blue text-white text-xs font-bold rounded mb-2">
                      TODAY
                    </span>
                  )}
                  <p className={`font-semibold text-sm ${isToday ? 'text-mulligan-blue-dark' : 'text-mulligan-blue'}`}>
                    {day}
                  </p>
                  <p className="text-mulligan-gray-dark text-sm mt-1">{special}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What's on Tap */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-mulligan-blue mb-10 tracking-wider text-center">
            What&apos;s on Tap
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {ON_TAP.map((beer) => (
              <div
                key={beer}
                className="px-6 py-3 bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:border-mulligan-blue hover:shadow-md hover:scale-105 font-medium text-mulligan-gray-dark hover:text-mulligan-blue"
              >
                {beer}
              </div>
            ))}
          </div>
          <p className="text-center text-mulligan-gray text-sm mt-6">
            More taps coming soon — stop in to see our full selection!
          </p>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-mulligan-blue mb-4 tracking-wider">
            Follow Us on Instagram
          </h2>
          <p className="text-mulligan-gray mb-8">@mulligans_fortmill</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8 max-w-2xl mx-auto">
            {GALLERY_PHOTOS.slice(0, 6).map((photo) => (
              <a
                key={photo.src}
                href="https://www.instagram.com/mulligans_fortmill/"
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-square overflow-hidden rounded-lg border-2 border-gray-200 hover:border-mulligan-blue transition-colors"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
          <a
            href="https://www.instagram.com/mulligans_fortmill/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
            Follow @mulligans_fortmill
          </a>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-mulligan-blue mb-6 tracking-wide">
            Our Story
          </h2>
          <p className="text-mulligan-gray-dark leading-relaxed mb-4">
            Mulligans Sports Bar and Grille is a destination for the Sports Watching Enthusiasts,
            Great Food, and Friendly Atmosphere.
          </p>
          <p className="text-mulligan-gray-dark leading-relaxed mb-6">
            Clever golf terms describe our menu items and you will always find daily drink specials
            each week. We have outfitted our facility to include Inside and Outdoor Seating, 14
            Large HD Flat Screen TVs, including a massive 80" TV, and 4 Tap Trivia TVs. We also
            have 2 Pool Tables, a Cornhole Room, and 2 Dart Boards. We have also included an
            outside Patio Area with table, chairs, and a T.V.
          </p>
          <p className="text-mulligan-gray-dark leading-relaxed">
            We welcome Fantasy Sports League Enthusiasts, Dart Leagues, Cornhole Leagues, and
            Pool Leagues. You'll have something fun to do at all times here at Mulligans! Fridays
            and Saturdays we have a DJ in the house from 9:30 PM to 1:00 AM.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-mulligan-blue mb-10 tracking-wider text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AMENITIES.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 hover:shadow-md hover:border-mulligan-blue/30"
              >
                <span className="text-mulligan-blue text-xl">✓</span>
                <span className="text-mulligan-gray-dark">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl text-mulligan-blue mb-6 tracking-wide">
              Hours
            </h2>
            <div className="space-y-3">
              {HOURS.map(({ days, time }) => (
                <div
                  key={days}
                  className="flex justify-between items-center py-3 border-b border-gray-200"
                >
                  <span className="text-mulligan-gray-dark">{days}</span>
                  <span className="text-mulligan-gray">{time}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-mulligan-blue mb-6 tracking-wider">
              Find Us
            </h2>
            <p className="text-mulligan-gray-dark mb-2">410 Highway 21 Bypass</p>
            <p className="text-mulligan-gray-dark mb-6">Fort Mill, SC 29715</p>
            <Link
              to="/location"
              className="inline-block px-6 py-3 bg-mulligan-blue hover:bg-mulligan-blue-dark text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

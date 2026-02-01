import { Link } from 'react-router-dom'

const HOURS = [
  { days: 'Monday – Thursday', time: '3:00 PM – 1:00 AM' },
  { days: 'Friday & Saturday', time: '12:00 PM – 1:00 AM' },
  { days: 'Sunday', time: '1:00 PM – 1:00 AM' },
]

function isOpenNow(): { open: boolean; status: string } {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours()
  const minute = now.getMinutes()
  const currentMinutes = hour * 60 + minute

  const closeMinutes = 1 * 60 + 0

  if (day === 0) {
    const openMinutes = 13 * 60 + 0
    const open = currentMinutes >= openMinutes || currentMinutes < closeMinutes
    return { open, status: open ? 'Open' : 'Closed' }
  }
  if (day === 5 || day === 6) {
    const openMinutes = 12 * 60 + 0
    const open = currentMinutes >= openMinutes || currentMinutes < closeMinutes
    return { open, status: open ? 'Open' : 'Closed' }
  }
  const openMinutes = 15 * 60 + 0
  const open = currentMinutes >= openMinutes || currentMinutes < closeMinutes
  return { open, status: open ? 'Open' : 'Closed' }
}

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

export default function Home() {
  const { open, status } = isOpenNow()

  return (
    <div className="text-tavern-white">
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 pt-24 pb-16 bg-gradient-to-b from-tavern-dark to-tavern-black">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wide text-center mb-4">
          Mulligans
        </h1>
        <p className="font-display text-2xl md:text-3xl text-mulligan-gold tracking-wider text-center mb-6">
          Sports Bar & Grille
        </p>
        <p className="text-tavern-silver text-lg md:text-xl text-center max-w-2xl mb-8">
          Fort Mill's destination for sports, great food, and friendly atmosphere.
        </p>
        <span
          className={`inline-block px-4 py-2 rounded-full text-sm font-semibold text-white ${
            open ? 'bg-green-600/90 animate-open-pulse' : 'bg-red-600/90'
          }`}
        >
          {status} Now
        </span>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            to="/menu"
            className="px-6 py-3 bg-mulligan-green hover:bg-mulligan-green/90 text-white font-semibold rounded-lg transition-colors"
          >
            View Menu
          </Link>
          <Link
            to="/location"
            className="px-6 py-3 border border-tavern-gray hover:border-mulligan-gold text-tavern-white font-semibold rounded-lg transition-colors"
          >
            Location & Hours
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-tavern-charcoal">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-mulligan-gold mb-6 tracking-wide">
            Our Story
          </h2>
          <p className="text-tavern-offwhite leading-relaxed mb-4">
            Mulligans Sports Bar and Grille is a destination for the Sports Watching Enthusiasts,
            Great Food, and Friendly Atmosphere.
          </p>
          <p className="text-tavern-offwhite leading-relaxed mb-6">
            Clever golf terms describe our menu items and you will always find daily drink specials
            each week. We have outfitted our facility to include Inside and Outdoor Seating, 14
            Large HD Flat Screen TVs, including a massive 80" TV, and 4 Tap Trivia TVs. We also
            have 2 Pool Tables, a Cornhole Room, and 2 Dart Boards. We have also included an
            outside Patio Area with table, chairs, and a T.V.
          </p>
          <p className="text-tavern-offwhite leading-relaxed">
            We welcome Fantasy Sports League Enthusiasts, Dart Leagues, Cornhole Leagues, and
            Pool Leagues. You'll have something fun to do at all times here at Mulligans! Fridays
            and Saturdays we have a DJ in the house from 9:30 PM to 1:00 AM.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-tavern-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-mulligan-gold mb-8 tracking-wide text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AMENITIES.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 px-4 py-3 bg-tavern-charcoal/50 rounded-lg border border-tavern-gray/50"
              >
                <span className="text-mulligan-green text-xl">✓</span>
                <span className="text-tavern-offwhite">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-tavern-charcoal">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-mulligan-gold mb-8 tracking-wide text-center">
            Hours
          </h2>
          <div className="space-y-3">
            {HOURS.map(({ days, time }) => (
              <div
                key={days}
                className="flex justify-between items-center py-3 border-b border-tavern-gray/50"
              >
                <span className="text-tavern-offwhite">{days}</span>
                <span className="text-tavern-silver">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-tavern-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-mulligan-gold mb-6 tracking-wide">
            Find Us
          </h2>
          <p className="text-tavern-offwhite mb-2">410 Highway 21 Bypass</p>
          <p className="text-tavern-offwhite mb-6">Fort Mill, SC 29715</p>
          <Link
            to="/location"
            className="inline-block px-6 py-3 bg-mulligan-green hover:bg-mulligan-green/90 text-white font-semibold rounded-lg transition-colors"
          >
            Get Directions
          </Link>
        </div>
      </section>
    </div>
  )
}

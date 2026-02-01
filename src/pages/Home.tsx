import { Link } from 'react-router-dom'

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
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="/logo.png"
            alt="Mulligans Sports Bar & Grille"
            className="mx-auto max-w-md w-full mb-6"
          />
          <p className="text-mulligan-gray text-lg md:text-xl mb-6">
            Fort Mill's destination for sports, great food, and good vibes.
          </p>
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold text-white mb-8 ${
              open ? 'bg-green-600 animate-open-pulse' : 'bg-red-600'
            }`}
          >
            {status}
          </span>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/menu"
              className="px-6 py-3 bg-mulligan-blue hover:bg-mulligan-blue-dark text-white font-semibold rounded-lg transition-colors"
            >
              View Menu
            </Link>
            <Link
              to="/location"
              className="px-6 py-3 border-2 border-mulligan-blue text-mulligan-blue hover:bg-mulligan-blue hover:text-white font-semibold rounded-lg transition-colors"
            >
              Location & Hours
            </Link>
            <a
              href="https://www.doordash.com/store/30915869?src=yp&delivery=true"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#FF3008] hover:bg-[#e62e06] text-white font-semibold rounded-lg transition-colors"
            >
              Order on DoorDash
            </a>
          </div>
        </div>
      </section>

      {/* Venue Photos */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-mulligan-blue mb-10 tracking-wide text-center">
            At Mulligans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="/drinks1.png"
              alt="Bar with drinks and specials"
              className="w-full h-56 object-cover rounded-xl shadow-lg"
            />
            <img
              src="/drinks2.png"
              alt="Liquor display at Mulligans"
              className="w-full h-56 object-cover rounded-xl shadow-lg"
            />
            <img
              src="/location1.png"
              alt="Mulligans sports bar interior"
              className="w-full h-56 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Specials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-mulligan-blue mb-10 tracking-wide text-center">
            Specials
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-display text-xl text-mulligan-blue mb-4">Happy Hour</h3>
              <p className="text-mulligan-gray-dark mb-2 font-medium">3:00 – 7:00 PM Mon–Fri</p>
              <ul className="space-y-1 text-mulligan-gray">
                <li>$4 Well Drinks</li>
                <li>$5 Wine</li>
                <li>$3 Domestic Bottle</li>
              </ul>
              <h3 className="font-display text-xl text-mulligan-blue mt-6 mb-4">Daily</h3>
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
                {WEEKLY_SPECIALS.map(({ day, special }) => (
                  <div
                    key={day}
                    className="flex justify-between py-2 border-b border-gray-200 text-sm"
                  >
                    <span className="font-medium text-mulligan-gray-dark">{day}</span>
                    <span className="text-mulligan-gray">{special}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:grid mt-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {WEEKLY_SPECIALS.map(({ day, special }) => (
              <div
                key={day}
                className="bg-mulligan-blue/5 rounded-lg p-4 border border-mulligan-blue/20 text-center"
              >
                <p className="font-semibold text-mulligan-blue text-sm">{day}</p>
                <p className="text-mulligan-gray-dark text-sm mt-1">{special}</p>
              </div>
            ))}
          </div>
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
          <h2 className="font-display text-3xl md:text-4xl text-mulligan-blue mb-10 tracking-wide text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AMENITIES.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                <span className="text-mulligan-blue text-xl">✓</span>
                <span className="text-mulligan-gray-dark">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-16 px-6 bg-gray-50">
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
            <h2 className="font-display text-3xl text-mulligan-blue mb-6 tracking-wide">
              Find Us
            </h2>
            <p className="text-mulligan-gray-dark mb-2">410 Highway 21 Bypass</p>
            <p className="text-mulligan-gray-dark mb-6">Fort Mill, SC 29715</p>
            <Link
              to="/location"
              className="inline-block px-6 py-3 bg-mulligan-blue hover:bg-mulligan-blue-dark text-white font-semibold rounded-lg transition-colors"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

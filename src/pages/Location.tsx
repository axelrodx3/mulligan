const HOURS = [
  { days: 'Monday – Thursday', time: '3:00 PM – 1:00 AM' },
  { days: 'Friday & Saturday', time: '12:00 PM – 1:00 AM' },
  { days: 'Sunday', time: '1:00 PM – 1:00 AM' },
]

const MAP_EMBED_URL =
  'https://www.google.com/maps?q=410+Highway+21+Bypass,+Fort+Mill,+SC+29715&output=embed'

export default function Location() {
  return (
    <div className="pt-24 pb-20 px-6 bg-tavern-black text-tavern-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-mulligan-gold mb-12 tracking-wide">
          Location & Hours
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-display text-2xl text-tavern-white mb-4">Address</h2>
            <p className="text-tavern-offwhite mb-6">
              410 Highway 21 Bypass
              <br />
              Fort Mill, SC 29715
            </p>
            <a
              href="https://www.google.com/maps/dir//410+Highway+21+Bypass,+Fort+Mill,+SC+29715"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-mulligan-green hover:bg-mulligan-green/90 text-white font-semibold rounded-lg transition-colors"
            >
              Get Directions
            </a>
          </div>
          <div>
            <h2 className="font-display text-2xl text-tavern-white mb-4">Hours</h2>
            <div className="space-y-3">
              {HOURS.map(({ days, time }) => (
                <div
                  key={days}
                  className="flex justify-between items-center py-2 border-b border-tavern-gray/50"
                >
                  <span className="text-tavern-offwhite">{days}</span>
                  <span className="text-tavern-silver">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-tavern-gray shadow-xl aspect-video">
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mulligans Sports Bar & Grille Location"
            className="min-h-[300px]"
          />
        </div>
      </div>
    </div>
  )
}

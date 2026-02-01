export default function Contact() {
  return (
    <div className="pt-24 pb-20 px-6 bg-white text-gray-800">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-mulligan-blue mb-12 tracking-wide">
          Contact
        </h1>

        <div className="space-y-8">
          <div>
            <h2 className="font-display text-xl text-gray-800 mb-2">Address</h2>
            <a
              href="https://www.google.com/maps/dir//410+Highway+21+Bypass,+Fort+Mill,+SC+29715"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mulligan-gray-dark hover:text-mulligan-blue transition-colors"
            >
              410 Highway 21 Bypass
              <br />
              Fort Mill, SC 29715
            </a>
          </div>

          <div>
            <h2 className="font-display text-xl text-gray-800 mb-2">Phone</h2>
            <a
              href="tel:803-548-0044"
              className="text-mulligan-gray-dark hover:text-mulligan-blue transition-colors"
            >
              (803) 548-0044
            </a>
          </div>

          <div>
            <h2 className="font-display text-xl text-gray-800 mb-2">Email</h2>
            <a
              href="mailto:MulligansFM@Gmail.com"
              className="text-mulligan-gray-dark hover:text-mulligan-blue transition-colors"
            >
              MulligansFM@Gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

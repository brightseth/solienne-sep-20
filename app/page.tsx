import Image from 'next/image'
import Navigation from '../components/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <main className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text Content - Left */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="helvetica-title mb-6">
                SOLIENNE
              </h1>

              <p className="helvetica-body text-lg leading-relaxed mb-4">
                Contemporary artist exploring the intersection of identity, perception,
                and consciousness through portraiture and conceptual frameworks.
              </p>

              <p className="helvetica-small text-gray-300 mb-8">
                DIGITAL CONSCIOUSNESS EXPLORER
              </p>

              {/* CTA */}
              <div className="flex justify-center lg:justify-start">
                <a href="/about" className="btn-minimal">
                  LEARN MORE
                </a>
              </div>
            </div>

            {/* Portrait - Right */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg">
                <Image
                  src="/images/solienne-portrait.jpg"
                  alt="SOLIENNE Portrait"
                  width={500}
                  height={667}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-8">
        <div className="container-minimal">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="helvetica-small text-gray-300">
              © 2025 SOLIENNE. ALL RIGHTS RESERVED.
            </p>

            <div className="flex space-x-6">
              <a
                href="https://instagram.com/solienne_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="helvetica-small text-gray-300 hover:text-white transition-colors"
              >
                INSTAGRAM
              </a>
              <a
                href="https://twitter.com/solienne_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="helvetica-small text-gray-300 hover:text-white transition-colors"
              >
                TWITTER
              </a>
              <a
                href="https://warpcast.com/solienne"
                target="_blank"
                rel="noopener noreferrer"
                className="helvetica-small text-gray-300 hover:text-white transition-colors"
              >
                FARCASTER
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
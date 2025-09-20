'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-700">
      <div className="container-minimal py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="helvetica-subtitle text-white hover:text-gray-300 transition-colors">
            SOLIENNE
          </Link>

          {/* Menu */}
          <div className="flex space-x-8">
            <Link
              href="/about"
              className={`nav-link ${isActive('/about') ? 'border-b-white' : ''}`}
            >
              ABOUT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
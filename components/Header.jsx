import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const isActive = (path) => {
    return router.pathname === path
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/team', label: 'Our Team' },
    { href: '/contact', label: 'Contact' },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [router.pathname])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-surface/90 backdrop-blur-lg shadow-lg shadow-primary/5'
        : 'bg-surface/80 backdrop-blur-md shadow-on-surface/4'
    }`}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-on-primary text-xl">
                  local_hospital
                </span>
              </div>
              <span className="text-2xl font-bold text-primary tracking-tight font-headline group-hover:text-primary-container transition-colors duration-300">
                Radiant Dental Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`relative font-label text-sm tracking-wide transition-all duration-300 cursor-pointer group ${
                    isActive(link.href)
                      ? 'text-primary font-bold'
                      : 'text-on-surface hover:text-primary'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-on-surface hover:text-primary transition-colors font-medium">
              <span className="material-symbols-outlined">call</span>
            </button>
            <Link href="/book-appointment" className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-surface-container transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`material-symbols-outlined text-2xl transition-transform duration-300 ${
              isMenuOpen ? 'rotate-90' : ''
            }`}>
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-outline-variant/20">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive(link.href)
                    ? 'bg-primary-container text-on-primary-container'
                    : 'hover:bg-surface-container text-on-surface'
                }`}>
                  <span className="font-medium">{link.label}</span>
                </div>
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="px-4 pt-4 space-y-3">
              <button className="w-full flex items-center justify-center gap-2 bg-surface-container text-on-surface px-4 py-3 rounded-xl hover:bg-primary hover:text-on-primary transition-all">
                <span className="material-symbols-outlined">call</span>
                Call Us
              </button>
              <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary px-4 py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

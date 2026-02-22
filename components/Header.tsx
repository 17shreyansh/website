'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Optimize scroll handler with a threshold
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/materials', label: 'Materials' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-gray-200 py-3' // Compact & Glassy when scrolled
          : 'bg-white/0 border-transparent py-5' // Airy & Transparent at top
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-[1.02]">
              <Image 
                src="/logo.jpeg" 
                alt="Nirmanveda" 
                width={48} 
                height={48} 
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl tracking-tight text-slate-900 ${scrolled ? 'opacity-100' : 'opacity-90'}`}>
                Nirmanveda
              </span>
              <span className="text-[10px] text-gray-500 -mt-1">Listed by RSD Bharti Ltd.</span>
            </div>
          </Link>

          {/* Desktop Navigation - Clean & Simple */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-1">
              {links.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-md text-[15px] font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-gray-900 bg-gray-100/50' // Active State
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' // Hover State
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="pl-4 border-l border-gray-200">
              <Link href="#download">
                <button className="bg-primary-700 hover:bg-primary-800 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]">
                  Get App
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Smooth Slide Down */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-b border-gray-200 shadow-lg"
          >
            <div className="px-6 py-6 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium ${
                    pathname === link.href ? 'text-primary-700' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link href="#download" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-primary-700 text-white py-3 rounded-lg font-medium text-base active:bg-primary-800">
                    Get App
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
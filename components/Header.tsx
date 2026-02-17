'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/materials', label: 'Materials' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image src="/logo.jpeg" alt="RSD Bharti" width={65} height={65} className="rounded-xl" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-700 transition-colors font-medium text-[15px]"
              >
                {link.label}
              </Link>
            ))}
            <Link href="#download">
              <button className="bg-primary-700 text-white px-5 py-2.5 rounded-lg hover:bg-primary-800 transition-colors font-medium text-[15px]">
                Get App
              </button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-gray-700 hover:text-primary-700 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="#download" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-primary-700 text-white px-5 py-3 rounded-lg font-medium mt-2">
                  Get App
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

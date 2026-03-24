import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Image src="/logo.jpeg" alt="Nirmanveda" width={65} height={65} className="rounded-xl mb-5" />
            <h3 className="text-white font-bold text-lg mb-2">Nirmanveda</h3>
            <p className="text-xs text-gray-400 mb-3">Listed by RSD Bharti Ltd.</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Building India's future with premium construction materials and 25 years of trusted service.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm hover:text-gold-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm hover:text-gold-400 transition-colors">About Us</Link></li>
              <li><Link href="/materials" className="text-sm hover:text-gold-400 transition-colors">Materials</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-gold-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5 text-sm">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span>+91 8809997729</span>
                  <span>+91 8539997729</span>
                  <span>+91 9771297729</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>info@nirmanveda.com</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>[YOUR CITY, STATE]</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Nirmanveda - Listed by RSD Bharti Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

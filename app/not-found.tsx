'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import Button from '@/components/Button'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 to-primary-700 text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <div className="mb-8">
          <h1 className="text-9xl font-bold mb-4 text-gold-400">404</h1>
          <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-primary-100 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" variant="secondary">
              <Home className="mr-2" size={20} />
              Go Home
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white hover:text-primary-900"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2" size={20} />
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

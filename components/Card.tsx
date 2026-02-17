'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8 } : {}}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}
    >
      {children}
    </motion.div>
  )
}

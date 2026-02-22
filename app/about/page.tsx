'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Award, TrendingUp, Users, Shield } from 'lucide-react'
import Card from '@/components/Card'

export default function About() {
  const timeline = [
    { year: '1999', event: 'RSD Bharti Ltd. founded with a vision to transform construction materials supply in India' },
    { year: '2005', event: 'Expanded operations across North India, partnering with premium brands like UltraTech and Tata' },
    { year: '2012', event: 'Achieved milestone of 500+ successful projects and established strong brand reputation' },
    { year: '2018', event: 'Launched Nirmanveda brand and digital platform for seamless material ordering' },
    { year: '2024', event: 'Celebrating 25 years of excellence with 1000+ projects and 12+ brand partnerships' },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-primary-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-block bg-primary-500/20 border border-primary-500/30 px-3 py-1.5 rounded-md mb-5">
              <span className="text-primary-400 text-sm font-medium">About Us</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold mb-6">
              Nirmanveda
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-4">
              <span className="font-semibold">Listed by RSD Bharti Ltd.</span> — 25 Years of Building Excellence
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From a small venture to India's trusted construction materials partner, our journey is built on quality, integrity, and unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  <span className="font-bold text-primary-700">Nirmanveda</span>, listed by <span className="font-semibold">RSD Bharti Ltd.</span>, began in 1999 with a simple yet powerful vision: to provide builders and contractors with genuine, high-quality construction materials they could trust.
                </p>
                <p>
                  <span className="font-semibold">RSD Bharti Ltd.</span> has been a cornerstone in the construction materials industry for over 25 years. Through our brand <span className="font-bold text-primary-700">Nirmanveda</span>, we've grown from a local supplier to a recognized name, serving thousands of projects across India.
                </p>
                <p>
                  Our success is built on strong relationships with premium brands like UltraTech, Tata Tiscon, JSW, and an unwavering commitment to quality. Today, we're proud to be the preferred partner for builders, contractors, and developers who demand nothing but the best.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Award, label: '25+ Years', sublabel: 'Experience' },
                { icon: Users, label: '1000+', sublabel: 'Projects' },
                { icon: Shield, label: '100%', sublabel: 'Genuine' },
                { icon: TrendingUp, label: '12+', sublabel: 'Brands' },
              ].map((stat, index) => (
                <Card key={index} className="text-center">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary-700" />
                  <div className="text-4xl font-bold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-gray-600">{stat.sublabel}</div>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To empower India's construction industry with premium, genuine materials and exceptional service, ensuring every project is built on a foundation of trust and quality.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To be India's most trusted and innovative construction materials partner, setting industry standards for quality, reliability, and customer satisfaction.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Milestones that shaped RSD Bharti Ltd. and Nirmanveda
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{item.year}</span>
                  </div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-2xl p-6 mt-4">
                  <p className="text-gray-700 text-lg leading-relaxed">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on the quality of materials, ensuring every product meets the highest standards.'
              },
              {
                title: 'Trust & Integrity',
                description: 'Building lasting relationships through honest business practices and transparent dealings.'
              },
              {
                title: 'Customer Focus',
                description: 'Your success is our success. We go above and beyond to meet your project needs.'
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Building2, Hammer, Package, CheckCircle, Shield, Award } from 'lucide-react'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Link from 'next/link'

export default function Materials() {
  const cementBrands = [
    { name: 'UltraTech Cement', description: 'India\'s largest cement manufacturer, known for superior strength and durability' },
    { name: 'Dalmia Cement', description: 'Premium quality cement with excellent bonding properties' },
    { name: 'ACC Cement', description: 'Trusted brand with consistent quality and performance' },
    { name: 'Ambuja Cement', description: 'High-grade cement for all construction needs' },
    { name: 'Shree Cement', description: 'Advanced cement technology for modern construction' },
    { name: 'Birla Cement', description: 'Reliable cement with proven track record' },
  ]

  const steelBrands = [
    { name: 'Tata Tiscon', description: 'Premium TMT bars with superior strength and ductility' },
    { name: 'JSW Steel', description: 'High-quality steel for structural applications' },
    { name: 'Jindal Steel', description: 'Trusted steel brand with excellent corrosion resistance' },
    { name: 'Shyam Steel', description: 'Advanced TMT technology for enhanced durability' },
    { name: 'Kamdhenu Steel', description: 'Quality steel bars for all construction requirements' },
  ]

  const essentials = [
    { name: 'River Sand', description: 'Premium quality sand for concrete and masonry work' },
    { name: 'Stone Chips', description: 'Graded aggregates in various sizes for construction' },
    { name: 'Binding Wire', description: 'High-tensile wire for reinforcement binding' },
    { name: 'Aggregates', description: 'Quality aggregates for concrete mixing' },
    { name: 'Construction Chemicals', description: 'Specialized chemicals for enhanced construction' },
    { name: 'Waterproofing Materials', description: 'Premium waterproofing solutions' },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Premium Construction Materials
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Sourced directly from India's most trusted manufacturers. Every material is genuine, tested, and delivered with care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: '100% Genuine', description: 'Direct from manufacturers' },
              { icon: Award, title: 'Quality Tested', description: 'Certified materials only' },
              { icon: CheckCircle, title: 'Timely Delivery', description: 'On-time, every time' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-primary-700" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Cement */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="text-white" size={40} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Cement</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Top-grade cement from India's leading manufacturers for superior strength and durability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cementBrands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{brand.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{brand.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TMT Steel */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Hammer className="text-white" size={40} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">TMT Steel</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-strength TMT bars from trusted brands for robust structural integrity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steelBrands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{brand.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{brand.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Essentials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Package className="text-white" size={40} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Construction Essentials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete range of construction materials for every project requirement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {essentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-900 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Need Help Choosing Materials?
            </h2>
            <p className="text-xl text-primary-100 mb-10">
              Our experts are here to guide you in selecting the right materials for your project.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get Expert Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

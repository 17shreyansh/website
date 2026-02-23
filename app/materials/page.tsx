'use client'

import { motion } from 'framer-motion'
import { Building2, Hammer, Package, CheckCircle, Shield, Award } from 'lucide-react'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Link from 'next/link'
import Image from 'next/image'

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
      <section className="bg-gradient-to-br from-slate-900 to-primary-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl lg:text-7xl font-bold mb-6">
              Premium Construction Materials
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Sourced directly from India's most trusted manufacturers. Every material is genuine, tested, and delivered with care by <span className="font-semibold">Nirmanveda</span>.
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
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Premium Cement</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Top-grade cement from India's leading manufacturers for superior strength and durability
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-red-500 hover:shadow-lg transition-all">
              <div className="aspect-square relative bg-gray-50 rounded-lg flex items-center justify-center mb-3">
                <Image src="/Ultratech_Cement_vector_Logo.png" alt="UltraTech" fill className="object-contain p-2" />
              </div>
              <div className="font-bold text-gray-900 text-center text-sm">UltraTech</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <div className="aspect-square relative bg-gray-50 rounded-lg flex items-center justify-center mb-3">
                <Image src="/Dalmia logo.jpg" alt="Dalmia" fill className="object-contain p-2" />
              </div>
              <div className="font-bold text-gray-900 text-center text-sm">Dalmia</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="aspect-square relative bg-gray-50 rounded-lg flex items-center justify-center mb-3">
                <Image src="/ACC logo.webp" alt="ACC" fill className="object-contain p-2" />
              </div>
              <div className="font-bold text-gray-900 text-center text-sm">ACC</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-green-600 hover:shadow-lg transition-all">
              <div className="aspect-square relative bg-gray-50 rounded-lg flex items-center justify-center mb-3">
                <Image src="/Ambuja logo.jpg" alt="Ambuja" fill className="object-contain p-2" />
              </div>
              <div className="font-bold text-gray-900 text-center text-sm">Ambuja</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-orange-600 hover:shadow-lg transition-all">
              <div className="aspect-square relative bg-gray-50 rounded-lg flex items-center justify-center mb-3">
                <Image src="/Shree logo.png" alt="Shree" fill className="object-contain p-2" />
              </div>
              <div className="font-bold text-gray-900 text-center text-sm">Shree</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }} className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-yellow-600 hover:shadow-lg transition-all">
              <div className="aspect-square relative bg-gray-50 rounded-lg flex items-center justify-center mb-3">
                <Image src="/Birla logo.jpg" alt="Birla" fill className="object-contain p-2" />
              </div>
              <div className="font-bold text-gray-900 text-center text-sm">Birla</div>
            </motion.div>
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
            <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Hammer className="text-white" size={40} />
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">TMT Steel (Saria)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-strength TMT bars from trusted brands for robust structural integrity
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-blue-700 hover:shadow-lg transition-all">
              <div className="aspect-square relative bg-gray-50 rounded-lg flex items-center justify-center mb-3">
                <Image src="/Tata Tiscon logo.webp" alt="Tata Tiscon" fill className="object-contain p-2" />
              </div>
              <div className="font-bold text-gray-900 text-center text-sm">Tata Tiscon</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-red-600 hover:shadow-lg transition-all">
              <div className="aspect-square relative bg-gray-50 rounded-lg flex items-center justify-center mb-3">
                <Image src="/JSW logo.jpg" alt="JSW Steel" fill className="object-contain p-2" />
              </div>
              <div className="font-bold text-gray-900 text-center text-sm">JSW Steel</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-orange-600 hover:shadow-lg transition-all">
              <div className="aspect-square relative bg-gray-50 rounded-lg flex items-center justify-center mb-3">
                <Image src="/Jindal logo.png" alt="Jindal" fill className="object-contain p-2" />
              </div>
              <div className="font-bold text-gray-900 text-center text-sm">Jindal</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-green-700 hover:shadow-lg transition-all">
              <div className="aspect-square relative bg-gray-50 rounded-lg flex items-center justify-center mb-3">
                <Image src="/Shyam logo.png" alt="Shyam Steel" fill className="object-contain p-2" />
              </div>
              <div className="font-bold text-gray-900 text-center text-sm">Shyam Steel</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-yellow-600 hover:shadow-lg transition-all">
              <div className="aspect-square relative bg-gray-50 rounded-lg flex items-center justify-center mb-3">
                <Image src="/Kamdhenu logo.png" alt="Kamdhenu" fill className="object-contain p-2" />
              </div>
              <div className="font-bold text-gray-900 text-center text-sm">Kamdhenu</div>
            </motion.div>
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
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Construction Essentials</h2>
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
      <section className="py-24 bg-gradient-to-br from-slate-900 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">
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

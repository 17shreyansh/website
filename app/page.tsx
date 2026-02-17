'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Award, Shield, Users, ArrowRight, Download, CheckCircle, Building2, Hammer, Package, Star, TrendingUp } from 'lucide-react'
import Button from '@/components/Button'

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-primary-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-800 opacity-50" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }} />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-block bg-gold-500/20 border border-gold-500/30 px-3 py-1.5 rounded-md mb-5">
                <span className="text-gold-400 text-sm font-medium">Est. 1999 • 25 Years Strong</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-[1.1]">
                Building India's Future with
                <span className="block text-gold-400 mt-2">25 Years of Trust</span>
              </h1>
              
              <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
                RSD Bharti Industries Pvt. Ltd. — Leading Suppliers of Premium Cement, Steel, and Construction Essentials.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Link href="#download">
                  <button className="bg-gold-500 text-gray-900 px-6 py-3.5 rounded-lg font-semibold hover:bg-gold-400 transition-all shadow-lg">
                    Download App
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="border-2 border-white/30 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-all">
                    Get Quote
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-500/20 rounded-full blur-2xl" />
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                      <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                        <Award size={20} className="text-gray-900" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Experience</div>
                        <div className="font-bold">25+ Years</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                      <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                        <Shield size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Premium Brands</div>
                        <div className="font-bold">12+ Partners</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                      <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                        <TrendingUp size={20} className="text-gray-900" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Projects</div>
                        <div className="font-bold">1000+ Completed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-gray-50 py-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-between items-center gap-8">
            <div>
              <div className="text-4xl font-bold text-gray-900">25+</div>
              <div className="text-gray-600 mt-1">Years Experience</div>
            </div>
            <div className="h-12 w-px bg-gray-300 hidden md:block" />
            <div>
              <div className="text-4xl font-bold text-gray-900">12+</div>
              <div className="text-gray-600 mt-1">Premium Brands</div>
            </div>
            <div className="h-12 w-px bg-gray-300 hidden md:block" />
            <div>
              <div className="text-4xl font-bold text-gray-900">1000+</div>
              <div className="text-gray-600 mt-1">Projects Delivered</div>
            </div>
            <div className="h-12 w-px bg-gray-300 hidden md:block" />
            <div>
              <div className="text-4xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600 mt-1">Genuine Materials</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-md text-sm font-medium mb-4">
                About Us
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                A Legacy of Strength
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At RSD Bharti Industries, we don't just sell materials; we provide the foundation for your dreams. With over 25 years of market experience, we have become a backbone for the construction industry, ensuring that every structure built with our supplies stands the test of time.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you are a local contractor or a large-scale developer, we bridge the gap between world-class manufacturers and your construction site.
              </p>
              <Link href="/about">
                <button className="text-primary-700 font-semibold inline-flex items-center hover:gap-2 transition-all">
                  Learn Our Story
                  <ArrowRight size={20} className="ml-1" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="bg-gradient-to-br from-primary-700 to-primary-900 text-white p-8 rounded-2xl">
                <Award className="w-12 h-12 mb-4 text-gold-400" />
                <h3 className="text-2xl font-bold mb-2">25 Years Experience</h3>
                <p className="text-primary-100">Quarter-century of industry expertise in construction materials.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <Shield className="w-10 h-10 mb-3 text-primary-700" />
                  <h4 className="font-bold text-gray-900 mb-1">100% Genuine</h4>
                  <p className="text-sm text-gray-600">On-time delivery</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <Users className="w-10 h-10 mb-3 text-primary-700" />
                  <h4 className="font-bold text-gray-900 mb-1">12+ Brands</h4>
                  <p className="text-sm text-gray-600">Top manufacturers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-md text-sm font-medium mb-4">
              Our Materials
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              High-Performance Materials
              <span className="block">for Every Project</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              We curate only the "A-Grade" brands of India to ensure your construction is earthquake-resistant and durable.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                <Building2 className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Cement</h3>
              <p className="text-gray-600 mb-5">The Engineer's Choice for superior strength and reliability.</p>
              <div className="space-y-2 mb-6">
                {['UltraTech — The Engineer\'s Choice', 'Dalmia — Future Today', 'ACC & Ambuja — Giants of Reliability', 'Shree & Birla Samrat'].map((brand) => (
                  <div key={brand} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="text-blue-600 mr-2" size={16} />
                    {brand}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-5">
                <Hammer className="text-gray-700" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">TMT Steel & Rebars</h3>
              <p className="text-gray-600 mb-5">Precision and strength for earthquake-resistant structures.</p>
              <div className="space-y-2 mb-6">
                {['Tata Tiscon — India\'s Preferred', 'JSW & Jindal — Precision & Strength', 'Shyam & Kamdhenu', 'Balmukund Steel'].map((brand) => (
                  <div key={brand} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="text-gray-700 mr-2" size={16} />
                    {brand}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                <Package className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Construction Essentials</h3>
              <p className="text-gray-600 mb-5">High-purity raw materials for superior finishing.</p>
              <div className="space-y-2 mb-6">
                {['High-Purity Screened Sand', 'Crushed Stone Chips', 'Premium Binding Wire', 'Quality Aggregates'].map((item) => (
                  <div key={item} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="text-amber-600 mr-2" size={16} />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-10">
            <Link href="/materials">
              <button className="bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors">
                View All Materials
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* App Promo Section */}
      <section className="py-20 lg:py-28 bg-white" id="download">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-br from-primary-900 to-primary-700 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 lg:p-16"
              >
                <div className="inline-block bg-gold-500/20 border border-gold-500/30 px-3 py-1.5 rounded-md mb-5">
                  <span className="text-gold-400 text-sm font-medium">Mobile App</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                  Order Materials On The Go
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Get instant quotes, track orders in real-time, and manage your construction material needs from your phone.
                </p>
                
                <div className="space-y-3 mb-8">
                  {[
                    'Instant price quotes',
                    'Real-time order tracking',
                    'Secure payments',
                    '24/7 support'
                  ].map((feature) => (
                    <div key={feature} className="flex items-center text-white">
                      <CheckCircle className="text-gold-400 mr-3" size={20} />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="bg-gold-500 text-gray-900 px-5 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors inline-flex items-center">
                    <Download className="mr-2" size={18} />
                    Android
                  </button>
                  <button className="border-2 border-white/30 text-white px-5 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center">
                    <Download className="mr-2" size={18} />
                    iOS
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-full min-h-[400px] hidden lg:block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-600 opacity-50" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-64 h-[500px] bg-white/10 backdrop-blur-sm rounded-[3rem] border-8 border-white/20 p-4">
                    <div className="w-full h-full bg-gradient-to-br from-primary-800 to-primary-900 rounded-[2.5rem] flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-3xl font-bold text-white">RB</span>
                        </div>
                        <p className="text-sm text-gray-300">Mobile App</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get in touch with our team for premium materials and expert guidance.
            </p>
            <Link href="/contact">
              <button className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors inline-flex items-center">
                Contact Us Today
                <ArrowRight className="ml-2" size={20} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

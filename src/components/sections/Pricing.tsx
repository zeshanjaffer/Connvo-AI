'use client';
import { PRICING_TIERS } from '@/constants';
import PricingTier from '../ui/PricingTier';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { FiStar, FiCheck, FiZap, FiAward } from 'react-icons/fi';

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white via-[#FCF8DD]/20 to-white text-[#00809D] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Geometric shapes */}
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-10 sm:top-20 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 border-2 border-[#FFD700]/20 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, 50, 0],
            x: [0, -20, 0],
            scale: [1, 1.4, 1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-20 sm:bottom-40 left-4 sm:left-20 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-[#00809D]/10 to-[#006d85]/10 rounded-lg transform rotate-45"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFD700]/20 to-[#D3AF37]/20 backdrop-blur-sm border border-[#FFD700]/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <FiAward className="text-[#FFD700] text-sm sm:text-base" />
            <span>Choose Your Plan</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-[#00809D] via-[#006d85] to-[#00809D] bg-clip-text text-transparent">
              Simple Pricing
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl text-[#00809D]/80 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4"
          >
            Choose the perfect plan for your communication training needs
          </motion.p>
        </motion.div>
        
        {/* Enhanced Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
          {PRICING_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative group ${tier.highlight ? 'lg:scale-110 z-10' : ''}`}
            >
              {/* Popular badge */}
              {tier.highlight && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute -top-2 sm:-top-4 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="bg-gradient-to-r from-[#FFD700] to-[#D3AF37] text-[#00809D] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-2xl border-2 border-white">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <FiStar className="text-[#00809D] text-xs sm:text-sm" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Enhanced Pricing Card */}
              <div className={`relative bg-gradient-to-br from-white via-white to-[#FCF8DD]/30 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8 hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2 sm:hover:-translate-y-4 border-2 ${
                tier.highlight 
                  ? 'border-[#FFD700] shadow-[#FFD700]/20' 
                  : 'border-[#00809D]/10'
              } overflow-hidden`}>
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#FFD700] to-[#D3AF37] rounded-full transform translate-x-12 -translate-y-12 sm:translate-x-16 sm:-translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tr from-[#00809D] to-[#006d85] rounded-full transform -translate-x-10 translate-y-10 sm:-translate-x-12 sm:translate-y-12"></div>
                </div>

                {/* Header */}
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center mb-4 sm:mb-6"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#00809D] group-hover:text-[#006d85] transition-colors duration-300">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl sm:text-4xl font-bold text-[#00809D]">${tier.price}</span>
                      {tier.price !== 'Custom' && (
                        <span className="text-sm sm:text-base text-gray-500">/month</span>
                      )}
                    </div>
                  </motion.div>

                  {/* Features */}
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {tier.features.map((feature, featureIdx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + featureIdx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 sm:gap-3"
                      >
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-[#FFD700] to-[#D3AF37] rounded-full flex items-center justify-center flex-shrink-0">
                          <FiCheck size={10} className="sm:text-xs text-[#00809D] font-bold" />
                        </div>
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced CTA Button */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="mt-6 sm:mt-8"
                  >
                    {tier.name === 'Enterprise' ? (
                      <Button
                        href="#contact"
                        variant="outline"
                        size="md"
                        className="w-full bg-gradient-to-r from-[#00809D] to-[#006d85] hover:from-[#006d85] hover:to-[#00809D] text-white border-[#00809D] hover:border-[#006d85] font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                      >
                        <div className="flex items-center gap-2">
                          <span>Contact Us</span>
                          <FiZap size={14} className="sm:text-lg" />
                        </div>
                      </Button>
                    ) : (
                      <Button
                        href="#"
                        variant={tier.highlight ? 'primary' : 'secondary'}
                        size="md"
                        className={`w-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base ${
                          tier.highlight 
                            ? 'bg-gradient-to-r from-[#FFD700] to-[#D3AF37] hover:from-[#D3AF37] hover:to-[#FFD700] text-[#00809D]' 
                            : 'bg-gradient-to-r from-[#00809D] to-[#006d85] hover:from-[#006d85] hover:to-[#00809D] text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span>{tier.cta}</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <FiZap size={14} className="sm:text-lg" />
                          </motion.div>
                        </div>
                      </Button>
                    )}
                  </motion.div>
                </div>

                {/* Floating decorative elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#FFD700] to-[#D3AF37] rounded-full opacity-30 blur-sm"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-[#D3AF37] to-[#FFD700] rounded-full opacity-40 blur-sm"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-[#FCF8DD] to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#FFD700]/20">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-[#00809D]">Ready to Get Started?</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">Join thousands of users improving their communication skills</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                href="tel:+1234567890"
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-[#FFD700] to-[#D3AF37] hover:from-[#D3AF37] hover:to-[#FFD700] text-[#00809D] font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <FiZap size={16} className="sm:text-xl" />
                  <span>Start Free Trial</span>
                </div>
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                className="bg-gradient-to-r from-[#00809D] to-[#006d85] hover:from-[#006d85] hover:to-[#00809D] text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <FiAward size={16} className="sm:text-xl" />
                  <span>Enterprise Plan</span>
                </div>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

'use client';
import { MODES } from '@/constants';
import { FiPhoneCall, FiUserCheck, FiMessageCircle, FiArrowRight, FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';

const icons = {
  FiPhoneCall: FiPhoneCall,
  FiUserCheck: FiUserCheck,
  FiMessageCircle: FiMessageCircle,
};

const Modes = () => {
  return (
    <section id="modes" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#FCF8DD] via-white to-[#FCF8DD]/50 text-[#00809D] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 border-2 border-[#FFD700]/30 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, 40, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-20 sm:top-40 right-4 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#FFD700]/20 to-[#D3AF37]/20 rounded-lg transform rotate-45"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-20 sm:bottom-32 left-1/3 w-20 h-20 sm:w-24 sm:h-24 border-2 border-[#00809D]/20 rounded-full"
        />
        
        {/* Particle effect */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -100, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 3 + Math.random() * 2, 
                repeat: Infinity, 
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 bg-[#FFD700] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00809D]/10 to-[#006d85]/10 backdrop-blur-sm border border-[#00809D]/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <FiZap className="text-[#FFD700] text-sm sm:text-base" />
            <span>Choose Your Practice Mode</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-[#00809D] via-[#006d85] to-[#00809D] bg-clip-text text-transparent">
              Practice Modes
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl text-[#00809D]/80 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4"
          >
            Choose from our three specialized training modes to improve your communication skills
          </motion.p>
        </motion.div>
        
        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {MODES.map((mode, idx) => {
            const Icon = icons[mode.icon as keyof typeof icons] || FiPhoneCall;
            return (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative bg-gradient-to-br from-white via-white to-[#FCF8DD]/30 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-8 sm:p-10 lg:p-12 hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2 sm:hover:-translate-y-4 border border-[#00809D]/10 overflow-hidden min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
                  
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#FFD700] to-[#D3AF37] rounded-full transform translate-x-12 -translate-y-12 sm:translate-x-16 sm:-translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tr from-[#00809D] to-[#006d85] rounded-full transform -translate-x-10 translate-y-10 sm:-translate-x-12 sm:translate-y-12"></div>
                  </div>

                  {/* Floating icon with enhanced styling */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative"
                    >
                      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-r from-[#FFD700] via-[#D3AF37] to-[#FFD700] rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-[#FFD700]/50 transition-all duration-500">
                        <Icon size={32} className="sm:text-4xl lg:text-5xl text-[#00809D] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-r from-[#FFD700] to-[#D3AF37] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="pt-16 sm:pt-20 lg:pt-24 text-center relative z-10">
                    <motion.h3 
                      whileHover={{ scale: 1.05 }}
                      className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-[#00809D] group-hover:text-[#006d85] transition-colors duration-300"
                    >
                      {mode.title}
                    </motion.h3>
                    
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                      className="text-base sm:text-lg md:text-xl text-[#00809D]/80 leading-relaxed mb-8 sm:mb-10"
                    >
                      {mode.description}
                    </motion.p>
                    
                    {/* Enhanced CTA */}
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#00809D]/10"
                    >
                      <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#00809D] to-[#006d85] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold group-hover:shadow-lg transition-all duration-300 cursor-pointer text-base sm:text-lg">
                        <span>Start Practice</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <FiArrowRight size={18} className="sm:text-xl" />
                        </motion.div>
                      </div>
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
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-[#FFD700] to-[#D3AF37] text-[#00809D] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <FiPhoneCall size={20} className="sm:text-2xl" />
            <span>Ready to Start? Call Now!</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiArrowRight size={18} className="sm:text-xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Modes;

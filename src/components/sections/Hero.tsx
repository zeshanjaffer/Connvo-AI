'use client';

import { motion } from 'framer-motion';
import { FiPhoneCall, FiUsers, FiAward, FiClock } from 'react-icons/fi';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#00809D] via-[#006d85] to-[#004d6b] text-white py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs - Responsive positioning */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-10 sm:top-20 left-4 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#FFD700] to-[#D3AF37] rounded-full opacity-20 blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-20 sm:top-40 right-4 sm:right-20 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-[#D3AF37] to-[#FFD700] rounded-full opacity-30 blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 sm:bottom-32 left-1/4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#FFD700] to-[#D3AF37] rounded-full opacity-25 blur-sm"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00809D]/50 via-transparent to-[#006d85]/50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FFD700] rounded-full animate-pulse"></div>
            <span className="whitespace-nowrap">AI-Powered Phone Training Platform</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
          >
            Master Phone Conversations with{' '}
            <span className="bg-gradient-to-r from-[#FFD700] via-[#D3AF37] to-[#FFD700] bg-clip-text text-transparent animate-pulse">
              AI
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-[#FCF8DD] leading-relaxed font-light"
          >
            <span className="font-serif italic">Practice cold calling, interviews, and small talk in real-time.</span><br />
            <span className="font-bold text-[#FFD700] text-xl sm:text-2xl md:text-3xl tracking-wide">No login required - just call!</span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 py-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FFD700] rounded-full flex items-center justify-center">
                <FiUsers className="text-[#00809D] text-xs sm:text-sm" />
              </div>
              <div>
                <div className="font-bold text-sm sm:text-lg">10K+</div>
                <div className="text-xs sm:text-sm text-[#FCF8DD]/80">Active Users</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FFD700] rounded-full flex items-center justify-center">
                <FiAward className="text-[#00809D] text-xs sm:text-sm" />
              </div>
              <div>
                <div className="font-bold text-sm sm:text-lg">95%</div>
                <div className="text-xs sm:text-sm text-[#FCF8DD]/80">Success Rate</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FFD700] rounded-full flex items-center justify-center">
                <FiClock className="text-[#00809D] text-xs sm:text-sm" />
              </div>
              <div>
                <div className="font-bold text-sm sm:text-lg">24/7</div>
                <div className="text-xs sm:text-sm text-[#FCF8DD]/80">Available</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <Button
              href="tel:+1234567890"
              variant="primary"
              size="lg"
              className="group flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#FFD700] to-[#D3AF37] hover:from-[#D3AF37] hover:to-[#FFD700] text-[#00809D] font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg relative overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19c-.54 0-.99.45-.99.99 0 9.36 7.6 16.96 16.96 16.96.54 0 .99-.45.99-.99v-3.5c0-.54-.45-.99-.99-.99z"/>
              </svg>
              <span className="flex items-center gap-1 sm:gap-2 relative z-10">
                <span>Call Now to Practice</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 17l9.2-9.2M17 17V7H7"/>
                </svg>
              </span>
            </Button>
            <Button
              href="#modes"
              variant="secondary"
              size="lg"
              className="group flex items-center justify-center gap-2 bg-white text-[#00809D] hover:bg-[#FCF8DD] hover:text-[#006d85] font-semibold text-base sm:text-lg relative overflow-hidden w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Learn How It Works</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
              </svg>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 justify-center lg:justify-start"
          >
            <div className="flex -space-x-1 sm:-space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#FFD700] to-[#D3AF37] border-2 border-white flex items-center justify-center text-xs font-bold text-[#00809D]">
                  {i}
                </div>
              ))}
            </div>
            <div className="text-xs sm:text-sm text-[#FCF8DD]/80 text-center lg:text-left">
              <span className="font-semibold text-[#FFD700]">4.9/5</span> rating from 2,000+ users
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right side - Enhanced mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          {/* Main phone mockup */}
          <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-2 sm:p-3 w-full max-w-sm lg:max-w-md mx-auto border border-white/20 shadow-2xl">
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 sm:p-8">
              <div className="space-y-4 sm:space-y-6">
                {/* Header */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#FFD700] to-[#D3AF37] flex items-center justify-center shadow-lg">
                      <FiPhoneCall className="text-[#00809D] text-lg sm:text-2xl" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-lg">AI Call Assistant</h3>
                    <p className="text-xs sm:text-sm text-[#FCF8DD]">Ready to practice</p>
                  </div>
                </div>
                
                {/* Chat messages */}
                <div className="space-y-3 sm:space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="bg-white/10 p-3 sm:p-4 rounded-lg max-w-[85%] border border-white/10"
                  >
                    <p className="text-[#FCF8DD] text-sm sm:text-base">Hello! I&apos;m your AI practice partner. What would you like to work on today?</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                    className="bg-gradient-to-r from-[#FFD700] to-[#D3AF37] p-3 sm:p-4 rounded-lg max-w-[85%] ml-auto"
                  >
                    <p className="text-[#00809D] font-medium text-sm sm:text-base">I&apos;d like to practice cold calling for sales.</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 }}
                    className="bg-white/10 p-3 sm:p-4 rounded-lg max-w-[85%] border border-white/10"
                  >
                    <p className="text-[#FCF8DD] text-sm sm:text-base">Perfect! I&apos;ll simulate a sales prospect. Ready to start?</p>
                  </motion.div>
                </div>

                {/* Typing indicator */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  className="flex items-center gap-2 text-xs sm:text-sm text-[#FCF8DD]/60"
                >
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FFD700] rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FFD700] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FFD700] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span>AI is typing...</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Floating elements around mockup */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#FFD700] to-[#D3AF37] rounded-full opacity-20 blur-sm"
          />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-[#D3AF37] to-[#FFD700] rounded-full opacity-30 blur-sm"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-4 h-6 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-0.5 h-2 sm:w-1 sm:h-3 bg-[#FFD700] rounded-full mt-1 sm:mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

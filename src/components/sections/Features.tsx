'use client';
import { motion } from 'framer-motion';
import { FiShield, FiZap, FiUsers, FiTrendingUp, FiClock, FiAward, FiArrowRight, FiStar } from 'react-icons/fi';

const FEATURES = [
  {
    icon: FiZap,
    title: 'Real-time AI Conversations',
    description: 'Practice with advanced AI that adapts to your speaking style and provides instant feedback.',
    color: 'from-[#FFD700] to-[#D3AF37]'
  },
  {
    icon: FiShield,
    title: '100% Private & Secure',
    description: 'Your conversations are never recorded or stored. Complete privacy guaranteed.',
    color: 'from-[#00809D] to-[#006d85]'
  },
  {
    icon: FiUsers,
    title: 'No Account Required',
    description: 'Start practicing immediately. Just call the number and begin your training session.',
    color: 'from-[#FFD700] to-[#D3AF37]'
  },
  {
    icon: FiTrendingUp,
    title: 'Track Your Progress',
    description: 'Monitor your improvement with detailed analytics and performance insights.',
    color: 'from-[#00809D] to-[#006d85]'
  },
  {
    icon: FiClock,
    title: 'Available 24/7',
    description: 'Practice anytime, anywhere. Our AI is always ready to help you improve.',
    color: 'from-[#FFD700] to-[#D3AF37]'
  },
  {
    icon: FiAward,
    title: 'Proven Results',
    description: 'Join thousands of users who have improved their communication skills with Connvo.',
    color: 'from-[#00809D] to-[#006d85]'
  }
];

const Features = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white via-[#FCF8DD]/30 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating stars */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -50, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 4 + Math.random() * 3, 
              repeat: Infinity, 
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            className="absolute text-[#FFD700]/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${6 + Math.random() * 10}px`
            }}
          >
            <FiStar />
          </motion.div>
        ))}
        
        {/* Geometric shapes */}
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
          className="absolute top-10 sm:top-20 left-4 sm:left-10 w-20 h-20 sm:w-24 sm:h-24 border-2 border-[#FFD700]/20 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, 40, 0],
            x: [0, 20, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 sm:bottom-40 right-4 sm:right-20 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#00809D]/10 to-[#006d85]/10 rounded-lg transform rotate-45"
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
            <FiStar className="text-[#FFD700] text-sm sm:text-base" />
            <span>Why Choose Connvo?</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-[#00809D] via-[#006d85] to-[#00809D] bg-clip-text text-transparent">
              Why Choose Connvo?
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4"
          >
            Experience the future of communication training with our cutting-edge AI technology
          </motion.p>
        </motion.div>
        
        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-white via-white to-[#FCF8DD]/20 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8 h-full hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2 sm:hover:-translate-y-4 border border-[#00809D]/10 overflow-hidden">
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${feature.color} rounded-full transform translate-x-12 -translate-y-12 sm:translate-x-16 sm:-translate-y-16`}></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tr from-[#00809D]/20 to-[#006d85]/20 rounded-full transform -translate-x-10 translate-y-10 sm:-translate-x-12 sm:translate-y-12"></div>
                </div>

                {/* Floating icon with enhanced styling */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative mb-6 sm:mb-8"
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-lg transition-all duration-500`}>
                    <feature.icon size={28} className="sm:text-3xl text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.h3 
                    whileHover={{ scale: 1.02 }}
                    className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#00809D] group-hover:text-[#006d85] transition-colors duration-300"
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6"
                  >
                    {feature.description}
                  </motion.p>
                  
                  {/* Enhanced CTA */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 text-[#00809D] font-semibold group-hover:text-[#006d85] transition-colors duration-300 cursor-pointer text-sm sm:text-base"
                  >
                    <span>Learn More</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FiArrowRight size={14} className="sm:text-lg" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Floating decorative elements */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-[#FFD700] to-[#D3AF37] rounded-full opacity-30 blur-sm"
                />
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-[#D3AF37] to-[#FFD700] rounded-full opacity-40 blur-sm"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
        >
          {[
            { number: '10K+', label: 'Active Users', icon: FiUsers },
            { number: '95%', label: 'Success Rate', icon: FiAward },
            { number: '24/7', label: 'Available', icon: FiClock }
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-white to-[#FCF8DD]/30 rounded-2xl p-4 sm:p-6 shadow-lg border border-[#00809D]/10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#FFD700] to-[#D3AF37] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={20} className="sm:text-2xl text-[#00809D]" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00809D] mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 
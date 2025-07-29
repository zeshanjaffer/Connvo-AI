'use client';
import { motion } from 'framer-motion';
import { FiStar, FiMessageSquare, FiArrowRight, FiHeart, FiZap } from 'react-icons/fi';

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'Sales Manager',
    company: 'TechCorp',
    rating: 5,
    text: 'Connvo transformed my cold calling skills. I went from 10% to 35% success rate in just 3 weeks!',
    avatar: 'SJ',
    color: 'from-[#FFD700] to-[#D3AF37]'
  },
  {
    name: 'Michael Chen',
    role: 'Job Seeker',
    company: 'Recent Graduate',
    rating: 5,
    text: 'The interview prep mode helped me ace 4 interviews and land my dream job. Highly recommended!',
    avatar: 'MC',
    color: 'from-[#00809D] to-[#006d85]'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Network Marketing',
    company: 'Entrepreneur',
    rating: 5,
    text: 'Perfect for networking events. I feel so much more confident starting conversations now.',
    avatar: 'ER',
    color: 'from-[#FFD700] to-[#D3AF37]'
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#FCF8DD] via-white to-[#FCF8DD]/50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating hearts */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -80, 0],
              rotate: [0, 360],
              scale: [1, 1.4, 1]
            }}
            transition={{ 
              duration: 5 + Math.random() * 3, 
              repeat: Infinity, 
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            className="absolute text-[#FFD700]/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${12 + Math.random() * 16}px`
            }}
          >
            <FiHeart />
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
          className="absolute top-20 right-10 w-28 h-28 border-2 border-[#FFD700]/20 rounded-full"
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
          className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-[#00809D]/10 to-[#006d85]/10 rounded-lg transform rotate-45"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFD700]/20 to-[#D3AF37]/20 backdrop-blur-sm border border-[#FFD700]/30 rounded-full px-6 py-3 text-sm font-medium mb-6"
          >
            <FiHeart className="text-[#FFD700]" />
            <span>What Our Users Say</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-6xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-[#00809D] via-[#006d85] to-[#00809D] bg-clip-text text-transparent">
              What Our Users Say
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of satisfied users who have transformed their communication skills
          </motion.p>
        </motion.div>
        
        {/* Enhanced Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-white via-white to-[#FCF8DD]/20 rounded-3xl p-8 h-full shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 border border-[#00809D]/10 overflow-hidden">
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.color} rounded-full transform translate-x-16 -translate-y-16`}></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#00809D]/20 to-[#006d85]/20 rounded-full transform -translate-x-12 translate-y-12"></div>
                </div>

                {/* Quote icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative mb-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#FFD700] to-[#D3AF37] rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-lg transition-all duration-500">
                    <FiMessageSquare size={28} className="text-[#00809D]" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-[#FFD700] to-[#D3AF37] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                </motion.div>
                
                {/* Stars */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <FiStar className="text-[#FFD700] fill-current" size={20} />
                    </motion.div>
                  ))}
                </div>
                
                {/* Testimonial text */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative mb-8"
                >
                  <FiMessageSquare className="text-[#00809D]/20 absolute -top-2 -left-2" size={40} />
                  <p className="text-gray-700 leading-relaxed text-lg relative z-10 italic">
                    "{testimonial.text}"
                  </p>
                </motion.div>
                
                {/* User info */}
                <div className="flex items-center">
                  <div className="relative mr-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {testimonial.avatar}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#FFD700] rounded-full border-2 border-white flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#00809D]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#00809D] text-lg group-hover:text-[#006d85] transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>

                {/* Floating decorative elements */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#FFD700] to-[#D3AF37] rounded-full opacity-30 blur-sm"
                />
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-[#D3AF37] to-[#FFD700] rounded-full opacity-40 blur-sm"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-white to-[#FCF8DD]/30 rounded-3xl p-8 shadow-2xl border border-[#FFD700]/20">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-[#00809D]"
            >
              Join 10,000+ Happy Users
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-8 text-lg"
            >
              Start your communication journey today
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FFD700] to-[#D3AF37] hover:from-[#D3AF37] hover:to-[#FFD700] text-[#00809D] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19c-.54 0-.99.45-.99.99 0 9.36 7.6 16.96 16.96 16.96.54 0 .99-.45.99-.99v-3.5c0-.54-.45-.99-.99-.99z"/>
              </svg>
              <span>Start Practicing Now</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FiArrowRight size={20} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 
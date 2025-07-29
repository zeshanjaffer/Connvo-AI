'use client';

import { motion } from 'framer-motion';
import { FiClock, FiZap, FiUsers } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-[#FFD700] to-[#D3AF37] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-5 left-5 w-8 h-8 bg-[#00809D] rounded-full"></div>
        <div className="absolute bottom-5 right-5 w-6 h-6 bg-[#00809D] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#00809D] rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border border-[#00809D]/10">
            <div className="flex items-center justify-center mb-4">
              <FiZap className="text-[#00809D] text-3xl mr-3" />
              <span className="bg-[#00809D] text-white px-3 py-1 rounded-full text-sm font-bold">
                LIMITED TIME
              </span>
            </div>
            
                         <h2 className="text-3xl md:text-4xl font-bold text-[#00809D] mb-4">
               <span className="flex items-center justify-center gap-3">
                 <svg className="w-8 h-8 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                 </svg>
                 50% Off Pro Monthly Plan
                 <svg className="w-8 h-8 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                 </svg>
               </span>
             </h2>
            
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who've already transformed their communication skills. 
              <span className="font-bold text-[#00809D]"> Offer ends soon!</span>
            </p>
            
            {/* Countdown Timer */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <FiClock className="text-[#00809D] text-xl" />
              <div className="flex gap-2">
                <div className="bg-[#00809D] text-white px-3 py-2 rounded-lg font-bold min-w-[60px]">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <span className="text-[#00809D] font-bold text-xl">:</span>
                <div className="bg-[#00809D] text-white px-3 py-2 rounded-lg font-bold min-w-[60px]">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <span className="text-[#00809D] font-bold text-xl">:</span>
                <div className="bg-[#00809D] text-white px-3 py-2 rounded-lg font-bold min-w-[60px]">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
              </div>
            </div>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00809D] rounded-full flex items-center justify-center">
                  <FiUsers className="text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-[#00809D]">10,000+ Users</h4>
                  <p className="text-sm text-gray-600">Trusted by professionals</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center">
                  <FiZap className="text-[#00809D]" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-[#00809D]">Instant Access</h4>
                  <p className="text-sm text-gray-600">Start practicing immediately</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D3AF37] rounded-full flex items-center justify-center">
                  <FiClock className="text-[#00809D]" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-[#00809D]">24/7 Available</h4>
                  <p className="text-sm text-gray-600">Practice anytime, anywhere</p>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1234567890"
                className="inline-flex items-center gap-3 bg-[#00809D] hover:bg-[#006d85] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19c-.54 0-.99.45-.99.99 0 9.36 7.6 16.96 16.96 16.96.54 0 .99-.45.99-.99v-3.5c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Call Now - $4.50/mo
              </a>
              <a 
                href="#pricing"
                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border-2 border-[#00809D] text-[#00809D] hover:bg-[#00809D] hover:text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 text-lg"
              >
                View All Plans
              </a>
            </div>
            
            <p className="text-sm text-gray-600 mt-4">
              * Limited time offer. Regular price $9/month. No commitment required.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoBanner; 
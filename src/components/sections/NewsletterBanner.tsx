'use client';

import { motion } from 'framer-motion';
import { FiMail, FiGift } from 'react-icons/fi';
import { useState } from 'react';

const NewsletterBanner = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#00809D] to-[#006d85] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 right-10 w-16 h-16 bg-[#FFD700] rounded-full"></div>
        <div className="absolute bottom-5 left-10 w-12 h-12 bg-[#D3AF37] rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <FiMail className="text-[#FFD700] text-3xl mr-3" />
              <FiGift className="text-[#FFD700] text-2xl" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Free Practice Calls & Tips
            </h2>
            
            <p className="text-lg text-[#FCF8DD] mb-8 max-w-2xl mx-auto">
              Join 5,000+ professionals getting weekly communication tips, practice scenarios, and exclusive offers delivered to your inbox.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-[#FCF8DD]/70 focus:outline-none focus:border-[#FFD700] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#FFD700] hover:bg-[#D3AF37] text-[#00809D] font-bold rounded-lg transition-colors duration-300 transform hover:scale-105"
                >
                  Subscribe Free
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#FFD700] text-[#00809D] px-6 py-3 rounded-lg font-bold"
              >
                ✅ Thanks for subscribing! Check your email for your free practice call.
              </motion.div>
            )}
            
            <p className="text-sm text-[#FCF8DD]/80 mt-4">
              🔒 We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterBanner; 
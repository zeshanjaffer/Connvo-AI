'use client';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-[#00809D]">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your communication skills? Contact us today!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#FCF8DD] rounded-2xl p-8 border border-[#00809D]/10">
              <h3 className="text-2xl font-bold mb-6 text-[#00809D]">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#00809D] mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-[#00809D]/20 focus:border-[#00809D] focus:outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#00809D] mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-[#00809D]/20 focus:border-[#00809D] focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#00809D] mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-[#00809D]/20 focus:border-[#00809D] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#00809D] mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-[#00809D]/20 focus:border-[#00809D] focus:outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#00809D] mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#00809D]/20 focus:border-[#00809D] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your communication training needs..."
                  ></textarea>
                </div>
                <Button
                  href="#"
                  variant="primary"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <FiSend size={20} />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#00809D]">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Ready to start your communication journey? Reach out to us through any of these channels.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00809D] to-[#006d85] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FiPhone size={24} className="text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFD700] rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#00809D] mb-1">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Available 24/7 for practice calls</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00809D] to-[#006d85] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FiMail size={24} className="text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFD700] rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#00809D] mb-1">Email Us</h4>
                  <p className="text-gray-600">hello@connvo.app</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00809D] to-[#006d85] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FiMapPin size={24} className="text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFD700] rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#00809D] mb-1">Visit Us</h4>
                  <p className="text-gray-600">123 AI Street, Tech City</p>
                  <p className="text-sm text-gray-500">San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#FCF8DD] rounded-2xl p-6 border border-[#00809D]/10">
              <h4 className="font-semibold text-[#00809D] mb-2">Enterprise Inquiries</h4>
              <p className="text-gray-600 mb-4">
                Looking for team training solutions? Our enterprise team is ready to help.
              </p>
              <Button
                href="tel:+1234567890"
                variant="secondary"
                size="md"
                className="w-full"
              >
                Schedule Enterprise Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
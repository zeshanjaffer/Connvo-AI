'use client';
import { FAQS } from '@/constants';
import Accordion from '../ui/Accordion';
import { motion } from 'framer-motion';

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-[#FCF8DD] text-[#00809D]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-gradient">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 mb-12">
            Got questions? We&apos;ve got answers! Here are the most common questions about Connvo.
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Accordion title={faq.question}>{faq.answer}</Accordion>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#00809D]/80 mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-[#00809D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#006d85] transition-colors duration-300"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

import { motion } from 'framer-motion';

const Card = ({ children, highlight = false }) => {
  return (
    <motion.div
      className={`rounded-2xl p-6 ${highlight ? 'border-2 border-blue-400 shadow-xl' : 'border border-gray-200'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
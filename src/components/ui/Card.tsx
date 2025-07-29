import { motion } from 'framer-motion';

const Card = ({ children, className = '', animate = true }: { children: React.ReactNode; className?: string; animate?: boolean }) => {
  if (animate) {
    return (
      <motion.div
        whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(0, 60, 255, 0.08)' }}
        className={`rounded-xl shadow-md bg-white p-6 ${className}`}
      >
        {children}
      </motion.div>
    );
  }
  return <div className={`rounded-xl shadow-md bg-white p-6 ${className}`}>{children}</div>;
};

export default Card;

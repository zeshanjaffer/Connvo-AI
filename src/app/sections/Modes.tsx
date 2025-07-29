import { motion } from 'framer-motion';
import Card from '../components/Card';

const modes = [
  {
    title: "Cold Call Practice",
    description: "Perfect your outreach with realistic scenarios",
    icon: "📞",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Interview Prep",
    description: "Get ready for your next job interview",
    icon: "💼",
    color: "from-emerald-500 to-teal-600",
    highlight: true
  },
  {
    title: "Small Talk",
    description: "Practice casual conversations effortlessly",
    icon: "💬",
    color: "from-purple-500 to-violet-600"
  },
];

const Modes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Practice Modes
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modes.map((mode, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card highlight={mode.highlight}>
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${mode.color} flex items-center justify-center text-4xl mb-6 mx-auto text-white`}>
                  {mode.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">{mode.title}</h3>
                <p className="text-gray-600 text-center mb-6">{mode.description}</p>
                <motion.button
                  className={`w-full py-2 rounded-lg bg-gradient-to-r ${mode.color} text-white font-medium`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Try Now
                </motion.button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
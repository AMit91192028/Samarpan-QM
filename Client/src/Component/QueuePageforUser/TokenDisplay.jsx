import { motion } from 'framer-motion';

const TokenDisplay = ({ token }) => {
  return (
    <motion.div 
      className="bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-slate-700 font-semibold text-lg mb-4 tracking-wide">🎫 Your Token</h3>
      <motion.div 
        className="flex items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-xl p-8 shadow-lg hover:scale-105 transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-5xl font-extrabold tracking-widest drop-shadow-lg animate-pulse">{token}</span>
      </motion.div>
      <p className="text-slate-600 text-sm mt-4 text-center italic">Please keep this token number handy</p>
    </motion.div>
  );
};

export default TokenDisplay;
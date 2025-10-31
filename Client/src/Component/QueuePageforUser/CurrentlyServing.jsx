import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CurrentlyServing = ({ currentToken, estimatedWaitTime }) => {
  console.log(currentToken+"   "+estimatedWaitTime)
  const [highlight, setHighlight] = useState(false);
  
  // Add a highlight effect whenever the current token changes
  useEffect(() => {
    setHighlight(true);
    const timer = setTimeout(() => setHighlight(false), 2000);
    return () => clearTimeout(timer);
  }, [currentToken]);
  
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-neutral-700 font-medium text-sm">Currently Serving</h3>
        
        <motion.div 
          className="px-3 py-1 rounded-full text-xs font-medium"
          animate={{
            backgroundColor: highlight ? '#34C759' : '#E5E5E5',
            color: highlight ? 'white' : '#595959'
          }}
          transition={{ duration: 0.5 }}
        >
          ACTIVE
        </motion.div>
      </div>
      
      <div className="flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentToken}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mb-3"
          >
            <span className="text-3xl font-bold text-neutral-800">{currentToken}</span>
          </motion.div>
        </AnimatePresence>
        
        <div className="w-full bg-neutral-100 h-1 rounded-full mb-3">
          <motion.div 
            className="bg-primary-500 h-1 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '65%' }}
            transition={{ duration: 1.5 }}
          />
        </div>
        
        <div className="text-center">
          <p className="text-neutral-500 text-sm">Estimated wait time</p>
          <p className="text-xl font-semibold text-neutral-800">~{estimatedWaitTime} min</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CurrentlyServing;
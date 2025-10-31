import { useState } from 'react';
import { motion } from 'framer-motion';

const CommentSection = ({ onSubmitComment }) => {
  const [comment, setComment] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmitComment(comment);
      setComment('');
    }
  };
  
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-card mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h3 className="text-neutral-700 font-medium text-sm mb-4">Leave a Comment</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            rows="3"
            placeholder="Enter any additional information or comments here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        
        <motion.button
          type="submit"
          className="px-4 py-2 bg-primary-500 text-white rounded-lg font-medium text-sm"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={!comment.trim()}
        >
          Submit Comment
        </motion.button>
      </form>
    </motion.div>
  );
};

export default CommentSection;
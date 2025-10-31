import { motion } from 'framer-motion';
import { format, isValid } from 'date-fns';

const VisitingTime = ({ visitTime }) => {
  const date = new Date(visitTime);
  if (!isValid(date)) {
    return (
      <motion.div 
        className="bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-slate-700 font-semibold text-lg mb-2">📆 Visit Details</h3>
        <p className="text-slate-500 text-sm italic">Visit time not available</p>
      </motion.div>
    );
  }

  const formattedTime = format(date, 'h:mm a');
  const formattedDate = format(date, 'MMM d, yyyy');

  return (
    <motion.div 
      className="bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h3 className="text-slate-700 font-semibold text-lg mb-4">📅 Visit Details</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-slate-500">Time</p>
            <p className="text-lg font-medium text-slate-800">{formattedTime}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-slate-500">Date</p>
            <p className="text-lg font-medium text-slate-800">{formattedDate}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VisitingTime;
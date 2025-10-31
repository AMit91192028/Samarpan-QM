import { motion } from 'framer-motion';

const UserPosition = ({ position, peopleAhead }) => {
  return (
    <motion.div 
      className="bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h3 className="text-slate-700 font-semibold text-lg mb-6 tracking-wide">📍 Your Position</h3>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-2xl">#</div>
          <div>
            <p className="text-slate-700 font-medium">Position in Queue</p>
            <p className="text-3xl font-bold text-indigo-600">{position}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold text-xl">↑</div>
          <div>
            <p className="text-slate-700 font-medium">People Ahead</p>
            <motion.p 
              className="text-3xl font-bold text-orange-500"
              key={peopleAhead}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {peopleAhead}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserPosition;

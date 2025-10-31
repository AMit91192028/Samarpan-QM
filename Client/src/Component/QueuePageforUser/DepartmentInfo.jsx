import { motion } from 'framer-motion';

const DepartmentInfo = ({ department }) => {
  if (!department) {
    return null;
  }

  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h3 className="text-neutral-700 font-medium text-sm mb-4">Department Information</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-semibold text-neutral-800 mb-1">
            {department.name}
          </h4>
          <p className="text-neutral-600 text-sm">
            {department.description}
          </p>
        </div>
        
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-accent-100 flex items-center justify-center">
              <span className="text-accent-500 font-medium">{department.floor}</span>
            </div>
            <span className="text-neutral-600">Floor</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-secondary-100 flex items-center justify-center">
              <span className="text-secondary-500 font-medium">{department.roomNo}</span>
            </div>
            <span className="text-neutral-600">Room</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DepartmentInfo;
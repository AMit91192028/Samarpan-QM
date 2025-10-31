import { motion } from 'framer-motion';

const DoctorInfo = ({ doctor }) => {
  if (!doctor) {
    return null;
  }

  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-primary-700 font-semibold text-lg mb-4">Doctor Information</h3>

      <div className="flex items-start gap-6">
        <div className="h-20 w-20 rounded-full bg-gray-200 overflow-hidden">
          <img
            src={`http://localhost:4001/image/uploads/${doctor.image}`}
            alt={doctor.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">{doctor.name}</h4>
          <p className="text-gray-600 text-sm mb-2">{doctor.specialization}</p>
          <div className="flex items-center gap-4">
            <div className="px-3 py-2 bg-primary-100 rounded-full">
              <span className="text-xs font-medium text-primary-700">{doctor.qualification}</span>
            </div>
            <div className="px-3 py-2 bg-secondary-100 rounded-full">
              <span className="text-xs font-medium text-secondary-700">{doctor.experience} Years Exp.</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorInfo;

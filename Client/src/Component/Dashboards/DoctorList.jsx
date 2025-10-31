import { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorList = ({ hospitalId, handleEdit,refreshDoctors }) => {
  const [doctorsData, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.post(`https://samarpan-qm-backend-1.onrender.com/api/doctors/hospital/${hospitalId}`);
        if (response.data.success) {
          setDoctors(response.data.doctors);
          console.log(response.data.doctors)
        } else {
          alert('Failed to fetch doctors.');
        }
      } catch (error) {
        console.error('Error fetching doctors:', error);
        alert('An error occurred while fetching doctors.');
      }
    };

    if (hospitalId) {
      fetchDoctors();
    }
  }, [refreshDoctors,hospitalId]);

  return (
    <div className="max-w-7xl mx-auto p-6 mt-8">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">🩺 Doctor List</h2>

      {doctorsData.length === 0 ? (
        <p className="text-center text-gray-500">No doctors found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {doctorsData.map((doctor) => {
            const slot = doctor.availableSlots?.[0]; // taking first available slot
            console.log(doctor.image)
            console.log(doctor.degree)
            return (
              <div key={doctor._id} className="bg-white shadow-md rounded-xl overflow-hidden p-4">
                <img
                  src={`https://samarpan-qm-backend-1.onrender.com/image/uploads/${doctor.image}`}
                  alt={doctor.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
               
                <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
                <p className="text-sm text-gray-600 mb-1">🆔 ID: {doctor._id}</p>
                <p className="text-sm text-gray-600 mb-1">🎓 Specialization: {doctor.specialization}</p>
                {slot ? (
                  <>
                    <p className="text-sm text-gray-600 mb-1">📋 Max Bookings: {slot.maxBookings}</p>
                    <p className="text-sm text-gray-600 mb-1">⏰ Start: {slot.startTime} AM</p>
                    <p className="text-sm text-gray-600 mb-1">⏰ End: {slot.endTime} PM</p>
                  </>
                ) : (
                  <p className="text-sm text-red-500 mb-2">No available slot info</p>
                )}

                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleEdit(doctor)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => alert('Delete functionality not implemented yet')}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DoctorList;

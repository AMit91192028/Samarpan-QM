import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const DoctorForm = ({ hospitalId,editingDoctor,onFormSubmit }) => {
  const [drName, setDrName] = useState('');
  const [specialist, setSpecialization] = useState('');
  const [normalFees, setNormalFees] = useState('');
  const [emgFees, setEmgFees] = useState('');
  const [emgSlots, setEmgSlots] = useState('');
  const [drDegree, setDrDegree] = useState('');
  const [drImage, setDrImage] = useState(null);
  const[doctorId,setDoctorID]=useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (editingDoctor) {
      setDrName(editingDoctor.name || '');
      setSpecialization(editingDoctor.specialization || '');
      setNormalFees(editingDoctor.normalFee || '');
      setEmgFees(editingDoctor.emergencyFee || '');
      setEmgSlots(editingDoctor.emergencySlotsPerDay || '');
      setDrDegree(editingDoctor.degree || '');
      setAvailableSlots(editingDoctor.availableSlots || []);
      setIsEditing(true);
    }
    
 else {
  setIsEditing(false);
}
 }, [editingDoctor]);

  const addSlot = () => {
    setAvailableSlots([...availableSlots, { day: '', startTime: '', endTime: '', maxBookings: '' }]);
  };

  const removeSlot = (index) => {
    const updatedSlots = [...availableSlots];
    updatedSlots.splice(index, 1);
    setAvailableSlots(updatedSlots);
  };

  const handleSlotChange = (index, field, value) => {
    const updatedSlots = [...availableSlots];
    updatedSlots[index][field] = value;
    setAvailableSlots(updatedSlots);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('name', drName);
      formData.append('specialization', specialist);
      formData.append('normalFee', normalFees);
      formData.append('emergencyFee', emgFees);
      formData.append('emergencySlotsPerDay', emgSlots);
      formData.append('degree', drDegree);
      formData.append('availableSlots', JSON.stringify(availableSlots));
      formData.append('hospitalId', hospitalId);
      if (drImage) {
        formData.append('image', drImage);
      }

      let url = '';
      if (editingDoctor) {
        formData.append('doctorId', editingDoctor._id);
        url = `https://samarpan-qm-backend-1.onrender.com/api/doctors/hospital/${hospitalId}`;
      } else {
        url = `https://samarpan-qm-backend-1.onrender.com/api/doctors/add`;
      }

      const response = await axios.post(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.success) {
        alert(`Doctor ${editingDoctor ? 'updated' : 'added'} successfully!`);
        if (onFormSubmit) {
            onFormSubmit(); // ✅ only called if it's passed
          }
        navigate('/admin');
      } else {
        alert(response.data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Doctor form submission error:', error);
      alert('Error submitting doctor form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">
        {editingDoctor ? 'Edit Doctor Details' : 'Add New Doctor'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Doctor Name"
          value={drName}
          onChange={(e) => setDrName(e.target.value)}
          className="w-full border px-4 py-2 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Specialization"
          value={specialist}
          onChange={(e) => setSpecialization(e.target.value)}
          className="w-full border px-4 py-2 rounded-md"
          required
        />
        <input
          type="number"
          placeholder="Normal Fees"
          value={normalFees}
          onChange={(e) => setNormalFees(e.target.value)}
          className="w-full border px-4 py-2 rounded-md"
          required
        />
        <input
          type="number"
          placeholder="Emergency Fees"
          value={emgFees}
          onChange={(e) => setEmgFees(e.target.value)}
          className="w-full border px-4 py-2 rounded-md"
          required
        />
        <input
          type="number"
          placeholder="Emergency Slots Per Day"
          value={emgSlots}
          onChange={(e) => setEmgSlots(e.target.value)}
          className="w-full border px-4 py-2 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Doctor Degree (e.g., MBBS, MD)"
          value={drDegree}
          onChange={(e) => setDrDegree(e.target.value)}
          className="w-full border px-4 py-2 rounded-md"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setDrImage(e.target.files[0])}
          className="w-full"
        />

        <div className="mt-6">
          <h3 className="font-semibold text-lg mb-2">Available Slots:</h3>
          {availableSlots.map((slot, index) => (
            <div key={index} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
              <input
                type="text"
                placeholder="Day"
                value={slot.day}
                onChange={(e) => handleSlotChange(index, 'day', e.target.value)}
                className="border px-2 py-1 rounded-md"
                required
              />
              <input
                type="time"
                value={slot.startTime}
                onChange={(e) => handleSlotChange(index, 'startTime', e.target.value)}
                className="border px-2 py-1 rounded-md"
                required
              />
              <input
                type="time"
                value={slot.endTime}
                onChange={(e) => handleSlotChange(index, 'endTime', e.target.value)}
                className="border px-2 py-1 rounded-md"
                required
              />
              <input
                type="number"
                placeholder="Max Bookings"
                value={slot.maxBookings}
                onChange={(e) => handleSlotChange(index, 'maxBookings', e.target.value)}
                className="border px-2 py-1 rounded-md"
                required
              />
              <button
                type="button"
                onClick={() => removeSlot(index)}
                className="text-red-600 hover:underline mt-1"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addSlot}
            className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
          >
            ➕ Add Slot
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? editingDoctor
              ? 'Updating...'
              : 'Adding...'
            : editingDoctor
            ? 'Update Doctor'
            : 'Add Doctor'}
        </button>
      </form>
    </div>
  );
};

export default DoctorForm;

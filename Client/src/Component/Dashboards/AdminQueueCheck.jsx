import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminQueueCheck = ({adminId}) => {
  const [queues, setQueues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [toast, setToast] = useState(null);
  
  const statusOptions = [
    'Booked',
    'Confirmed',
    'Served',
    'Cancelled',
    'Pending',
    'Skipped',
  ];

  useEffect(() => {
    const fetchQueues = async () => {
      try {
        const response = await axios.get(`https://samarpan-qm-backend-1.onrender.com/api/admin/queues`, {
          params: { adminId: adminId }, // Send adminId as a query parameter
          withCredentials: true
        });
        setQueues(response.data.queues);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to fetch queues.');
        setLoading(false);
      }
    };
    fetchQueues();
  }, [adminId]);

  const handleStatusChange = async (queueId, newStatus) => {
    setLoading(true); // Start loading
    try {
      await axios.patch(`https://samarpan-qm-backend-1.onrender.com/api/admin/queue/${queueId}/status`,
        { status: newStatus },
        { withCredentials: true }
      );
      setQueues(prev => prev.map(queue =>
        queue.id === queueId ? { ...queue, status: newStatus } : queue
      ));
      setToast({ type: 'success', message: 'Status updated successfully.' });
    } catch (err) {
      setToast({ type: 'error', message: err.message || 'Failed to update status.' });
    } finally {
      setLoading(false); // End loading
    }
  };

  const groupedBySpecialization = queues.reduce((acc, queue) => {
    const spec = queue.specialization || 'General';
    if (!acc[spec]) acc[spec] = {};
    if (!acc[spec][queue.doctor]) acc[spec][queue.doctor] = [];
    acc[spec][queue.doctor].push(queue);
    return acc;
  }, {});

  const getStatusColor = (status) => {
    const colors = {
      Booked: 'bg-blue-500',
      Confirmed: 'bg-green-500',
      Served: 'bg-emerald-600',
      Cancelled: 'bg-red-500',
      Pending: 'bg-yellow-500',
      Skipped: 'bg-gray-500'
    };
    return colors[status] || 'bg-gray-300';
  };

  if (loading) return <div className="flex items-center justify-center h-64 text-lg">Loading queues...</div>;
  if (error) return <div className="bg-red-100 text-red-700 p-4 rounded-md">{error}</div>;

  return (
    <div className="p-6">
      {toast && (
        <div className={`mb-4 p-3 rounded text-sm ${toast.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {toast.message}
        </div>
      )}

      <h2 className="text-3xl font-bold text-gray-800 mb-6">Appointments by Specialization</h2>
      <div className="overflow-x-auto space-y-6">
        {Object.entries(groupedBySpecialization).map(([spec, doctors]) => (
          <div key={spec} className="border rounded p-4 shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Specialization: {spec}</h3>
            <table className="min-w-full text-sm border-separate border-spacing-y-2">
              <thead className="bg-gray-100">
                <tr className="text-left">
                  <th className="p-3">Doctor Name</th>
                  <th className="p-3">Appointments Count</th>
                  <th className="p-3">Info</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(doctors).map(([doctor, doctorQueues]) => (
                  <tr key={doctor} className="bg-white shadow-sm">
                    <td className="p-3 font-medium">{doctor}</td>
                    <td className="p-3">{doctorQueues.length}</td>
                    <td className="p-3">
                      <button
                        className={`px-4 py-1 rounded text-white transition transform ${selectedDoctor === doctor ? 'bg-red-500 scale-95' : 'bg-blue-500 scale-100'}`}
                        onClick={() => setSelectedDoctor(selectedDoctor === doctor ? null : doctor)}>
                        {selectedDoctor === doctor ? 'Hide' : 'Show'} Info
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      {selectedDoctor && (
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Patients of Dr. {selectedDoctor}</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border-separate border-spacing-y-2">
              <thead className="bg-gray-100">
                <tr className="text-left">
                  <th className="p-3">Token Number</th>
                  <th className="p-3">Patient Name</th>
                  <th className="p-3">Estimated Time</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Change Status</th>
                </tr>
              </thead>
              <tbody>
                {queues.filter(q => q.doctor === selectedDoctor).map(queue => (
                  <tr key={queue._id} className="bg-white shadow-sm">
                    <td className="p-3">{queue.tokenNumber}</td>
                    <td className="p-3">{queue.patientName}</td>
                    <td className="p-3">{queue.estimatedStartTime ? new Date(queue.estimatedStartTime).toLocaleTimeString() : 'N/A'}</td>
                    <td className="p-3">
                      <span className={`text-white px-3 py-1 rounded-full text-xs ${getStatusColor(queue.status)}`}>{queue.status}</span>
                    </td>
                    <td className="p-3">
                      <select
                        value={queue.status}
                        onChange={(e) => handleStatusChange(queue.id, e.target.value)}
                        className="p-2 rounded border border-gray-300 text-sm bg-gray-50">
                        {statusOptions.map(status => (
                          <option key={status} value={status}>{status}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminQueueCheck;

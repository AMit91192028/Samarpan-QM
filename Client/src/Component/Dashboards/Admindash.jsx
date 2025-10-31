import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import DoctorForm from "./DoctorForum";
import DoctorList from "./DoctorList";
import QueueListAdmin from "./AdminQueueCheck";
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
axios.defaults.withCredentials = true;

export default function AdminDash() {
  const [manageDoctor, setManageDoctor] = useState(false);
  const [totalDoctor, setTotalDoctor] = useState(0);
  const [doctorList, setDoctorList] = useState([]);
  const [openDoctorList, setOpenDoctorList] = useState(false);
  const [hospitalId, setHospitalId] = useState(null);
  const [doctorDataForEdit, setDoctorDataForEdit] = useState(null);
  const [editDoctorData, setEditDoctorData] = useState(null);
  const [refreshDoctors, setRefreshDoctors] = useState(false);
  const [showAppointments, setShowAppointments] = useState(false);
  const [totalAppointments, setTotalAppointments] = useState(0); // New state for total appointments
  const [adminId,setadminId]=useState("")
  const[name,setName]=useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const token=Cookies.get('token');
    if(token){
      const decoded=jwtDecode(token);
      // console.log(decoded);
      if(decoded && decoded.adminId && decoded.Name){
        console.log(decoded.adminId)
        setadminId(decoded.adminId);
        setName(decoded.Name)
      }
    }
   else{
    alert("adminId not get");
   }
  },[])
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.post(
          'https://samarpan-qm-backend-1.onrender.com/api/admin/getAdminData',
          {},
          { withCredentials: true }
        );
        if (response.data.success) {
          setHospitalId(response.data.admin.hospitalId);
        } else {
          alert('Failed to fetch admin data');
        }
      } catch (error) {
        console.error('Admin data error:', error);
        alert('Error fetching admin data');
      }
    };

    fetchAdminData();
  }, []);

  useEffect(() => {
    const fetchDoctors = async () => {
      if (!hospitalId) return;
      try {
        const res = await axios.post(`https://samarpan-qm-backend-1.onrender.com/api/doctors/hospital/${hospitalId}`, { withCredentials: true });
        setDoctorList(res.data.doctors || []);
        setTotalDoctor(res.data.doctors.length);
      } catch (err) {
        console.error("Doctor list fetch error:", err);
      }
    };

    const fetchAppointments = async () => {
      if (!hospitalId) return;
      try {
        const res = await axios.get(`https://samarpan-qm-backend-1.onrender.com/api/admin/queues`, {
          params: { adminId: adminId }, // Send adminId as a query parameter
          withCredentials: true
        });
        setTotalAppointments(res.data.queues.length || 0);
      } catch (err) {
        console.error("Appointments fetch error:", err);
      }
    };
    

    fetchDoctors();
    fetchAppointments();
  }, [hospitalId, refreshDoctors]);

  const handleEdit = (doctorData) => {
    setDoctorDataForEdit(doctorData);
    setManageDoctor(true);
  };

  const handleFormSubmit = () => {
    setEditDoctorData(null);
    setRefreshDoctors(prev => !prev);
  };

  const handleDeleteDoctor = async (doctorId) => {
    try {
      await axios.delete(`https://samarpan-qm-backend-1.onrender.com/api/doctors/${doctorId}`, { withCredentials: true });
      const updatedList = doctorList.filter(doc => doc._id !== doctorId);
      setDoctorList(updatedList);
      setTotalDoctor(updatedList.length);
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete doctor.");
    }
  };

  const handleMenuClick = (item) => {
    if (item === "Manage Doctors") {
      setManageDoctor(true);
      setShowAppointments(false);
      setOpenDoctorList(false);
    } else if (item === "Dashboard") {
      setManageDoctor(false);
      setShowAppointments(false);
      setOpenDoctorList(false);
    } else if (item === "Appointments") {
      setShowAppointments(true);
      setManageDoctor(false);
      setOpenDoctorList(false);
    } else {
      setManageDoctor(false);
      setShowAppointments(false);
    }
  };

  const AdminLogout = async () => {
    try {
      await axios.post('https://samarpan-qm-backend-1.onrender.com/api/admin/logout', {}, { withCredentials: true });
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-200 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white/90 backdrop-blur-md border-r border-indigo-200 shadow-xl p-6 flex flex-col justify-between rounded-tr-3xl rounded-br-3xl">
        <div>
          <h1 className="text-3xl font-extrabold text-indigo-800 text-center mb-10 tracking-wide">Admin🛡️</h1>
          <nav className="space-y-4">
            {["Dashboard", "Manage Doctors", "Appointments", "Patients", "Settings"].map((item, i) => (
              <button
                key={i}
                onClick={() => handleMenuClick(item)}
                className={`block w-full text-left text-gray-700 font-medium hover:bg-indigo-100 px-5 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md ${
                  manageDoctor && item === "Manage Doctors" ? "bg-indigo-100 shadow-md" : ""
                } ${showAppointments && item === "Appointments" ? "bg-green-100 shadow-md" : ""}`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
        <button
          className="mt-10 w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg pr-[10px] text-center"
          onClick={AdminLogout}
        >
          🚪 Logout
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center bg-white px-10 py-6 shadow-md border-b border-indigo-100 rounded-bl-3xl">
          <h2 className="text-2xl font-bold text-indigo-800">📊 Dashboard Overview</h2>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 italic">Welcome, {name}</span>
            <img
              src="https://i.pravatar.cc/100"
              alt="Admin"
              className="w-12 h-12 rounded-full border-4 border-indigo-300 shadow cursor-pointer"
            />
          </div>
        </header>

        {/* Main Section */}
        <main className="p-8 overflow-y-auto">
          {showAppointments ? (
            <QueueListAdmin adminId={adminId} />
          ) : manageDoctor ? (
            <DoctorForm hospitalId={hospitalId} editingDoctor={doctorDataForEdit} onFormSubmit={handleFormSubmit} />
          ) : openDoctorList ? (
            <DoctorList
              doctors={doctorList}
              onDelete={handleDeleteDoctor}
              hospitalId={hospitalId}
              handleEdit={handleEdit}
              refreshDoctors={refreshDoctors}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* Total Doctors */}
              <div
                className="bg-gradient-to-br from-indigo-400 to-indigo-600 text-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
                onClick={() => setOpenDoctorList(true)}
              >
                <h3 className="text-lg font-semibold mb-2">Total Doctors</h3>
                <p className="text-5xl font-bold">{totalDoctor}</p>
              </div>

              {/* Appointments - Clickable */}
              <div
                className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
                onClick={() => handleMenuClick("Appointments")}
              >
                <h3 className="text-lg font-semibold mb-2">Appointments</h3>
                <p className="text-5xl font-bold">{totalAppointments}</p> {/* Display total appointments here */}
              </div>

              {/* Active Patients - Clickable */}
              <div
                className="bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-semibold mb-2">Active Patients</h3>
                <p className="text-5xl font-bold">0</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
export default function UserDashboard() {
  const [showSidebar, setShowSidebar] = useState(false);

  const navigate = useNavigate()

  const bookDoctor = (item) => {
    if(item === "Book Appointment"){
        navigate('/bookDr')
    }
    if(item==="My Appointments"){
      navigate('/queuestatus')
    }
  }
  const UserLogout = async () => {
    try {
      await axios.post('https://samarpan-qm-backend-1.onrender.com/api/user/logout', {}, { withCredentials: true });
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-emerald-100 to-cyan-200 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-6 py-4 bg-white shadow-md z-30">
        <h2 className="text-xl font-bold text-teal-800">User Dashboard</h2>
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-teal-700 text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          showSidebar ? "block" : "hidden"
        } md:block bg-white/90 backdrop-blur-md border-r border-teal-200 shadow-xl p-6 flex flex-col justify-between rounded-tr-3xl rounded-br-3xl 
        md:w-72 md:sticky md:top-0 h-screen transition-all duration-300 z-20`}
      >
        <div>
          <h1 className="text-3xl font-extrabold text-teal-800 text-center mb-10 tracking-wide">
            User👤
          </h1>
          <nav className="space-y-4">
            {["Dashboard", "Book Appointment", "My Appointments", "Profile", "Settings"].map((item, index) => (
              <button
                key={index}
                className="block w-full text-left text-gray-700 font-medium hover:bg-teal-100 px-5 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                onClick={() => bookDoctor(item)}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
        <button className="mt-10 w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg" onClick={(UserLogout)}>
          🚪 Logout
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center bg-white px-6 md:px-10 py-5 shadow-md border-b border-teal-100 rounded-bl-3xl">
          <h2 className="text-xl sm:text-2xl font-bold text-teal-800">📅 Welcome to Your Dashboard</h2>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 italic text-sm sm:text-base">Hello, User</span>
            <img
              src="https://i.pravatar.cc/100?u=user"
              alt="User"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-teal-300 shadow cursor-pointer"
            />
          </div>
        </header>

        {/* Main Section */}
        <main className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {[{ label: "Upcoming Appointments", value: 2, color: "from-cyan-400 to-cyan-600" },
              { label: "Visited Doctors", value: 5, color: "from-emerald-400 to-emerald-600" },
              { label: "Health Score", value: "82%", color: "from-teal-400 to-teal-600" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${item.color} text-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition duration-300`}
              >
                <h4 className="text-lg font-semibold">{item.label}</h4>
                <p className="text-3xl font-bold mt-2">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Extra Info Cards */}
          
        </main>
      </div>
    </div>
  );
}

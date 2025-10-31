import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProcessingCard from './Processing';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const[isProcessing,setisProcessing]=useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   setisProcessing(true)
    if (!email || !password || !role) {
      setError("Please fill all the fields.");
      setSuccess('');
      return;
    }
    document.cookie = "token=; Max-Age=0; path=/;"; 
    try {
      const response = await axios.post(`https://samarpan-qm-backend-1.onrender.com/api/${role}/login`, {
        email,
        password},
        {
  withCredentials: true

      });

      // Set success message after login
      setSuccess(response.data.message);
      setError('');
      setIsLoggedIn(true); // Mark as logged in

      // Clear the inputs after login success
      setEmail('');
      setPassword('');
      setRole('');
       setTimeout(()=>{
          setisProcessing(false)
       },3000)
       navigate('/verify-otp', { state: { email, role } }); 
    } catch (err) {
      const msg = err.response?.data?.message || 'Login failed!';
      setError(msg);
      setSuccess('');
      setIsLoggedIn(false); // Mark as not logged in if there's an error
    }
  };

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    setError('');
    setSuccess('');
    setEmail('');
    setPassword('');

  };
  if(isProcessing){
    return<ProcessingCard/>
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg relative">
        <h2 className="text-3xl font-bold text-center text-blue-400">Login</h2>
        <p className="text-center text-gray-400 mb-6 mt-[20px] font-semibold">Select your role and login to continue</p>

        <div className="mb-4 flex justify-center space-x-6">
          {["user", "admin"].map((r) => (
            <label key={r} className="flex items-center space-x-2 cursor-pointer font-semibold">
              <input
                type="radio"
                name="role"
                className="hidden peer"
                checked={role === r}
                onChange={() => handleRoleChange(r)}
              />
              <div className={`w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-${r === "user" ? "blue" : "red"}-400 peer-checked:bg-${r === "user" ? "blue" : "red"}-400`}>
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-300 capitalize">{r}</span>
            </label>
          ))}
        </div>

        {error && <p className="text-red-400 text-center mb-2">{error}</p>}
        {success && <p className="text-green-400 text-center mb-2">{success}</p>}

        {!isLoggedIn && (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Login
            </button>
          </form>
        )}

        {isLoggedIn && (
          <div className="text-center text-lg text-green-400 mt-4">
            Login successful! Redirecting to OTP page...
          </div>
        )}
      </div>
    </div>
  );
}

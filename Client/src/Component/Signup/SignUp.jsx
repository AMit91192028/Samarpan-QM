import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toastify

export default function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhNumber] = useState("");
  const [isUser, setIsUser] = useState("");
  const [hospitalId, setHospitalId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  // Reset form fields after successful registration
  const resetFields = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPhNumber("");
    setHospitalId("");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name || !email || !password || !confirmPassword || !isUser) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (isUser === "user" && (!phone || phone.length !== 10)) {
      toast.error("Phone number must be exactly 10 digits.");
      return;
    }

    if (isUser === "admin" && !hospitalId) {
      toast.error("Please enter a valid hospital ID.");
      return;
    }

    // Prepare data for API request
    const dataToSend =
      isUser === "admin"
        ? { name, hospitalId, phone, email, password }
        : { name, phone, email, password };

    try {
      setIsSubmitting(true);
      const response = await axios.post(`https://samarpan-qm-backend-1.onrender.com/api/${isUser}/register`, dataToSend);
      if (response.status === 200) {
        toast.success(`${isUser.charAt(0).toUpperCase() + isUser.slice(1)} successfully registered!`);
        resetFields();
        setTimeout(() => {
          navigate("/login");
        }, 2500);
      }
    } catch (err) {
      toast.error("Error during registration: " + (err.response?.data?.message || err.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle role change
  const handleRoleChange = (role) => {
    if (role !== isUser) {
      setIsUser(role);
      resetFields();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-400">Sign Up</h2>
        <p className="text-gray-400 text-center mb-6">Choose your role and create an account</p>

        <div className="mb-4 flex justify-center space-x-6">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              className="hidden peer"
              checked={isUser === "user"}
              onChange={() => handleRoleChange("user")}
            />
            <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-blue-400 peer-checked:bg-blue-400">
              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-300">User</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              className="hidden peer"
              checked={isUser === "admin"}
              onChange={() => handleRoleChange("admin")}
            />
            <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-red-400 peer-checked:bg-red-400">
              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-300">Admin</span>
          </label>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-400"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>

          {isUser === "admin" && (
            <input
              type="text"
              placeholder="Hospital ID"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg"
              value={hospitalId}
              onChange={(e) => setHospitalId(e.target.value)}
            />
          )}

          <input
            type="number"
            placeholder="Phone Number"
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg"
            value={phone}
            onChange={(e) => setPhNumber(e.target.value)}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${isSubmitting ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"} text-white font-semibold py-3 rounded-lg`}
          >
            {isSubmitting ? "Processing..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-400 hover:underline">
            Login
          </NavLink>
        </p>
      </div>

      {/* Toast container (this will display your toasts) */}
      <ToastContainer />
    </div>
  );
}

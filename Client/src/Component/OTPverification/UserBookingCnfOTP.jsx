import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const UserBookingCnfOTP = () => {
  const location = useLocation();
  const navigate=useNavigate();
  const { patientName,
    age,
    diseaseDescription,
    fee,
    emergency,
    bookingType,
    doctorId,
    hospitalId,
    phoneNumber,
    email,actualOtp} = location.state || {};

  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef([]);

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer((prev) => prev - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  // Focus next input after entry
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle paste full OTP
  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").trim().slice(0, 6);
    if (/^\d{6}$/.test(pasted)) {
      const newOtp = pasted.split("");
      setOtp(newOtp);
      newOtp.forEach((digit, i) => {
        inputRefs.current[i].value = digit;
      });
      inputRefs.current[5].focus();
    }
  };

  // Verify OTP
  const handleVerify = async () => {
    const fullOtp = otp.join("");
    if (fullOtp.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      const response = await axios.post(
        `https://samarpan-qm-backend-1.onrender.com/api/queue/verifyOtp`,
        {   patientName,
            age,
            diseaseDescription,
            fee,
            emergency,
            bookingType,
            doctorId,
            hospitalId,
            phoneNumber,
            email,
         otp: fullOtp,
        actualOtp },  
      );
 
      alert(response.data.message);
      const queueId=response.data.queueId
      console.log(queueId)
      navigate("/queuestatus",{ state:{queueId}});
      console.log(response.data)
    } catch (err) {
      alert(err.message+ "Something went wrong");
      console.log(err)
    }
  };

//   // Resend OTP handler
//   const handleResend = async () => {
//     try {
//       const response = await axios.post(
//         `https://samarpan-qm-backend-1.onrender.com/api/${role}/resend-otp`,
//         { email, role },
//         { withCredentials: true }
//       );
//       alert(response.data.message);
//       setTimer(60); // Restart timer
//     } catch (err) {
//       alert(err.response?.data?.message || "Could not resend OTP.");
//     }
//   };

  // Prevent access to OTP page if already authenticated
//   useEffect(() => {
//     const isLoggedIn = document.cookie
//       .split(";")
//       .some((cookie) => cookie.trim().startsWith("token="));
//     if (isLoggedIn) {
//       if (role === "admin") {
//         navigate("/admin");
//       } else {
//         navigate("/user");
//       }
//     }
//   }, [role, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-gray-800">
          OTP Verification
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Enter the 6-digit OTP sent to{" "}
          <span className="font-medium">{email}</span>
        </p>

        <div className="flex justify-between gap-2 mb-4" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-10 sm:w-12 h-12 sm:h-14 text-center text-xl border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          className="mt-2 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Verify OTP
        </button>

        <p className="mt-4 text-center text-sm text-gray-500">
        <span className="font-medium">{timer}s</span>
        </p>
      </div>
    </div>
  );
};

export default UserBookingCnfOTP;

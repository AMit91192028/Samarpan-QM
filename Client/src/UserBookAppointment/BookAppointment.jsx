import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
// const navigate=useNavigate()
// const hospitalData = [
//   {
//     name: "CityCare Hospital",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjMtZ6oAZw7xJPGpom0vGxsashSPl1y0kKKg&s",
//     doctors: [
//       {
//         name: "Dr. Aman Verma",
//         specialization: "Cardiologist",
//         normalFee: 500,
//         emergencyFee: 1000,
//         drImage: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg="
//       },
//       {
//         name: "Dr. Neha Sharma",
//         specialization: "Dermatologist",
//         normalFee: 400,
//         emergencyFee: 800,
//         drImage: "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
//       },
//     ],
//   },
//   {
//     name: "GreenLife Medical Center",
//     image: "https://t3.ftcdn.net/jpg/02/11/15/66/360_F_211156620_CeBr5etdTNXLb231sFcQ8M9YD1OY5IW8.jpg",
//     doctors: [
//       {
//         name: "Dr. Rajiv Mehta",
//         specialization: "Orthopedic",
//         normalFee: 600,
//         emergencyFee: 1100,
//         drImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-n-Eb5PPHCiRyGR1vpCKxiucX1RsoZ0gEA&s"
//       },
//       {
//         name: "Dr. Priya Desai",
//         specialization: "Gynecologist",
//         normalFee: 550,
//         emergencyFee: 950,
//         drImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBrm9BCbA8_Tu5f1HouMh-_fFd7UmenrFew&s"
//       },
//     ],
//   },
// ];

export default function BookAppointment() {
  const [selectedHospital, setSelectedHospital] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedDoctor,setSelectedDoctor] = useState("")
  const [feesType,setFeesType] = useState("")
  const [Fees,setFees] = useState("")
  const [normal,setNormal] = useState(null)
  const [emergency,setEmergency] = useState(null)
  const [patientName,setPatientName] = useState("")
  const [patientAge,setPatientAge] = useState("")
  const [appointmentDate,setAppointmentDate] = useState("")
  const [diseaseDes,setDiseaseDes] = useState("")
  const [hospitalData, setHospitals] = useState([]);
  const [hospitalId,setHospitalsId]=useState("");
  const [doctorId,selectedDoctorId]=useState("");
  const[phoneNumber,setPhoneNumber]=useState("")
  const[email,setEmail]=useState("");
const navigate=useNavigate();

useEffect(()=>{
  const token=Cookies.get('token');
  if(token){
    const decoded=jwtDecode(token);
    console.log(decoded);
    if(decoded && decoded.email){
      setEmail(decoded.email);
    }
  }
 else{
  alert("email not get");
 }
},[])


  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const res = await axios.get('https://samarpan-qm-backend-1.onrender.com/api/hospitals/hospitalData');
        setHospitals(res.data);
      } catch (error) {
        console.error('Failed to fetch hospitals', error);
      }
    };

    fetchHospitals();
  }, []);


  const filteredHospitals = hospitalData.filter((hospital) =>
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBookClick = (DrName,drNormal,drEmergency) => {
    setShowForm(true);
    setSelectedDoctor(DrName)
    setNormal(drNormal)
    setEmergency(drEmergency)
   
   
  };
  useEffect(() =>{

    if(feesType === "normal"){
      setFees(normal)

    }
    else{
      setFees(emergency)
    }
  },[feesType])
  console.log(selectedDoctor)
  // console.log(Fees)
  // console.log(feesType)
  // console.log(doctorId)
  // console.log(hospitalId)

  const handlePatientDetails = async (event) => {
    event.preventDefault();
  if(phoneNumber.length<=9){
     alert("phoneNumber should of 10 digit")
     return;
  }
    const patientForm = {
      patientName,
      age:patientAge,
      diseaseDescription: diseaseDes,
      fee: Fees,
      emergency:feesType=='emergency'?true:false,
      bookingType:feesType,
      doctorId:doctorId,
      hospitalId:hospitalId,
      phoneNumber:phoneNumber,
      email:email

    };

    try {
     const res= await axios.post(`https://samarpan-qm-backend-1.onrender.com/api/queue/bookQueue`, patientForm);
     console.log(res.data)
    const actualOtp=res.data.actualOtp;
    const dataTopass={...patientForm,actualOtp}
      resetForm();
      navigate("/Booking-Verfy",{ state: dataTopass });
    } catch (err) {
      console.log("OTP is Invalid " + err.message);
    }
  };

  const resetForm = () => {
    setPatientAge("");
    setDiseaseDes("");
    setAppointmentDate("");
    setPatientName("");
  };

  console.log(selectedHospital+"AMIT WE ARE HERE")
  console.log(hospitalId+"HospitalID HAI YE")
  console.log(doctorId+"Doctor ID HAI Ye")
  
  return (
    <div className="p-6 bg-gradient-to-br from-white via-emerald-50 to-cyan-100 min-h-screen flex justify-center items-start">
      <div className="w-full max-w-3xl">
        

        {/* Show Form */}
        {showForm ? (
          <div className="min-h-screen  flex items-center justify-center p-4">
          <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
            <h2 className="text-2xl font-bold text-center text-teal-800 mb-6">
              Book Appointment
            </h2>
            {/* Submit patient Details */}
            <form className="space-y-3 max-w-lg mx-auto">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Patient Name</label>
                <input
                  type="text"
                  placeholder="Enter patient name"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  onChange={(e) => setPatientName(e.target.value)}
                  value={patientName}
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  placeholder="Enter age"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  onChange={(e) => setPatientAge(e.target.value)}
                  value={patientAge}
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="number"
                  placeholder="Enter PhoneNumber"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Description of Disease</label>
                <textarea
                  placeholder="Describe the symptoms or condition"
                  className="w-full border border-gray-300 rounded-md p-2 h-20 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-600"
                  onChange={(e) => setDiseaseDes(e.target.value)}
                  value={diseaseDes}
                ></textarea>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Doctor Name</label>
                <input
                  value={selectedDoctor}
                  type="text"
                  placeholder={selectedDoctor}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  readOnly
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Appointment Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  value={appointmentDate}
                />
              </div>

              <div className="flex flex-wrap gap-3 justify-center mt-4">
                <button
                  type="button"
                  className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 w-full sm:w-auto"
                  onClick={handlePatientDetails}
                >
                  Confirm Booking
                </button>

                {/* Compact Fees Type Section */}
                <div className="bg-gray-50 px-4 py-3 rounded-md border border-gray-300 w-full sm:w-auto">
                  <h1 className="text-sm font-semibold text-gray-800 mb-2">Fees Type</h1>

                  <div className="flex items-center gap-2 mb-1">
                    <input
                    value={Fees}
                      type="radio"
                      id="normal"
                      name="fees"
                      className="accent-blue-600 w-4 h-4"
                    />
                    <label htmlFor="normal" className="text-sm text-gray-700 cursor-pointer"
                    onClick={() => {
                      setFeesType("normal")
                    }}
                    >Normal</label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      value={Fees}
                      type="radio"
                      id="emergency"
                      name="fees"
                      className="accent-red-600 w-4 h-4"
                    />
                    <label htmlFor="emergency" className="text-sm text-gray-700 cursor-pointer"
                    onClick={() => {
                      setFeesType("emergency")
                    }}
                    >Emergency</label>
                  </div>
                </div>
              </div>
            </form>


          </div>
        </div>
        ) : (
          <>
            {/* Search Input */}
            {!selectedHospital && (
              <input
                type="text"
                placeholder="Search hospital..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-6 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
              />
            )}

            {/* Hospital List */}
            {!selectedHospital && (
              <ul className="mb-10 space-y-5">
                {filteredHospitals.length === 0 ? (
                  <li className="text-center text-gray-500">No hospital found.</li>
                ) : (
                  filteredHospitals.map((hospital, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedHospital(hospital)
                        setHospitalsId(hospital._id)
                      }}
                      className="cursor-pointer bg-white border border-gray-300 rounded-lg hover:bg-teal-50 transition overflow-hidden shadow-sm"
                    >
                      <img
                        src={`https://samarpan-qm-backend-1.onrender.com/image/uploads/${hospital.image}`}
                        alt={hospital.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4 text-center">
                        <span className="text-lg text-teal-700 font-medium">
                          {hospital.name}
                        </span>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            )}

            {/* Doctor List */}
            {selectedHospital && (
              <div>
                <h2 className="text-xl font-bold text-teal-800 mb-4 text-center bg-[#fff] border-[2px] h-[50px] pt-[7px] rounded-md">
                  👨‍⚕️ Doctors at {selectedHospital.name}
                </h2>

                <div className="grid gap-4">
                  {selectedHospital.doctors.map((doc, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-between gap-4"
                    >
                      {/* Doctor Details */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{doc.name}</h3>
                        <p className="text-sm text-gray-600">Specialization: {doc.specialization}</p>
                        <p className="text-sm text-gray-600">Normal Fee: ₹{doc.normalFee}</p>
                        <p className="text-sm text-gray-600">Emergency Fee: ₹{doc.emergencyFee}</p>
                        <button
                          className="mt-3 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
                          onClick={() =>{ handleBookClick(doc.name,doc.normalFee,doc.emergencyFee) 
                            selectedDoctorId(doc.doctorId)}}
                        >
                          Book Appointment
                        </button>
                      </div>

                      {/* Doctor Image */}
                      <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                        <img
                          src={`https://samarpan-qm-backend-1.onrender.com/image/uploads/${doc.drImage}`}
                          alt="Doctor"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Back Button */}
                <div className="mt-6 text-center">
                  <button
                    onClick={() => {
                      setSelectedHospital(null);
                      setSearchTerm("");
                    }}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
                  >
                    🔙 Back to Hospital List
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

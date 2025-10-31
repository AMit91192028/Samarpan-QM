import  { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const HospitalDashboard = () => {
  const [tab, setTab] = useState("view");
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    images: [],
  });
  const [search, setSearch] = useState("");
  const [editHospital, setEditHospital] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const hospitalsPerPage = 6;
  
  const [doctorData, setDoctorData] = useState({hospitalId:"",doctorId:""});
  const [showDoctorFormFor, setShowDoctorFormFor] = useState(null);

  useEffect(() => {
    fetchHospitals();
  }, []);

  const fetchHospitals = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://samarpan-qm-backend-1.onrender.com/api/hospitals/hospitalData");
      setHospitals(res.data);
    } catch (err) {
      toast.error("Failed to load hospitals");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, images: e.target.files }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, address, contact, images } = formData;
    if (!name || !address || !contact || images.length === 0) {
      toast.error("All fields are required");
      return;
    }
    setLoading(true);
    try {
      const data = new FormData();
      data.append("name", name);
      data.append("address", address);
      data.append("contactNumber", contact);
        data.append("image", images[0]);
      
      await axios.post("https://samarpan-qm-backend.vercel.app/api/hospitals/add", data);
      toast.success("Hospital added successfully");
      fetchHospitals();
      setFormData({ name: "", address: "", contact: "", images: [] });
    } catch (err) {
      toast.error(err.message+"Error adding hospital");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    // if (!window.confirm("Are you sure you want to delete this hospital?")) return;
    // try {
    //   await axios.delete(`/api/hospitals/${id}`);
    //   toast.success("Hospital deleted");
    //   fetchHospitals();
    // } catch (err) {
    //   toast.error("Error deleting hospital");
    // }
  };

  const handleEdit = (hospital) => {
    setEditHospital(hospital);
    setFormData({
      name: hospital.name,
      address: hospital.address,
      contact: hospital.contact,
      images: [],
    });
    setTab("edit");
  };

const handleUpdate = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append("name", formData.name);
  data.append("address", formData.address);
  data.append("contact", formData.contact);
  data.append("images", formData.images[0]);
//   if (formData.images.length > 0) {
//     for (let i = 0; i < formData.images.length; i++) {
//       data.append("images", formData.images[i]);
//     }
//   }

//   try {
//     await axios.put(`/api/hospitals/${editHospital._id}`, data);
//     toast.success("Hospital updated");
//     fetchHospitals();
//     setEditHospital(null);
//     setFormData({ name: "", address: "", contact: "", images: [] });
//     setTab("view");
//   } catch (err) {
//     toast.error("Error updating hospital");
//   }
};

  const handleDoctorAdd = async () => {
    if (!doctorData.doctorId) {
      toast.error("Doctor doctorId required");
      return;
    }
    if ( ! doctorData.hospitalId) {
        toast.error("HospitalId required");
        return;
      }
    try {
      await axios.post(`https://samarpan-qm-backend.vercel.app/api/hospitals/add-doctor`, doctorData);
      toast.success("Doctor added");
      fetchHospitals();
      setDoctorData({ hospitalId: "", doctorId: "" });
      setShowDoctorFormFor(null);
    } catch (err) {
      toast.error(err.message+"Failed to add doctor");
    }
  };

  const indexOfLast = currentPage * hospitalsPerPage;
  const indexOfFirst = indexOfLast - hospitalsPerPage;
  const filtered = hospitals.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase())
  );
  const currentHospitals = filtered.slice(indexOfFirst, indexOfLast);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filtered.length / hospitalsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="p-4">
      <Toaster />
      {/* Replace this div with a Router Link where needed */}
      <div className="mb-4 flex gap-4">
        <button onClick={() => setTab("view")}>View Hospitals</button>
        <button onClick={() => setTab("add")}>Add Hospital</button>
      </div>

      <input
        type="text"
        placeholder="Search hospitals..."
        className="mb-4 p-2 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <div>Loading...</div>
      ) : tab === "view" ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentHospitals.map((h) => (
              <div key={h._id} className="border p-4 rounded shadow">
                  <img
                    src={`https://samarpan-qm-backend.vercel.app/image/uploads/${h.image}`}
                    alt="hospital"
                    className="w-full h-32 object-cover mb-2 rounded"
                  />
                
                <h2 className="text-medium ">HospitalId:{h._id}</h2>
                <h2 className="text-lg font-bold">{h.name}</h2>
                <p>{h.address}</p>
                <p>{h.contact}</p>
                
                <div className="mt-2">
                  <h3 className="font-semibold">Doctors:</h3>
                  <ul>
                    {h.doctors?.map((d, idx) => (
                      <li key={idx}>{d.name} - {d. specialization}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2 flex gap-2">
                  <button onClick={() => handleDelete(h._id)}>Delete</button>
                  <button onClick={() => handleEdit(h)}>Edit</button>
                  <button onClick={() => setShowDoctorFormFor(h._id)}>
                    Add Doctor
                  </button>

                </div>
                {showDoctorFormFor === h._id && (
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="HospitalId"
                      value={doctorData.hospitalId}
                      onChange={(e) => setDoctorData({ ...doctorData, hospitalId: e.target.value })}
                      className="border p-1 mr-2"
                    />
                    <input
                      type="text"
                      placeholder="doctorId"
                      value={doctorData.doctorId}
                      onChange={(e) => setDoctorData({ ...doctorData, doctorId: e.target.value })}
                      className="border p-1 mr-2"
                    />
                    <button onClick={() => handleDoctorAdd(h._id)}>Submit</button>
                    <button type="button"
                                  onClick={() => setShowDoctorFormFor(null)}
                                   className="mt-2 p-1 bg-red-500 text-white" >
      Cancel
    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {pageNumbers.map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`px-3 py-1 border ${currentPage === num ? "bg-blue-500 text-white" : ""}`}
              >
                {num}
              </button>
            ))}
          </div>
        </>
      ) : (
        <form onSubmit={editHospital ? handleUpdate : handleSubmit} className="max-w-md mx-auto">
          <input
            name="name"
            placeholder="Hospital Name"
            value={formData.name}
            onChange={handleInputChange}
            className="block w-full p-2 mb-2 border"
          />
          <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            className="block w-full p-2 mb-2 border"
          />
          <input
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            onChange={handleInputChange}
            className="block w-full p-2 mb-2 border"
          />
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="block w-full p-2 mb-2"
          />
          <button type="submit" className="px-4 py-2 bg-green-500 text-white">
            {editHospital ? "Update Hospital" : "Add Hospital"}
          </button>
        </form>
      )}
    </div>
  );
};

export default HospitalDashboard;

// Router Route: <Route path="/hospital-dashboard" element={<HospitalDashboard />} />

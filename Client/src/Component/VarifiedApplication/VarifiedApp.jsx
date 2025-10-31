export default function VerifiedApp() {
  const applications = [
    {
      title: "Hospitals",
      description: "Helps to manage your hospital’s productivity by overcoming your staff’s workload, gaining valuable insights into regular operations and managing patient flow efficiently.",
      image: "/ALL-IMAGES/hospitals.svg",
      bgColor: "#FFEBEE", // Light Red
    },
    {
      title: "Test Centers",
      description: "The Hospital Queue System helps test centers ease appointment scheduling, maintain social distancing, decrease wait times, and ensure effective & safe testing processes.",
      image: "/ALL-IMAGES/test-center.svg",
      bgColor: "#EBFFEC", // Light Green
    },
    {
      title: "Veterinarians",
      description: "Healthcare Queue management systems streamline operations for veterinarians, manage animal appointments, and promote overall efficiency by improving veterinary hospital's service quality.",
      image: "/ALL-IMAGES/veterinarians.svg",
      bgColor: "#FFECDC", // Light Orange
    },
    {
      title: "Laboratories",
      description: "The hospital patient management software brings calm and structure for patients to navigate their way to lab appointments and enhances operational and staff efficiencies with smooth workflow.",
      image: "/ALL-IMAGES/laboratories.svg",
      bgColor: "#FFF3DF", // Light Yellow
    },
    {
      title: "Clinics",
      description: "Clinic owners can manage long waiting lines by installing Samarpan at their place. It will help to notify your queue patients about their turn times so that they can manage their own time in other works rather than waiting in the clinic area.",
      image: "/ALL-IMAGES/clinics.svg",
      bgColor: "#F3FAFF", // Light Blue
    },
    {
      title: "Pharmacies",
      description: "Patient Data Management Software in pharmacies streamlines patient flow, reduces wait times, enhances productivity, and optimizes staff efficiency through digital queue management and notifications.",
      image: "/ALL-IMAGES/pharmacies.svg",
      bgColor: "#E4FAFF", // Light Cyan
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      <div className="text-center mb-12">
        <div className="w-40 h-1 bg-black mx-auto mb-4"></div>
        <h2 className="text-4xl font-bold leading-snug font-Poppins font-sans">
          Varied Applications of Our Healthcare Queue <br /> Management System
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {applications.map((app, index) => (
          <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-md">
            {/* Background Color Applied to Icon Container */}
            <div
              className="w-[200px] h-[80px] mr-6 flex items-center justify-center rounded-lg"
              style={{ backgroundColor: app.bgColor }}
            >
              <img src={app.image} alt={app.title} className="w-[109px] h-[109px]" />
            </div>
            <div>
              <h3 className="text-[25px] font-bold mb-2 text-[#494949] font-Poppins font-sans">
                {app.title}
              </h3>
              <p className="text-[16px] text-[#555555] font-[600] font-Poppins font-sans">
                {app.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

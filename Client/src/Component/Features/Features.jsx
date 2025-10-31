export default function Features() {
  const applications = [
    {
      title: "Time Management",
      description: "Samarpan helps manage time smartly by scheduling appointments, sending reminders, reducing wait times, and offering real-time updates about queues and actual waiting times.",
      image: "/ALL-IMAGES/time.svg",
      bgColor: "#FFEBEE", // Light Red
    },
    {
      title: "Real-time Queue Updates",
      description: "Real-time monitoring in hospitals allows you to track staff performance, monitor patient traffic and activity across different branches of the hospital, and check waitlist status for improved management.",
      image: "/ALL-IMAGES/real-time.svg",
      bgColor: "#EBFFEC", // Light Green
    },
    {
      title: "Online Appointment Booking",
      description: "The Hospital Queue Management System allows patients to book appointments from anywhere and estimate the expected number of patients in a queue or when their turn comes.",
      image: "/ALL-IMAGES/appointment.svg",
      bgColor: "#FFECDC", // Light Orange
    },
    {
      title: "Scan QR Code",
      description: "The Healthcare Queue Management System saves money by allowing the use of QR codes in the hospital premises as per the requirement to ensure easy access.",
      image: "/ALL-IMAGES/scan.svg",
      bgColor: "#FFF3DF", // Light Yellow
    },
    {
      title: "Graphical Reporting",
      description: "Graphical reporting helps hospital owners analyze the overall weekly or monthly performance of staff and allows a better understanding of their duties, patient waiting & service times.",
      image: "/ALL-IMAGES/graphical.svg",
      bgColor: "#F3FAFF", // Light Blue
    },
    {
      title: "Data Collection",
      description: "Data collection in an HQMS helps hospital owners make better decisions by optimizing patient flow, reducing wait times, enhancing staff allocation, recording details, and improving overall operational efficiency.",
      image: "/ALL-IMAGES/data-collection.svg",
      bgColor: "#E4FAFF", // Light Cyan
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      <div className="text-center mb-12">
        <div className="w-40 h-1 bg-black mx-auto mb-4"></div>
        <h2 className="text-4xl font-bold leading-snug font-Poppins font-sans">
          Features of Queue Management System in Hospital
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {applications.map((app, index) => (
          <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-md">
            {/* Background Color Applied to Icon Container */}
            <div
              className="w-[200px] h-[100px] mr-6 flex items-center justify-center rounded-lg"
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

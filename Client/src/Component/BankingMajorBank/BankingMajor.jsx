export default function BankingMajor() {
  const applications = [
    {
      title: "Multi-branch Queue Management System",
      description: "Our system manages queues in a centralized way, making sure that queues at all bank branch locations are organized and efficient. This will provide a smooth queuing experience for customers, no matter which branch they visit.",
      image: "/ALL-IMAGES/multi-branch.svg",
      bgColor: "#FFEBEE", // Light Red
    },
    {
      title: "Customized Notifications",
      description: "Every customer feels valued through personalized messaging and check-in experiences. Our Qwaiting solution stores customer information to ensure you never forget any details or preferences.",
      image: "/ALL-IMAGES/customizationBank.svg",
      bgColor: "#EBFFEC", // Light Green
    },
    {
      title: "Easy Integration",
      description: "API integration allows you to link our system with your existing databases, which will increase the accuracy of the data you can analyze.",
      image: "/ALL-IMAGES/integration.svg",
      bgColor: "#FFECDC", // Light Orange
    },
    {
      title: "Virtual Queuing",
      description: "Offer customers remote access to financial services without the need to physically wait in line. With Mobile Ticket, customers can wait remotely on-premises, maintaining social distancing at banks or insurance agencies.",
      image: "/ALL-IMAGES/virtual-queuing.svg",
      bgColor: "#FFF3DF", // Light Yellow
    },
    {
      title: "Real-time Activity Dashboard",
      description: "The Bank queue management system's live overview allows for instant insights into queue statuses, service point activities, and overall operational performance.",
      image: "/ALL-IMAGES/real-time-activity.svg",
      bgColor: "#F3FAFF", // Light Blue
    },
    {
      title: "Gather Data and Feedback",
      description: "The banking queue management system ensures a user-friendly experience by allowing customers to share their perspectives about the financial service.",
      image: "/ALL-IMAGES/gather-data.svg",
      bgColor: "#E4FAFF", // Light Cyan
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      <div className="text-center mb-12">
        <div className="w-40 h-1 bg-black mx-auto mb-2"></div>
        <h2 className="text-4xl font-bold leading-snug font-Poppins font-sans">
          Some Major Bank Queue Management Solution <br /> Features Include
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

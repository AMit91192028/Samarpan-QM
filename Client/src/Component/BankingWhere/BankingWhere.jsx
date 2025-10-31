export default function BankingWhere() {
  const applications = [
    {
      title: "Commercial Banks",
      description: "Provide an organized customer journey by implementing a bank queuing system at key service points, such as teller windows and customer service desks.",
      image: "/ALL-IMAGES/commercial-banks.svg",
      bgColor: "#FFEBEE", // Light Orange
    },
    {
      title: "Insurance Companies",
      description: "Insurance companies can use a queue management system to deliver hassle-free insurance policies to their customers without standing or waiting in long queues.",
      image: "/ALL-IMAGES/insurance-companies.svg",
      bgColor: "#EBFFEC", // Light Blue
    },
    {
      title: "Post Offices",
      description: "Create an orderly queue at post office service counters and keep customers informed about their queue status through digital displays or announcements, improving transparency and reducing anxiety.",
      image: "/ALL-IMAGES/post-office.svg",
      bgColor: "#FFECDC", // Light Red/Pink
    },
    {
      title: "Saving and Loan Associations",
      description: "Loan associations can overcome the manual queue handling hassle by taking the benefit of Queue Management for Financial Services. Reduced waiting time makes customer’s loan appointments efficient & satisfying.",
      image: "/ALL-IMAGES/loan-associations.svg",
      bgColor: "#FFF3DF;", // Light Purple
    },
    {
      title: "Mortgage Companies",
      description: "Mortgage companies can manage long queues by installing QWaiting at their site. It helps you let your customers know when it's their turn and meet them quickly with mortgage specialists.",
      image: "/ALL-IMAGES/mortgage.svg",
      bgColor: "#F3FAFF", // Light Green
    },
    {
      title: "Brokerage Firms",
      description: "The bank queuing system in brokerage firms streamlines the flow of customers, reduces wait times, and stimulates staff productivity.",
      image: "/ALL-IMAGES/brokerage-firms.svg",
      bgColor: "#E4FAFF", // Light Yellow
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      <div className="text-center mb-12">
        <div className="w-40 h-1 bg-black mx-auto mb-2"></div>
        <h2 className="text-4xl font-bold leading-snug font-Poppins font-sans">
          Where Bank Queuing System Be Used?
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

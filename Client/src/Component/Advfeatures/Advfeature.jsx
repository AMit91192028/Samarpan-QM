export default function Advfeature() {
    const applications = [
      {
        title: "No-contact System",
        description: "A retail queue system allows customers to join the queue by scanning the QR code using any device, without the need for physical tokens or hardware. Our system provides a safe and efficient way for customers to enter the retail store.",
        image: "/ALL-IMAGES/no-contact-system.svg"
      },
      {
        title: "Resource Planning and Staff Allocation",
        description: "Qwaiting helps in scheduling and assigning staff members to different tasks and areas of the retail outlet based on customer traffic and needs. Avoid the situation of understaffing and overstaffing for a seamless customer experience.",
        image: "/ALL-IMAGES/resource.svg"
      },
      {
        title: "Digital Signage Solution",
        description: "Retail queue systems can integrate with digital screens which communicate with customers about newly launched retail products, promotions, and their average waiting time for buying the goods.",
        image: "/ALL-IMAGES/digital.svg"
      },
      {
        title: "Retail Business Intelligence",
        description: "Retailers can access analytical reports on customer preferences, inventory management, and the sales performance of each retail branch store to identify areas for improvement and make data-driven business decisions.",
        image: "/ALL-IMAGES/retail-business.svg"
      },
      {
        title: "Capacity Tracking",
        description: "Automatically monitor customer entries and exits to effectively manage store capacity. When the store reaches full capacity, customers can easily join a virtual waitlist.",
        image: "/ALL-IMAGES/capacity-tracking.svg"
      },
      {
        title: "Customer Feedback",
        description: "Effectively handle customer feedback across all retail branch outlets to gain a complete understanding of customer opinions. Plus, this feature can be integrated with social media handles to ensure feedback is collected from diverse sources.",
        image: "/ALL-IMAGES/customer-feedback.svg"
      }
    ];

    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-40 h-1 bg-black mx-auto mb-2"></div>
          <h2 className="text-4xl font-bold leading-snug font-Poppins font-sans">
          Some Major Bank Queue Management Solution <br/>Features Include
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-md">
              <img src={app.image} alt={app.title} className="w-18 h-18 mr-6 bg-[#f3fafa] rounded-[5px]" />
              <div>
                <h3 className="text-[25px] font-bold mb-2 text-[#494949] font-Poppins font-sans">{app.title}</h3>
                <p className="text-[16px] text-[#555555] font-[600] font-Poppins font-sans">{app.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
export default function RetailQadv() {
    const applications = [
      {
        title: "Supermarkets",
        description: "Retail queue management software is frequently used in grocery stores and supermarkets to manage lines at regular checkouts and self-checkout stations.",
        image: "/ALL-IMAGES/no-contact-system.svg"
      },
      {
        title: "Pharmacies",
        description: "Medical stores utilize retail queuing systems to help customers wait for prescription pickups or consult with pharmacists.",
        image: "/ALL-IMAGES/resource.svg"
      },
      {
        title: "Retail Outlets",
        description: "Various types of retail stores, including clothing stores and electronics shops, can benefit from queue systems to improve customer service during peak hours.",
        image: "/ALL-IMAGES/digital.svg"
      },
      {
        title: "Salons",
        description: "Helps to inform your customers in the queue about their average waiting times so that they can spend their time doing other work instead of waiting in the salons.",
        image: "/ALL-IMAGES/retail-business.svg"
      },
      {
        title: "Mobile Stores",
        description: "Mobile Stores offer repair and service options for their IOS & Android products. A retail queue system can be implemented in these areas to coordinate customer check-ins and pickups.",
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
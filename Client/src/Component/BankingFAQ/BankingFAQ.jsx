import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
    {
      question: "Is the Bank Queue Management System customizable?",
      answer: "Yes, our digital banking queue system is fully customizable to cater to the specific needs and workflow of different financial institutions. Customization may include branding and workflow adjustments.",
    },
    {
      question: "Can the system handle multiple service points?",
      answer: "Yes, the smart queue management system for banks manages queues across various service points, such as customer service desks, and other service areas within a banking sector.",
    },
    {
      question: "How do Digital banking solutions handle busy periods in the banks?",
      answer: "The system helps in allocating staff members as per the customer demand in the bank premises. Also, it can prioritize certain services, and provide real-time updates to customers, ensuring efficient handling of peak hours.",
    },
    {
      question: "Is it possible to integrate the Bank Queue Management System with other software solutions?",
      answer: "Indeed, the queue system in the bank has the capability to integrate with other third-party software, ensuring an interconnected workflow and better customer experience.",
    },
    {
      question: "How user-friendly is the Bank Queue Management System?",
      answer: "Our smart queue management system has an easy-to-use interface for both staff and customers. Anyone can easily generate tickets and get a positive user experience",
    },
  ];
  
export default function BankingFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleIndex, setVisibleIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      setVisibleIndex(null);
    } else {
      setActiveIndex(index);
      setTimeout(() => setVisibleIndex(index), 150);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      <div className="text-center mb-12">
        <div className="w-[200px] h-1 bg-black mx-auto mb-4 mt-[50px]"></div>
        <h2 className="text-4xl font-extrabold leading-snug font-poppins font-sans">
          Benefits of Hospital Queue Management System
        </h2>
      </div>
      <div className="max-w-2xl mx-auto mt-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md mb-4 p-5 cursor-pointer transition-all duration-300"
            onClick={() => handleToggle(index)}
          >
            {/* Question Section */}
            <div className="flex justify-between items-center">
              <h2 className="text-[25px] font-bold text-[#020202] font-poppins font-sans ">
                {faq.question}
              </h2>
              <span className="text-3xl text-[#020202] font-extrabold">
                {activeIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </div>

            {/* Answer Section with Delay */}
            {visibleIndex === index && (
              <p className="text-gray-700 mt-3 text-lg leading-7 transition-opacity duration-300 opacity-100 font-poppins font-sans">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

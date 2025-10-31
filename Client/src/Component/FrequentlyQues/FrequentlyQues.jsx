import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "How does healthcare queue management system improve patient satisfaction?",
    answer:
      "The healthcare queue management system improves patient satisfaction by reducing wait times, providing personalized care plans, and enhancing communication between healthcare providers and patients.",
  },
  {
    question: "Is data security a priority for the queue management system?",
    answer:
      "Absolutely, the healthcare queuing system employs robust encryption protocols and complies with industry standards to ensure the utmost security of patient data.",
  },
  {
    question: "Can Samarpan hospital queue management integrate with existing hospital systems?",
    answer:
      "Yes, seamless integration is a key feature of queue management software, ensuring compatibility with existing healthcare infrastructure. It can easily be integrated with existing hospital systems and third-party APIs to enhance its capabilities.",
  },
  {
    question: "How does the healthcare queue management system contribute to operational efficiency?",
    answer:
      "It streamlines processes, facilitates data-driven decision-making, and optimizes resource allocation, ultimately enhancing operational efficiency.",
  },
  {
    question: "What sets Samarpan apart in patient management?",
    answer:
      "It revolutionizes patient experiences by offering personalized care plans, efficient appointment scheduling, and smart queues to minimize waiting times. QWaiting is extremely customizable and is affordable compared to the options available in the market.",
  },
  {
    question: "Can healthcare professionals trust the accuracy of data provided by Samarpan?",
    answer:
      "Absolutely, the platform ensures the accuracy and reliability of data, empowering healthcare professionals with trustworthy information.",
  },
];

export default function FAQ() {
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

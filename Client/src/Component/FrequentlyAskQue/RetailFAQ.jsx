import  { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
    {
      question: "Does the system support appointment scheduling?",
      answer: "Our retail queue management systems allow customers to book any time slot for any retail service. This significantly helps in better managing customer footfalls and reducing their wait times.",
    },
    {
      question: "How easy is it to train retail staff to use queuing software?",
      answer: "Samarpan retail queue system has a user-friendly interface. The solution offers many training sessions or tutorials to ensure that staff can efficiently operate the system and drive success.",
    },
    {
      question: "What kind of technical support is offered?",
      answer: "The retail queue management system provides 24/7 online support to address any issues or updates quickly for a seamless customer experience.",
    },
    {
      question: "Can the system be integrated with customer feedback mechanisms?",
      answer: "Yes, you can easily integrate our retail queueing system with customer feedback tools. This allows businesses to gather valuable insights into customer satisfaction and areas for improvement.",
    },
    {
      question: "Can retailers access queue information remotely for every retail outlet owned by them?",
      answer: "Yes, retailers can easily access all the information on a single dashboard for every retail store owned by them.",
    },
  ];
  
export default function RetailFAQ() {
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
        Frequently Asked Questions
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
              <h2 className="text-[25px] font-bold text-[#020202] font-Poppins font-sans ">
                {faq.question}
              </h2>
              <span className="text-3xl text-[#020202] font-extrabold">
                {activeIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </div>

            {/* Answer Section with Delay */}
            {visibleIndex === index && (
              <p className="text-[#7f7f7f] mt-3 text-[16px] leading-7 transition-opacity duration-300 opacity-100 font-Poppins font-sans">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
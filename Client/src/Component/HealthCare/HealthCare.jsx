import Button from "../Buttons/Button";

export default function HealthCare() {
  return (
    <>
      {/* Header Section */}
      <div className="bg-[url('/ALL-IMAGES/health-banner-bg.png')] bg-no-repeat bg-cover w-full py-12 flex flex-col sm:flex-row items-center justify-center gap-8 rounded-md shadow-md p-8 sm:pl-[150px] sm:pr-[150px] px-4">
  {/* Left Side: Text and Buttons */}
  <div className="flex-1 text-center sm:text-left">
    <h1 className="text-[35px] sm:text-[60px] font-bold text-gray-800 mb-4">
      Healthcare Queue Management System
    </h1>
    <p className="text-[20px] md:text-[16px] text-[#555555] font-Poppins mb-6 font-normal">
      Samarpans Healthcare Queue Management System is an 
      Efficient solution to organize patient flow by managing queues, scheduling summaries
      , and enhancing employee productivity.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <Button buttonText="Start Your Free Trial" width={250} />
      <Button buttonText="Solutions" width={200} />
    </div>
  </div>

  {/* Right Side: Image (Unchanged for PC) */}
  <div className="flex-1 flex justify-center">
    <img
      src="/ALL-IMAGES/HealthCare1st.png"
      alt="Appointment Scheduling Software"
      className="w-[300px] sm:w-[600px] rounded-[5px]"
    />
  </div>
</div>

</>
  )}
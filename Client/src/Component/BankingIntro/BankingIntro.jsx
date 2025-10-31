import Button from "../Buttons/Button";

export default function BankingIntro() {
  return (
    <>
      {/* Header Section */}
      <div className="bg-[url('/ALL-IMAGES/health-banner-bg.png')] bg-no-repeat bg-cover w-full py-12 flex flex-col sm:flex-row items-center justify-center gap-8 rounded-md shadow-md p-8 sm:pl-[150px] sm:pr-[150px] px-4">
  {/* Left Side: Text and Buttons */}
  <div className="flex-1 text-center sm:text-left">
    <h1 className="text-[35px] sm:text-[60px] font-bold text-gray-800 mb-4">
    Banking Queue Management System
    </h1>
    <p className="text-[20px] md:text-[16px] text-[#555555] font-Poppins mb-6 font-normal">
    A well-organized queue line in a bank is an opportunity for excellent customer service. 
    Our system efficiently handles customer traffic ensures that every step is efficient and 
    contributes to a positive banking experience.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <Button buttonText="Start Your Free Trial" width={250} />
      <Button buttonText="Solutions" width={200} />
    </div>
  </div>

  {/* Right Side: Image (Unchanged for PC) */}
  <div className="flex-1 flex justify-center">
    <img
      src="/ALL-IMAGES/bankingIntro.png"
      alt="Appointment Scheduling Software"
      className="w-[300px] sm:w-[600px] rounded-[5px]"
    />
  </div>
</div>

</>
  )}
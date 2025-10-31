import List from "../Header/List/List";

export default function Benefits() {
  return (
    <div className="flex flex-col items-center justify-center mt-[60px] wait-book shadow-[0_-8px_8px_rgba(0,0,0,0.15)] px-4 sm:px-0">
      
      {/* Centered Heading and Line */}
      <div className="text-center w-full">
        <div className="border-2 border-[#333333] w-[10rem] mx-auto mt-[30px]"></div>
        <h1 className="mt-[20px] text-[34px] text-[#000000] font-bold font-Poppins">
          Benefits
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full max-w-[1200px] mt-[50px] px-6 sm:px-12 gap-[20px]">
        
        {/* Left Side (Text and List) */}
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <h1 className="text-[28px] sm:text-[32px] font-bold text-[#333333] mb-[10px]">
            Real-Time Availability
          </h1>
          <div className="text-[16px] sm:text-[18px]">
            <List list="Customers can select the preferred appointment slots without the need for manual coordination." />
            <List list="Customers can access the services 24/7 to check real-time availability." />
            <List list="Reduce scheduling conflicts and human errors due to instant updates on available time slots." />
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end mt-6 sm:mt-0">
          <img
            src="/ALL-IMAGES/real_time_availability.png"
            alt="Real-Time Availability"
            className="w-[90%] sm:w-[100%] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

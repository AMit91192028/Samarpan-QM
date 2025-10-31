import List from "../Header/List/List";

export default function GiveService() {
  return (
    <>
      <div className="flex items-center justify-center mt-[100px] Centralize shadow-[0_-8px_8px_rgba(0,0,0,0.15)] px-4 sm:px-0 mx-auto">
        {/* Content Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full max-w-[1200px] px-6 sm:px-12 gap-[150px]">
          
          {/* Left Side - List */}
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h1 className="text-[28px] sm:text-[32px] font-bold text-[#020202] pt-[80px] mb-[20px]">
              Give the Service:
            </h1>

            {/* Added padding below heading */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 text-xl list-none pt-[10px]">
              <List list="Call the patient" />
              <List list="Patient’s turn display on the screen and notification on mobile" />
              <List list="Proceed for medical assistance" />
              <List list="Served, and the ticket closed" />
            </ul>
          </div>

          {/* Right Side - Image (Added padding-top) */}
          <div className="w-full sm:w-1/2 flex justify-center sm:justify-end pt-[50px]">
            <img
              src="/public/ALL-IMAGES/services.png"
              alt="Real-Time Availability"
              className="w-[100%] sm:w-[100%] object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

import List from "../Header/List/List"

export default function Centralized() {
    

    return (
        <>
            <div className="flex items-center justify-center mt-[60px] Centralize shadow-[0_-8px_8px_rgba(0,0,0,0.15)] px-4 sm:px-0 mx-auto">
            
                  {/* Content Section */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full max-w-[1200px] mt-[50px] px-6 sm:px-12 gap-[20px]">

                  <div className="w-full sm:w-1/2 flex justify-center sm:justify-end sm:mt-0">
                      <img
                        src="/public/ALL-IMAGES/centralized_information_system.png"
                        alt="Real-Time Availability"
                        className="w-[100%] sm:w-[100%]"
                      />
                    </div>
                    {/* Left Side (Text and List) */}
                    <div className="w-full sm:w-1/2 text-center sm:text-left">
                      <h1 className="text-[28px] sm:text-[32px] font-bold text-[#020202] mb-[10px]">
                      Centralized Information System
                      </h1>
                      <div className="text-[16px] sm:text-[18px]">
                        <List list="Our software records all appointment-related information in its secured database." />
                        <List list="An integrated calendar helps businesses and clients to have a glance view of appointments and ensures that no important details are overlooked." />
                        <List list="Centralizing information provides better communication ensuring that everyone is on the same page regarding appointments and schedules." />
                      </div>
                    </div>
            
                    {/* Right Side (Image) */}
                  </div>
                </div>
        </>
    )
}

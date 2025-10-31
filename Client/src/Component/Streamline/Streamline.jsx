import React from 'react';
import List from "../Header/List/List"
const HospitalCheckIn = () => {
  return (
   <>
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
           <div className="text-center ">
             <div className="w-[200px] h-1 bg-black mx-auto mb-4 mt-[50px]"></div>
             <h2 className="text-4xl font-bold leading-snug font-Poppins font-sans">
             Streamline Your Hospital's Workflow with a Modern <br/>Check-in and patient management system
             </h2>
             <p className="text-[16px] text-[#555555] font-normal leading-[30px] font-[Poppins,sans-serif] pt-[20px]">
             This system has effective features like smooth check-ins,queue management,<br/> and quick reminders or notifications.
             </p>
           </div>
           </section>
 <div className="flex items-center justify-center Centralize shadow-[0_-8px_8px_rgba(0,0,0,0.15)] px-4 sm:px-0 mx-auto mb-[50px]">
                            
                                  {/* Content Section */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full max-w-[1200px] mt-[50px] px-6 sm:px-12 gap-[20px]">
                                    {/* Left Side (Text and List) */}
                        <div className="w-full sm:w-1/2 text-center sm:text-left flex flex-col gap-[8px]">
                            <h1 className="text-[28px] sm:text-[32px] font-bold text-[#333333] pt-[50px] mb-[10px]">
                            Patient Check-in:
                            </h1>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 text-xl list-none pt-[10px]">
                              <List list="Go for a walk-in or Online" />
                              <List list="Select: Kiosk or QR Code Scanner" />
                              <List list="Enter Required details" />
                              <List list="Generate unique ticket" />
                            </ul>
                        </div>
                            
                        {/* Right Side (Image) */}
                        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end sm:mt-0">
                            <img
                                src="/ALL-IMAGES/Streamline.png"
                                alt="Real-Time Availability"
                                className="w-[500px] sm:w-[100%]"
                            />
                        </div>
                    </div>
                </div>
       </>
  );
};

export default HospitalCheckIn;

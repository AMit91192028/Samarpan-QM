import List from "../Header/List/List";

export default function HealthBanefits() {
  return (
   <>
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-[200px] h-1 bg-black mx-auto mb-4 mt-[50px]"></div>
          <h2 className="text-4xl font-bold leading-snug font-Poppins font-sans">
          Benefits of Hospital Queue Management System
          </h2>
        </div>
        </section>

           <div className="flex items-center justify-center Centralize shadow-[0_-8px_8px_rgba(0,0,0,0.15)] px-4 sm:px-0 mx-auto">
                    
                          {/* Content Section */}
                          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full max-w-[1200px] mt-[50px] px-6 sm:px-12 gap-[150px]">
        
                          <div className="w-full sm:w-1/2 flex justify-center sm:justify-end sm:mt-0">
                              <img
                                src="/public/ALL-IMAGES/elite.png"
                                alt="Real-Time Availability"
                                className="w-[100%] sm:w-[100%]"
                              />
                            </div>
                            {/* Left Side (Text and List) */}
                            <div className="w-full sm:w-1/2 text-center sm:text-left">
                              <h1 className="text-[28px] sm:text-[32px] font-bold text-[#020202] mb-[10px]">
                              Integration via APIs
                              </h1>
                              <div className="text-[16px] sm:text-[18px] ">
                                <List list="Third-party integration with Hospital Information System APIs (Plato, Elite Plus)" />
                                <List list="Help to simplify patient registration, scheduling, records, and medical billing" />
                                <List list="Help to simplify patient registration, scheduling, records, and medical billing" />
                              </div>
                            </div>
                    
                            {/* Right Side (Image) */}
                          </div>
                        </div>

    </>
  );
}

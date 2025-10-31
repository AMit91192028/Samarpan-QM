import List from "../Header/List/List"

export default function Boostsales() {
    

    return (
        <>
            <div className="flex items-center justify-center mt-[60px] Centralize shadow-[0_-8px_8px_rgba(0,0,0,0.15)] px-4 sm:px-0 mx-auto">
            
                  {/* Content Section */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-evenly w-full max-w-[1200px] mt-[50px] px-6 sm:px-12 gap-[80px]">

                  <div className="w-full sm:w-1/2 flex sm:justify-end sm:mt-0">
                      <img
                        src="/ALL-IMAGES/boost-sales.png"
                        alt="Real-Time Availability"
                        className="w-[100%] sm:w-[100%]"
                      />
                    </div>
                    {/* Left Side (Text and List) */}
                    <div className="w-full sm:w-1/2 text-center sm:text-left">
                      <h1 className="text-[28px] sm:text-[32px] font-bold text-[#333333] mb-[25px] font-Poppins">
                      Boost Sales and Generate More Revenue
                      </h1>
                      <div className="text-[16px] sm:text-[18px]">
                        <List list="Shortening waiting times leads to making additional purchases in the retail store." />
                        <List list="Anticipates retail peak times and optimizes staffing for higher revenue potential." />
                        <List list="Providing personalized service improves the conversion of opportunities to sales." />
                      </div>
                    </div>
            
                    
                  </div>
                </div>
        </>
    )
}

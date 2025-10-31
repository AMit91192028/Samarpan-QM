import List from "../Header/List/List"

export default function Setupcost() {
    

    return (
        <>
            <div className="flex items-center justify-center mt-[60px] Centralize shadow-[0_-8px_8px_rgba(0,0,0,0.15)] px-4 sm:px-0 mx-auto">
            
                  {/* Content Section */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-evenly w-full max-w-[1200px] mt-[50px] px-6 sm:px-12 gap-[80px]">

                  <div className="w-full sm:w-1/2 flex sm:justify-end sm:mt-0">
                      <img
                        src="/ALL-IMAGES/easy-and-less-setup-cost.png"
                        alt="Real-Time Availability"
                        className="w-[100%] sm:w-[100%]"
                      />
                    </div>
                    {/* Left Side (Text and List) */}
                    <div className="w-full sm:w-1/2 text-center sm:text-left">
                      <h1 className="text-[28px] sm:text-[32px] font-bold text-[#333333] mb-[25px] font-Poppins">
                      Easy and Less Setup Cost
                      </h1>
                      <div className="text-[16px] sm:text-[18px]">
                        <List list="No additional hardware is required." />
                        <List list="Quick setup time to make it operational across all your retail branches." />
                        <List list="Minimizes the need for additional resources." />
                      </div>
                    </div>
            
                    
                  </div>
                </div>
        </>
    )
}

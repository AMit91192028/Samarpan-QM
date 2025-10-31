import List from "../Header/List/List"

export default function BankingExcp() {
    

    return (
        <>
            <div className="flex items-center justify-center mt-[60px] Centralize shadow-[0_-8px_8px_rgba(0,0,0,0.15)] px-4 sm:px-0 mx-auto">
            
                  {/* Content Section */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full max-w-[1200px] mt-[50px] px-6 sm:px-12 gap-[150px]">

                  <div className="w-full sm:w-1/2 flex justify-center sm:justify-end sm:mt-0">
                      <img
                        src="/public/ALL-IMAGES/exceptional.png"
                        alt="Real-Time Availability"
                        className="w-[100%] sm:w-[100%]"
                      />
                    </div>
                    {/* Left Side (Text and List) */}
                    <div className="w-full sm:w-1/2 text-center sm:text-left">
                      <h1 className="text-[28px] sm:text-[32px] font-bold text-[#020202] mb-[10px]">
                      Exceptional Customer Experience
                      </h1>
                      <div className="text-[16px] sm:text-[18px] ">
                        <List list="Staff can access customer profiles quickly and provide personalized financial service as per individual needs." />
                        <List list="The bank queue system reduces customer wait times, which demonstrates the bank's commitment to efficient customer service." />
                        <List list="Real-time customer feedback feature allows banks to identify areas for improvement." />
                      </div>
                    </div>
            
                    {/* Right Side (Image) */}
                  </div>
                </div>
        </>
    )
}

import List from "../Header/List/List";

export default function BankingSuperPower() {
  return (
   <>
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-[200px] h-1 bg-black mx-auto mb-4 mt-[30px]"></div>
          <h2 className="text-4xl font-bold leading-snug font-Poppins font-sans">
          Superpower Your Financial Institution
          </h2>
        </div>
        </section>

           <div className="flex items-center justify-center Centralize shadow-[0_-8px_8px_rgba(0,0,0,0.15)] px-4 sm:px-0 mx-auto">
                    
                          {/* Content Section */}
                          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full max-w-[1200px] mt-[50px] px-6 sm:px-12 gap-[150px]">
        
                          <div className="w-full sm:w-1/2 flex justify-center sm:justify-end sm:mt-0">
                              <img
                                src="/public/ALL-IMAGES/increaseBanking.png"
                                alt="Real-Time Availability"
                                className="w-[100%] sm:w-[100%]"
                              />
                            </div>
                            {/* Left Side (Text and List) */}
                            <div className="w-full sm:w-1/2 text-center sm:text-left">
                              <h1 className="text-[28px] sm:text-[32px] font-bold text-[#020202] mb-[10px]">
                              Increase your ROI (Return On Investment)
                              </h1>
                              <div className="text-[16px] sm:text-[18px] ">
                                <List list="dentify high-value transactions to prioritize customer engagement." />
                                <List list="Optimize staff deployment based on real-time customer demand." />
                                <List list="Provide data analytics for strategic financial service diversification, maximizing revenue potential." />
                              </div>
                            </div>
                    
                            {/* Right Side (Image) */}
                          </div>
                        </div>

    </>
  );
}

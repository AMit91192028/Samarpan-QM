import List from "../Header/List/List"

export default function Cusexp() {
    

    return (
        <>
          <div className="flex items-center justify-center mt-[60px] Centralize shadow-[0_-8px_8px_rgba(0,0,0,0.15)] px-4 sm:px-0 mx-auto">
                      
                            {/* Content Section */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full max-w-[1200px] mt-[50px] px-6 sm:px-12 gap-[30px]">
          
                            <div className="w-full sm:w-1/2 flex justify-center sm:justify-end sm:mt-0">
                                <img
                                  src="/ALL-IMAGES/unique_customer_experience.png"
                                  alt="Real-Time Availability"
                                  className="w-[100%] sm:w-[100%]"
                                />
                              </div>
                              {/* Left Side (Text and List) */}
                              <div className="w-full sm:w-1/2 text-center sm:text-left">
                                <h1 className="text-[28px] sm:text-[32px] font-bold text-[#020202] mb-[20px]">
                                Unique Customer Experience
                                </h1>
                                <div className="text-[16px] sm:text-[18px] flex flex-col gap-3">
                                  <List list="Our online appointment booking software offers a user-friendly interface without creating additional problems for users." />
                                  <List list="It sends an automated reminder text to customers for upcoming appointments." />
                                  <List list="Collects real-time feedback to improve business services and staff productiveness." />
                                </div>
                              </div>
                            </div>
                          </div>
        </>
    )
}

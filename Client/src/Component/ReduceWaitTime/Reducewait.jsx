import List from "../Header/List/List"

export default function Reducewait() {
    

    return (
        <>
            <div className="flex items-center justify-center mt-[60px] Centralize shadow-[0_-8px_8px_rgba(0,0,0,0.15)] px-4 sm:px-0 mx-auto">
            
                  {/* Content Section */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-evenly w-full max-w-[1200px] mt-[50px] px-6 sm:px-12 gap-[80px]">

                  <div className="w-full sm:w-1/2 flex sm:justify-end sm:mt-0">
                      <img
                        src="/ALL-IMAGES/reduced-wait-times.png"
                        alt="Real-Time Availability"
                        className="w-[100%] sm:w-[100%]"
                      />
                    </div>
                    {/* Left Side (Text and List) */}
                    <div className="w-full sm:w-1/2 text-center sm:text-left">
                      <h1 className="text-[28px] sm:text-[32px] font-bold text-[#020202] mb-[25px]">
                      Reduced Wait Times
                      </h1>
                      <div className="text-[16px] sm:text-[18px]">
                        <List list="Customers can move freely, and be notified when their turn arrives." />
                        <List list="Virtual queues enhance staff productivity, reducing customer wait times." />
                        <List list="Shorter queues lead to meaningful and faster customer interactions." />
                      </div>
                    </div>
            
                    
                  </div>
                </div>
        </>
    )
}

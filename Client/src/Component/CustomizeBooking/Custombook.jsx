import List from "../Header/List/List"

export default function Custombook() {
    

    return (
        <>
            <div className="flex items-center justify-center mt-[60px] Centralize shadow-[0_-8px_8px_rgba(0,0,0,0.15)] px-4 sm:px-0 mx-auto">
                                    
                                          {/* Content Section */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full max-w-[1200px] mt-[50px] px-6 sm:px-12 gap-[20px]">
                                            {/* Left Side (Text and List) */}
                                <div className="w-full sm:w-1/2 text-center sm:text-left flex flex-col gap-[8px]">
                                    <h1 className="text-[28px] sm:text-[32px] font-bold text-[#333333] mb-[10px]">
                                    Customizable Booking System
                                    </h1>
                                    <div className="text-[16px] sm:text-[18px] flex flex-col gap-[5px]">
                                    <List list="Customize the booking process to meet your specific business needs." />
                                    <List list="Personalize the interface with your brand’s logo and style." />
                                    <List list="Have the ability to Adapt to industry requirements." />
                                    </div>
                                </div>
                                    
                                {/* Right Side (Image) */}
                                <div className="w-full sm:w-1/2 flex justify-center sm:justify-end sm:mt-0">
                                    <img
                                        src="/ALL-IMAGES/customizations.png"
                                        alt="Real-Time Availability"
                                        className="w-[500px] sm:w-[100%]"
                                    />
                                </div>
                            </div>
                        </div>
        </>
    )
}

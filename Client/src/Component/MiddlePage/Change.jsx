import { useState, useEffect } from "react";

export default function Change() {
    const datas = [
        {
            service: "1. Select Service",
            descripion: "Customers can select the required service via the booking link for which they are visiting and proceed further.",
            image: "/ALL-IMAGES/Select-service.png"
        },
        {
            service: "2. Select Preferred Date & Time Slot",
            descripion: "Pick a convenient date and time from the available options for the chosen service.",
            image: "/ALL-IMAGES/select_preferred_date_and_time_slot.png"
        },
        {
            service: "3. Fill the Required Details",
            descripion: "Provide the necessary information such as name, contact details, or any other information needed for the booking.",
            image: "/ALL-IMAGES/fill_in_the_required_details.png"
        },
        {
            service: "4. Booking Confirmed",
            descripion: "Receive confirmation that your appointment is successfully booked and your unique code as a booking ID is 001 containing a self-check-in link.",
            image: "/ALL-IMAGES/booking_confirmed.png"
        },
        {
            service: "5. Get Alerts on Smartphones",
            descripion: "After booking confirmation, the customer will receive notifications on their smartphone, keeping them informed about the booking status or any updates related to the service.",
            image: "/ALL-IMAGES/get_alerts_on_smartphones.png"
        },
    ];

    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true); // Start fade-out animation
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % datas.length);
                setAnimate(false); // Start fade-in animation
            }, 500); // Animation duration (must be less than interval delay)
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col md:flex-row items-center mt-[60px] shadow-[0_-8px_8px_rgba(0,0,0,0.15)] p-5 md:p-10 overflow-hidden">
            {/* Text Content with Animation */}
            <div className={`w-full md:w-[50%] text-center md:text-left flex flex-col items-center md:items-start gap-[20px] transition-all duration-700 ease-in-out ${animate ? 'fade-out' : 'fade-in'}`}>
                <h2 className="font-bold text-[22px] sm:text-[25px] text-[#333333] font-sans">
                    {datas[index].service}
                </h2>
                <p className="w-[90%] sm:w-[450px] font-medium text-[#555555] font-sans text-[15px] sm:text-[16px]">
                    {datas[index].descripion}
                </p>
                <button className="border-solid border-2 border-[#5C4AE4] w-[180px] sm:w-[230px] h-[50px] sm:h-[55px] rounded-[5px] font-semibold text-[17px] sm:text-[19px] text-[#5C4AE4]
                    hover:border-none hover:bg-[#5C4AE4] hover:text-[#eee] mt-[20px] sm:mt-[35px]">
                    Schedule A Demo
                </button>
                <div className="flex gap-2 mt-[50px] sm:mt-[120px] md:ml-[85%]">
                    {datas.map((_, i) => (
                        <span
                            key={i}
                            className={`inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${i === index ? 'bg-[#5C4AE4]' : 'bg-[#C7C0FA]'}`}
                        ></span>
                    ))}
                </div>
            </div>

            {/* Image with Slide Animation */}
            <div className={`w-full md:w-[50%] flex justify-center mt-[30px] md:mt-[20px] transition-all duration-700 ease-in-out ${animate ? 'fade-out' : 'fade-in'}`}>
                <img src={datas[index].image} alt="service-image" className="w-[80%] sm:w-[90%] md:w-full max-w-[400px] sm:max-w-[500px]" />
            </div>
        </div>
    );
}

import List from "../Header/List/List";

export default function BankingUpdate() {
  return (
    <>
      <div className="flex items-center justify-center Centralize shadow-[0_-8px_8px_rgba(0,0,0,0.15)] px-4 sm:px-0 mx-auto">
        {/* Content Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full max-w-[1200px] px-6 sm:px-12 gap-[150px]">
          
          {/* Right Side - Image */}
          <div className="w-full sm:w-1/2 flex justify-center sm:justify-end pt-[50px]">
            <img
              src="/public/ALL-IMAGES/updateBanking.png"
              alt="Real-Time Availability"
              className="w-[100%] sm:w-[100%] object-contain"
            />
          </div>

          {/* Left Side - Text & List */}
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h1 className="text-[28px] sm:text-[32px] font-bold text-[#333333] pt-[80px] mb-[20px]">
              Update the Vistors:
            </h1>

            {/* Added padding below Notify Patients heading */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 text-xl list-none pt-[10px]">
              <List list="Real-time queue monitoring on smart devices." />
              <List list="Transparent updates on the waitlist for banking services." />
              <List list="Receive real-time notifications via SMS or email." />
              <List list="Integration with WhatsApp: Allow customers to get notification alerts directly on WhatsApp." />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

import List from "../Header/List/List"

export default function UpdateCustomer() {
    

    return (
        <>
      <div className="flex items-center justify-center Centralize shadow-[0_-8px_8px_rgba(0,0,0,0.15)] px-4 sm:px-0 mx-auto">
        {/* Content Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full max-w-[1200px] px-6 sm:px-12 gap-[150px]">
          
          {/* Right Side - Image */}
          <div className="w-full sm:w-1/2 flex justify-center sm:justify-end pt-[10px]">
            <img
              src="/ALL-IMAGES/update-the-customers.png"
              alt="update-the-customers"
              className="w-[100%] sm:w-[100%] object-contain"
            />
          </div>

          {/* Left Side - Text & List */}
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h1 className="text-[28px] sm:text-[32px] font-bold text-[#333333] pt-[30px] mb-[20px]">
            Update the Customers:
            </h1>

            {/* Added padding below Notify Patients heading */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px] text-[18px] list-none font-Poppins">
              <List list="Real-time notifications through SMS or email." />
              <List list="Customizable alerts including relevant details about the service." />
              <List list="Digital displays or mobile apps to showcase the current status of the queue." />
              <List list="Transparent retail waitlist updates." />
            </div>
          </div>
        </div>
      </div>
    </>
    )
}



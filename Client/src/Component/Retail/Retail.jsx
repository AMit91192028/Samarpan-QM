
import Button from "../Buttons/Button"
import List from "../Header/List/List"
import UpdateCustomer from "../UpdateCustomer/UpdateCustomer"
import Cloud from "../Cloud/Cloud"
import Advfeature from "../Advfeatures/Advfeature"
import Reducewait from "../ReduceWaitTime/Reducewait"
import Manageretail from "../ManageRetail/Manageratail"
import Boostsales from "../Bosstsales/Boostsales"
import Customerloyality from "../CustomerLoyality/Customerloyality"
import Setupcost from "../SetupCost/Setupcost"
import RetailQadv from "../RetailQadv/RetailQadv"
import Empower from "../Empower/Empower"
import RetailFAQ from "../FrequentlyAskQue/RetailFAQ"
import Futureretail from "../FutureRetail/Futureretail"

export default function Retail() {
    

    return (
        <>
            <div className="bg-[url('/ALL-IMAGES/health-banner-bg.png')] bg-no-repeat bg-cover w-full py-12 flex flex-col sm:flex-row items-center justify-center gap-8 rounded-md shadow-md p-8 sm:pl-[150px] sm:pr-[150px] px-4">
              {/* Left Side: Text and Buttons */}
              <div className="flex-1 text-center sm:text-left">
                <h1 className="text-[35px] sm:text-[60px] font-bold text-[#000000] mb-4 leading-[75px]">
                Retail Queue Management System
                </h1>
                <p className="text-[14px] sm:text-[16px] text-[#555555] font-serif font-Poppins font-normal mb-6">
                Transform your customer shopping experience and let Qwaiting set a new standard for retail excellence that drives more sales for your brand.
                </p>
               
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button buttonText="Start Your Free Trial" width={250} />
                  <Button buttonText="Solutions" width={200} />
                </div>
              </div>
            
              {/* Right Side: Image (Unchanged for PC) */}
              <div className="flex-1 flex justify-center">
                <img
                  src="/ALL-IMAGES/retail-queue-management-system.png"
                  alt="retail-queue-management-system"
                  className="w-[300px] sm:w-[600px] rounded-[5px]"
                />
              </div>
            </div>
            <div className="mt-[100px] flex flex-col justify-center items-center">
                <div className="border-[2px] border-[#000000] border-solid w-[180px]"></div>
                <h1 className="mt-[20px] text-[35px] text-[#000000] font-Poppins font-sans font-bold w-[100%] text-center">
                Crowd-free Welcome to Your Store with Retail Digital Solutions
                </h1>
                <p className="text-center w-[40%] mt-[10px] text-[17px] font-Poppins font-sans text-[#555555] font-[400px]">
                Our system is capable of organizing appointments, 
                managing queues and monitoring the number of people in the retail store. 
                We have helped thousands of businesses in transforming the shopping experience for their customers.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-[60px] wait-book shadow-[0_-8px_8px_rgba(0,0,0,0.15)] px-4 sm:px-0">
              <div className="flex mt-[40px] justify-around gap-[40px]">
                <div className="w-[60%]">
                  <h1 className="text-[32px] font-bold font-Poppins pl-[10px]">Customer Check-in:</h1>
                  <div className="mt-[30px] grid grid-cols-2 gap-8 ml-[8px]">
                    <List list="Choose between walk-in or online check-in options."/>
                    <List list="Make a selection: either use a kiosk or scan the QR code."/>
                    <List list="Quick data entry."/>
                    <List list="Automatically generate a unique ticket ID."/>
                  </div>
                </div>
                <div className="w-[40%] pr-[60px]">
                  <img src="/ALL-IMAGES/customer-check-in.png" alt="customer-check" />
                </div>
              </div>
            </div>
            <div className="mt-[120px]">
            <UpdateCustomer/>
            </div>
          {/* QUICK SERVICE SECTION */}
          <div className="flex flex-col items-center justify-center mt-[60px] wait-book shadow-[0_-8px_8px_rgba(0,0,0,0.15)] px-4 sm:px-0">
              <div className="flex mt-[40px] justify-around gap-[40px]">
                <div className="w-[60%]">
                  <h1 className="text-[32px] font-bold font-Poppins pl-[10px]">Quick Service:</h1>
                  <div className="mt-[30px] grid grid-cols-2 gap-8 ml-[8px]">
                    <List list="Efficient queue management: Customers come as per their turn."/>
                    <List list="Payment convenience."/>
                    <List list="Process retail bills or invoices."/>
                    <List list="Closure and feedback."/>
                  </div>
                </div>
                <div className="w-[40%] pr-[60px]">
                  <img src="/ALL-IMAGES/quick-service.png" alt="quick-service" />
                </div>
              </div>
            </div>
            {/* CLOUD BASED APPROACH */}
            <div>
            <Cloud/>
            </div>

            {/* ADVANCE FEATURE OF RETAIL SYSTEM */}
            <div>
              <Advfeature/>
            </div>

            <div className="text-center mt-[50px]">
          <div className="w-[190px] h-1 bg-black mx-auto mb-2"></div>
          <h2 className="text-4xl font-bold leading-snug font-Poppins font-sans">
          Supercharge Your Retail Business
          </h2>
        </div>

        {/* REDUCE WAIT SECTION */}

        <div>
          <Reducewait/>
        </div>
        {/* RETAIL MANAGEMENT SECTION */}
        <div>
          <Manageretail/>
        </div>
        {/* BOOST SALES AND GENERATE MORE REVENUE SECTION */}
        <div className="mt-[10px]">
          <Boostsales/>
        </div>
        {/* CUSTOMER LOYALITY SECTION */}
        <div className="mt-[15px]">
          <Customerloyality/>
        </div>

        {/* EASY LOSS SECTION */}

        <div className="mt-[10px]">
          <Setupcost/>
        </div>

        <div className="mt-[100px] flex flex-col justify-center items-center">
                <div className="border-[2px] border-[#000000] border-solid w-[180px]"></div>
                <h1 className="mt-[20px] text-[35px] text-[#000000] font-Poppins font-sans font-bold w-[100%] text-center">
                Where We Can Use Retail Queue System?
                </h1>
            </div>

            {/* WHERE WE USE RETAIL QUEUE SYSTEM */}
            <div className="mt-[30px]">
              <RetailQadv/>
            </div>
            <div className="mt-[50px] flex flex-col justify-center items-center">
                <div className="border-[2px] border-[#000000] border-solid w-[180px]"></div>
                <h1 className="mt-[20px] text-[35px] text-[#000000] font-Poppins font-sans font-bold w-[59%] text-center">
                Empower Your Customers to Wait Wherever They Want With Qwaiting Solutions
                </h1>
            </div>

         {/* EMPOWER SECTION */}
         <div>
          <Empower/>
         </div>
         {/* FREQUENTLY ASKED QUESTION SECTION */}
         <div>
          <RetailFAQ/>
         </div>
         {/* FUTURE RETAIL SECTION */}
         <div>
          <Futureretail/>
         </div>
        </>
    )
}

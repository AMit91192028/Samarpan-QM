// import React from 'react'

import List from "./List/List";
import Button from "../Buttons/Button";
import  Change  from "../MiddlePage/Change";
import Cloud from '../Cloud/Cloud'
import Card from "../Card/Card";
import  Benefits  from "../Benefits/Benefits";
import  Centralized  from "../CentralizedInfo/Centralized";
import AutoService from "../AutomatedService/AutoService";
import Cusexp from "../CustomerExperience/Cusexp";
import Custombook from "../CustomizeBooking/Custombook";
import QueueEzy from "../QueueEzy/QueueEzy";
import Ysamarpan from "../Ysamarpan/Ysamarpan"

export default function Header() {
  return (
    <>
      {/* Header Section */}
      <div className="bg-[url('/ALL-IMAGES/health-banner-bg.png')] bg-no-repeat bg-cover w-full py-12 flex flex-col sm:flex-row items-center justify-center gap-8 rounded-md shadow-md p-8 sm:pl-[150px] sm:pr-[150px] px-4">
  {/* Left Side: Text and Buttons */}
  <div className="flex-1 text-center sm:text-left">
    <h1 className="text-[35px] sm:text-[60px] font-bold text-gray-800 mb-4">
      Appointment Scheduling Software
    </h1>
    <p className="text-[14px] sm:text-[16px] text-[#555555] font-serif mb-6">
      Our advanced appointment scheduling software simplifies booking for your customers.
      With automatic updates to your calendar and alerts to your customers,
      you always stay up to date and offer your customers maximum convenience.
    </p>
    <ul className="mb-6 space-y-2">
      <List list="Easy Booking Process" />
      <List list="Automatic Calendar Updates" />
      <List list="Customer Alerts & Reminders" />
    </ul>
    <div className="flex flex-col sm:flex-row gap-4">
      <Button buttonText="Start Your Free Trial" width={250} />
      <Button buttonText="Contact Us" width={200} />
    </div>
  </div>

  {/* Right Side: Image (Unchanged for PC) */}
  <div className="flex-1 flex justify-center">
    <img
      src="/ALL-IMAGES/appointment-scheduling.jpg"
      alt="Appointment Scheduling Software"
      className="w-[300px] sm:w-[600px] rounded-[5px]"
    />
  </div>
</div>
{/* below code for Skip the Wait-Book Appointments Online in Seconds */}

<div className="flex flex-col sm:flex-row flex-1 mt-[60px] wait-book shadow-[0_-8px_8px_rgba(0,0,0,0.15)] px-4 sm:px-0">
  {/* Left Side: Image */}
  <div className="w-full sm:w-[50%] flex justify-center sm:justify-start mt-[20px]">
    <img src="/ALL-IMAGES/Skip-wait.png" alt="Skip the Wait" className="w-[80%] sm:w-auto" />
  </div>

  {/* Right Side: Text and Content */}
  <div className="w-full sm:w-[50%] text-center sm:text-left px-2 sm:px-0">
    <h2 className="font-bold text-[25px] sm:text-[35px] mt-[20px]">
      Skip the Wait - Book Appointments Online in Seconds
    </h2>
    <p className="text-[#555555] text-[14px] sm:text-[16px] font-serif mt-[15px] leading-[25px]">
      Qwaiting is a cloud-based meeting booking software that helps manage appointments easily. 
      It improves the customer experience by reducing wait times and overcrowded waiting areas. 
      Customers can easily book, reschedule, or cancel appointments anytime, 
      saving time and improving task management.
    </p>

    <ul className="mt-4">
      <h3 className="font-bold text-[#333333] mt-[8px] text-[20px] sm:text-[25px] font-sans">
        Improve Your Organizations Workflow:
      </h3>

      <div className="mt-[10px] text-[#7f7f7f] space-y-2">
        <List list="Analyze real-time updates with detailed reports." />
        <List list="Customize your system to fit your needs." />
        <List list="Keep customers and staff on track." />
        <List list="Customized interface for quick access to key information." />
        <List list="Integrate with other systems to simplify operations and boost productivity." />
      </div>
    </ul>

    {/* Button Centered for Mobile */}
    <div className="flex justify-center sm:justify-start mt-4">
      <Button buttonText="Get Free Trial" width={200} />
    </div>
  </div>
</div>

      <div className="w-full mt-[70px] flex flex-col items-center text-center">
     <p className="font-bold text-[32px] textFamily text-[#5C4AE4] w-[250px]">
    How it Works?
    </p>
  <h3 className="font-bold text-[32px] text-[#333333] max-w-[500px] textFamily">
    Experience the Magic of Online Booking - Secure, Simple, and Fast.
  </h3>
</div>



{/* MIDDLE PART */}
      <div>
        <Change/>
      </div>

      {/* Cloud-Based-Component */}

      <div>
        <Cloud/>
      </div>

      {/* CORE FUNCTIONS */}

      <div>
  <div className="border-2 border-[#333333] mt-[50px] sm:mt-[70px] w-[10rem] sm:w-[12rem] mx-auto"></div>
  <h1 className="text-center mt-[20px] sm:mt-[23px] text-[24px] sm:text-[35px] text-[#000000] font-bold font-Poppins px-4">
    Core Functions of Appointment Scheduling Software
  </h1>
  <div className="flex flex-wrap w-full justify-center gap-4 mt-[50px] sm:mt-[100px] px-4">
    <div className="flex flex-col sm:flex-row w-full justify-center gap-[55px] sm:gap-[15px] sm:mt-[0]">
      <Card 
        feature="Appointment Booking and Scheduling" 
        image="/ALL-IMAGES/appointment_booking-1.svg" 
        lists={["Customer-Preferred Scheduling", "Flexible Appointment Timing", "Smooth Booking Experience"]}
      />
      <Card 
        feature="Calender Synchronization" 
        image="/ALL-IMAGES/calendar_synchronization-2.svg" 
        lists={["Google Calendar Integration", "Personal and Professional Balance", "Real-Time Schedule Syncing"]}
      />
      <Card 
        feature="Send Reminders" 
        image="/ALL-IMAGES/send_reminders-3.svg" 
        lists={["Automated Reminder Alerts", "Email/SMS Notifications", "Eliminates The Risk of No-Shows"]}
      />
    </div>
    <div className="flex flex-col sm:flex-row w-full justify-center gap-[55px] sm:gap-[15px]  mt-[40px] sm:mt-[70px]">
      <Card 
        feature="Fully Secured System" 
        image="/ALL-IMAGES/fully_secured_system-4.svg" 
        lists={["Data Encryption Protection", "Secure Information Storage", "Privacy Assurance Guaranteed"]}
      />
      <Card 
        feature="Integrated with Strong APIs" 
        image="/ALL-IMAGES/integrated_with_strong_APIs-5.svg" 
        lists={["Third-Party API Integration", "Flexible System Customization", "Improved User Experience"]}
      />
      <Card 
        feature="Real-time Data Analysis" 
        image="/ALL-IMAGES/real_time_data_analysis-6.svg" 
        lists={["Instant Data Insights", "Customizable Dashboard", "Improved Workflow Efficiency"]}
      />
    </div>
  </div>
</div>


{/* Benefits Section*/}

    <div>
    <Benefits/>
    </div>
    <div>
      <Centralized/>
    </div>
    {/* AutoService Section */}
    <div>
      <AutoService/>
    </div>
    {/* Customer Experience Section */}

    <div>
      <Cusexp/>
    </div>
    {/* customize booking section */}
    <div>
      <Custombook/>
    </div>
    {/* simplyfy queue management for every sector */}

    <div className="mt-[30px]">
      <QueueEzy/>
    </div>
    {/* WHY SAMARPAN SECTION */}
    <div>
      <Ysamarpan/>
    </div>
  
    </>
  );
}

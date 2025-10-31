import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
// import Header from "./Component/Header/Header.jsx";
import Retail from "./Component/Retail/Retail.jsx";
import Layout from "./Component/Layout/Layout.jsx";
import HealthCareSection from "./Component/HealthCareSection/HealthCareSection.jsx";
import Banking from "./Component/Banking/Banking.jsx";

import Login from "./Component/Signup/Login.jsx";
import Admindash from "./Component/Dashboards/Admindash.jsx";
import Userdash from"./Component/Dashboards/Userdash.jsx";
import BookAppointment from"./UserBookAppointment/BookAppointment.jsx"
import SignUp from "./Component/Signup/SignUp.jsx";
import OTPVerification from "./Component/OTPverification/OTPVerification.jsx";
 import PrivateRoute from "./Component/PrivateRoute/PrivateRoute.jsx"
import OTPProtectedRoute from "./Component/PrivateRoute/OTPProtectedRoute.jsx";
import UserBookingCnfOTP from "./Component/OTPverification/UserBookingCnfOTP.jsx";
import HospitalRoutersallcode from"./Component/HospitalADDINGforsiteMEMBER/HospitalRoutersallcode.jsx"
import QueueManagement from "./Component/QueuePageforUser/QueueManagement.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '' element ={<Layout/>}>
    <Route path="/" element={<App />}/>
    <Route path="/sign" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/verify-otp" element={ <OTPProtectedRoute>
            <OTPVerification />
          </OTPProtectedRoute>}/>
    
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admindash />
              </PrivateRoute>
            }
          />
   <Route  path="/user" element={<PrivateRoute><Userdash/></PrivateRoute>} />
  <Route path="/bookDr" element={<BookAppointment/>}/>
  <Route  path="/Booking-Verfy" element={<UserBookingCnfOTP/>} />
    {/* <Route path="/header" element={<Header/>}/> */}
    {/* <Route path="/retail" element={<Retail/>}/> */}
    <Route path="/hospitalRoutes" element={<HospitalRoutersallcode/>} />
    <Route path="/queuestatus" element={<PrivateRoute><QueueManagement/></PrivateRoute>}/> 
    <Route path="/retail" element={<Retail />} />
    <Route path="/banking" element={<Banking/>} />
    <Route path="/healthcare" element={<HealthCareSection/>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <RouterProvider router={router} />
    
  </StrictMode>
);

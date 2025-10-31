import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbaar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

export default function Layout() {
  const location = useLocation();

  // Routes where Navbar and Footer should be hidden
  const hideLayoutRoutes = ["/admin","/user","/Booking-Verfy","/queuestatus","/login","/sign","/bookDr","/hospitalRoutes","/verify-otp"];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {!shouldHideLayout && <Navbar />}
      <Outlet />
      {!shouldHideLayout && <Footer />}
    </>
  );
}

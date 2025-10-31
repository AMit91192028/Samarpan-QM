import HealthCare from "../HealthCare/HealthCare";
import UserFriendly from "../UserFriendly/UserFriendly";
import EnhanceSer from "../EnhanceService/EnhanceService";
import PatientFdbck from "../PatientFeedback/PatientFeedback";
import VarifiedApp from "../VarifiedApplication/VarifiedApp";
import Customization from "../Customization/Customization";
import Empower from "../Empower/Empower"
import HospitalCheckin from "../Streamline/Streamline";
import NotifyPatient from "../NotifyPatient/NotifyPatient";
import GiveService from "../GiveService/GiveService";
import Features from "../Features/Features";
import HealthBanefits from "../HealthCareBanefits/HealthBanefits";
import HealthCloud from "../HealthCareCloud/HealthCloud";
import HealthCareExp from "../HealthCareExp/HealthCareExp";
import FAQ from "../FrequentlyQues/FrequentlyQues";

export default function HealthCareSection() {
  return (
    <>
      <HealthCare />
      <HospitalCheckin />
      <NotifyPatient />
      <GiveService />
      <HealthCloud />
      <Features />
      <HealthBanefits />
      <Customization />
      <UserFriendly />
      <EnhanceSer />
      <PatientFdbck />
      <VarifiedApp />
      <Empower />
      <FAQ />
      <HealthCareExp />
    </>
  );
}

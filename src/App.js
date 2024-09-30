import React from "react";
import Header from "./Component/Header/header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer/footer";
import About from "./Pages/About/About";
import Home from "./Component/Home/Home";
import BulkSmsPromotion from "./Pages/BulkSms/BulkSmsPromotion";
import BulkSMSTransactions from "./Pages/BulkSMSTransactions/BulkSMSTransactions";
import OtpSms from "./Pages/OtpSms/OtpSms";
import WhatsappSms from "./Pages/WhatsappSms/WhatsappSms";
import VoiceCall from "./Pages/VoiceCall/VoiceCall";
import IvrServices from "./Pages/IvrServices/IvrServices";
import WebsiteDesigning from "./Pages/websiteDesigning/websiteDesigning";
import InternationalSMS from "./Pages/InternationalSMS/InternationalSMS";
import Contact from "./Component/Contact/Contact";
import Seo from "./Pages/Seo/Seo";
import Smo from "./Pages/Smo/Smo";
import EmailMarketing from "./Pages/EmailMarketing/EmailMarketing";
import MobileDatabase from "./Pages/MobileDatabase/MobileDatabase";
import DLT from "./Pages/DLT/DLT";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bulk-sms-promotion" element={<BulkSmsPromotion />} />
          <Route
            path="/bulk-sms-transaction"
            element={<BulkSMSTransactions />}
          />
          <Route path="/otp-sms" element={<OtpSms />} />
          <Route path="/whatsapp-bulk-sms" element={<WhatsappSms />} />
          <Route path="/voice-call" element={<VoiceCall />} />
          <Route path="/ivr-services" element={<IvrServices />} />
          <Route path="/website-designing" element={<WebsiteDesigning />} />
          <Route path="/international-sms" element={<InternationalSMS />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/search-engine-optimization" element={<Seo />} />
          <Route path="/social-media-optimization-smo" element={<Smo />} />
          <Route path="/social-media-optimization-smo" element={<Smo />} />
          <Route path="/email-marketing" element={<EmailMarketing />} />
          <Route path="/mobile-database" element={<MobileDatabase />} />
          <Route path="/dlt" element={<DLT />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

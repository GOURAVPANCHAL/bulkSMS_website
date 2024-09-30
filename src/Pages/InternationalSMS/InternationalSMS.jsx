import React, { useEffect } from "react";
import internationalImage from "../../images/International-Bulk-SMS-Provider.png";
import RequestDemo from "../RequestDemo/RequestDemo";

import img1 from "../../images/international1.png";
import img2 from "../../images/international2.png";
import img3 from "../../images/international3.png";
import img4 from "../../images/international4.png";
import img5 from "../../images/international5.png";
import img6 from "../../images/international6.png";
import img7 from "../../images/international7.png";
import img8 from "../../images/international8.png";
import { Helmet } from "react-helmet";
const InternationalSMS = () => {
  useEffect(() => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  });
  return (
    <>
      <Helmet>
        <title>
          International Bulk SMS Provider | Global SMS Marketing Services
        </title>
        <meta
          name="description"
          content="Reach a global audience with our international bulk SMS services. Expand your business reach with reliable, secure, and scalable SMS solutions."
        />
        <meta
          name="keywords"
          content="international bulk sms, global sms marketing, sms gateway, international sms provider, sms api, vernacular messaging, payment collections"
        />
      </Helmet>
      <section className="page-title  text-center py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h1 className="title grad-text">International SMS Services</h1>
              <div className="loader-line"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-md-4">
              <img
                src={internationalImage}
                className="w-100"
                alt="international Bulk SMS"
              />
            </div>
            <div className="col-md-8">
              <p className="heading mb-3">International Bulk SMS Provider</p>
              <p className="mb-3">
                Use our International BULK SMS Gateway and elevate your business
                reach and customer engagement at the global level. Our extensive
                reach, superior connectivity and automatic message routing
                ensures your business can keep up with the competition.
              </p>
              <p>
                With smartphones and the internet becoming an integral part of
                people’s lives, SMS marketing with a personal touch has become a
                major success in the recent past. The service is used by many
                brands in various industries such as Healthcare, Retail,
                E-commerce, Banking, CRM, SAAS, FinTech, EdTech, Manufacturing,
                FMCG, and large brands, where the key objective is to deliver
                messaging successfully across boundaries.
              </p>
            </div>
          </div>
          <div className="text-center mt-5">
            <p className="title grad-text">
              Why Opt for International Bulk SMS Marketing?
            </p>
            <p>
              Leverage our dedicated and reliable AI platform which helps to
              facilitate the process from conversations to conversions.
            </p>
          </div>
          <div className="row py-5">
            <div className="col-md-3 col-6 mb-3">
              <div className="text-center international-card">
                <img src={img1} className="mb-5" alt="international bulk sms" />
                <p>Engage with your subscribers</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="text-center international-card">
                <img src={img2} className="mb-5" alt="international bulk sms" />
                <p>Engage with your subscribers</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="text-center international-card">
                <img src={img3} className="mb-5" alt="international bulk sms" />
                <p>Personalized & More Customised Interaction</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="text-center international-card">
                <img src={img4} className="mb-5" alt="international bulk sms" />
                <p>Easy & Reliable Customer Feedback</p>
              </div>
            </div>
            <div className="text-center mt-5 mb-5">
              <p className="heading">
                Features of our International Bulk SMS Gateway
              </p>
              <p>
                Mtalkz provides multiple messaging solutions and International
                Messaging Services as per the requirements. Text SMS, Voice SMS,
                Missed Call Services & WhatsApp Notification can be the key
                ideas while you are planning to engage your overseas customers.
              </p>
            </div>
            <div className="col-md-3 mb-3">
              <div className="international-card text-center">
                <img src={img5} alt="international" />
                <p className="heading-voicecall-card">Integrations</p>
                <p>
                  Our International SMS API can integrate seamlessly with your
                  CRM/ERP system and send notifications across the world.
                </p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="international-card text-center">
                <img src={img6} alt="international" />
                <p className="heading-voicecall-card">Secure and scalable</p>
                <p>
                  With a reliable, scalable, and secure infrastructure in place,
                  your business can grow operations at a greater speed while
                  reducing risks and costs.
                </p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="international-card text-center">
                <img src={img7} alt="international" />
                <p className="heading-voicecall-card">Vernacular Messaging</p>
                <p>
                  Use the language that your customers want to listen, we
                  support more than 100 language options in Mtalkz gateways.
                </p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="international-card text-center">
                <img src={img8} alt="international" />
                <p className="heading-voicecall-card">Payment Collections</p>
                <p>
                  Send preconfigured payment links, let your customers pay
                  anywhere through our payment linking technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RequestDemo />
    </>
  );
};

export default InternationalSMS;

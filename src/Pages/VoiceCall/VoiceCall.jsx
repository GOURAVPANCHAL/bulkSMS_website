import React, { useEffect } from "react";
import voicecall from "../../images/voiceCall.jpg";
import voicecall2 from "../../images/bulk-voice-call-service.png";

import voice1 from "../../images/v-api1.png";
import voice2 from "../../images/v-api2.png";
import voice3 from "../../images/v-api3.png";
import voice4 from "../../images/v-api4.png";
import voice5 from "../../images/v-api5.png";
import voice6 from "../../images/v-api6.png";
import voice7 from "../../images/v-api7.png";
import voice8 from "../../images/v-api8.png";
import { Helmet } from "react-helmet";

const VoiceCall = () => {
  useEffect(() => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  });
  return (
    <>
      <Helmet>
        <title>Voice Call Services | Promotion Ki Duniya</title>
        <meta
          name="description"
          content="Reach to your audience with Transactional Voice calls. Create & execute successful voice call campaigns with just a few clicks."
        />
        <meta
          name="keywords"
          content="Voice Call, Bulk Voice Call, IVR, OTP SMS, Business Promotion"
        />
      </Helmet>
      <section className="page-title text-center py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h1 className="title grad-text">Voice Call</h1>
              <div className="loader-line"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="heading mb-3">Voice Call Campaigns</div>
          <p>Reach to your audience with Transactional Voice calls</p>
          <p>
            Record customized voice messages and send them to your targeted
            audience with our easy-to-use platform.
          </p>

          <div className="mb-5">
            <img src={voicecall} className="w-100" alt="Bulk SMS" />
          </div>

          <div className="text-center">
            <p className="heading grad-text">
              SIMPLE AND PERFECT BUSINESS (Better information, motivation, and
              control with Best IVR Service Provider)
            </p>
            <p className="mb-5">
              Create & execute successful voice call campaigns with just a few
              clicks.
            </p>
            <p>
              We help you connect to your audience with voice call services.
              Easily record voice calls via an automated online system and send
              them to your customers anywhere in India. Promotion Ki Duniya provides you
              with a fully featured online control panel. No need to depend on
              operators or reminders to dial the call. Once the system is
              installed, record your voice message, upload the contact list, and
              the rest is done. Our system will call the customers as scheduled.
            </p>
          </div>

          <div className="py-5">
            <div className="text-center">
              <div className="heading-voicecall-card grad-text">
                What is Voice Call Service?
              </div>
              <p>Easy to record, send, and manage voice calls.</p>
            </div>
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-md-6">
                <p>
                  Voice call services help you to reach customers easily with
                  pre-recorded messages. Create your voice message and automate
                  the calling process with just a few clicks. Easily manage and
                  keep records of calls through bulk voice calling service. Use
                  our services to send important information like:
                </p>
                <ul className="list-content">
                  <li>
                    <i className="tick bi bi-check2-all"></i> Alerts/reminders
                  </li>
                  <li>
                    <i className="tick bi bi-check2-all"></i> Business promotion
                  </li>
                  <li>
                    <i className="tick bi bi-check2-all"></i> Latest offers and
                    deals
                  </li>
                  <li>
                    <i className="tick bi bi-check2-all"></i> Social campaigns
                  </li>
                  <li>
                    <i className="tick bi bi-check2-all"></i> Customer surveys
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <div>
                  <img
                    src={voicecall2}
                    className="w-100"
                    alt="Voice Call Service"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="heading mb-5">
            Have The Best Authentication System With Our OTP SMS At Nimbus IT
            Solutions
          </div>
          <p>
            OTP or One Time Password is an innovative security protocol where a
            single-use password will be generated to the registered mobile
            number of the user, helping them access their requirement
            authenticated. By adopting this OTP strategy, you can improve
            security for the site as well. It is a two-way authentication
            process that further assures protection of users' digital identity.
          </p>

          <p className="heading">
            Welcome to the leading destination to have OTP SMS
          </p>
          <p>
            Promotion Ki Duniya is one of the country’s leading platforms where
            you can find the best campaign to generate OTP messages. We assure
            you that the SMS will reach the users instantly without any delays.
            Also, the data of the customers will be safe with two-way
            authentication factor. Moreover, we help you track the delivery of
            OTP SMSs and provide extraordinary support at any time.
          </p>
          <p className="heading">How will businesses use OTP verification?</p>
          <ul>
            <li className="mb-3">
              <b>Authentication:</b> It adds an additional layer of security to
              websites and apps without increasing complexity for users.
              Understand it to authenticate the registration with OTP
              verification.
            </li>
            <li className="mb-3">
              <b>Transaction validation:</b> Securely validate financial
              transactions. Add another layer of security with OTP verification
              to complete transactions authentically.
            </li>
            <li className="mb-3">
              <b>Authorization:</b> Whether it's account deletion, activation,
              or restoration, use OTP verification for secure client data
              handling. Resetting the OTP service to verify users before
              resetting the password is more effective than sending a
              verification email link.
            </li>
            <li className="mb-3">
              <b>Reactivation:</b> Activate the client account through
              confirmation, meaning the client is authenticating with the
              businessman’s permission.
            </li>
          </ul>

          <p className="heading">Major industries we serve</p>
          <ul>
            <li className="mb-3">
              <b>Banking sector:</b> Banking needs authentication extensively,
              especially for transactions and services. We provide OTP SMS
              services for secure financial operations.
            </li>
            <li className="mb-3">
              <b>Shipping companies:</b> OTP helps confirm the successful
              creation of shipping orders and payment receipt.
            </li>
            <li className="mb-3">
              <b>E-commerce platforms:</b> Ecommerce uses OTP for payment
              authentication and ensures the order's security.
            </li>
            <li className="mb-3">
              <b>Web portals:</b> Web portals use OTP to authenticate phone
              numbers, aiding digital marketing.
            </li>
          </ul>

          <p className="heading">Types of OTP services we offer</p>
          <ul>
            <li className="mb-3">
              <b>SMS OTP service:</b> Send OTP to customers via SMS. We offer
              reliable OTP services with high deliverability and low latency.
            </li>
            <li className="mb-3">
              <b>Voice OTP service:</b> Verify customers using voice OTPs. These
              are automatically generated voice calls that play a sequence of
              digits, which customers must enter manually.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container text-center mt-5">
          <p className="title grad-text">
            Send Fast Voice OTP Service or substitute it for SMS failure
          </p>
          <div className="loader-line"></div>
          <p>An effective mode of communication for client interaction</p>

          <div className="row">
            <div className="col-md-3">
              <div className="whatsapp-box">
                <img src={voice1} alt="Promotion Ki Duniya" />
                <div className="heading-voicecall-card mb-3">
                  Voice call IVR
                </div>
                <p>
                  Send voice ads and pre-recorded messages in customized
                  language through bulk voice call IVR.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="whatsapp-box">
                <img src={voice2} alt="Promotion Ki Duniya" />
                <div className="heading-voicecall-card mb-3">
                  Auto redialing not answered calls
                </div>
                <p>
                  Voice call auto-dialing features boost higher penetration with
                  maximum successful calls.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="whatsapp-box">
                <img src={voice3} alt="Promotion Ki Duniya" />
                <div className="heading-voicecall-card mb-3">
                  Voice call API
                </div>
                <p>
                  Send voice calls programmatically through your application
                  using our easy-to-use voice call APIs.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="whatsapp-box">
                <img src={voice4} alt="Promotion Ki Duniya" />
                <div className="heading-voicecall-card mb-3">
                  Customize voice in different languages
                </div>
                <p>
                  Engage users in their preferred language with multi-lingual
                  support for voice calls.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-3">
              <div className="whatsapp-box">
                <img src={voice5} alt="Promotion Ki Duniya" />
                <div className="heading-voicecall-card mb-3">
                  Voice broadcasting for sales promotion
                </div>
                <p>
                  Use voice broadcasting for sending promotions to a larger
                  audience.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="whatsapp-box">
                <img src={voice6} alt="Promotion Ki Duniya" />
                <div className="heading-voicecall-card mb-3">
                  Voice OTP for 2FA
                </div>
                <p>
                  Ensure authentication with a second factor of voice OTP for
                  higher security.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="whatsapp-box">
                <img src={voice7} alt="Promotion Ki Duniya" />
                <div className="heading-voicecall-card mb-3">
                  IVR to interact with customers
                </div>
                <p>
                  Use IVR systems to gather customer responses or route calls to
                  appropriate teams.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="whatsapp-box">
                <img src={voice8} alt="Promotion Ki Duniya" />
                <div className="heading-voicecall-card mb-3">
                  Voice OTP for quick updates
                </div>
                <p>
                  Send instant OTP updates via voice for real-time verification
                  without delays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VoiceCall;

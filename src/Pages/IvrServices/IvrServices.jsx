import React, { useEffect } from "react";
import RequestDemo from "../RequestDemo/RequestDemo";

import ivr1 from "../../images/ivr1.png";
import ivr2 from "../../images/ivr2.png";
import ivr3 from "../../images/ivr3.png";
import ivr4 from "../../images/ivr4.png";
import { Helmet } from "react-helmet";

const IvrServices = () => {
  useEffect(() => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  });
  return (
    <>
      <Helmet>
        <title>IVR Services | Your Company Name</title>
        <meta
          name="description"
          content="Learn about the IVR services we offer, including auto dialers, missed call services, toll-free numbers, and bulk voice calls."
        />
        <meta
          name="keywords"
          content="IVR, auto dialer, missed call services, toll-free, bulk voice calls, IVR provider India"
        />
      </Helmet>
      <section className="page-title text-center py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h1 className="title grad-text">IVR Services</h1>
              <div className="loader-line"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row align-items-center">
            <p>
              SIMPLE AND PERFECT BUSINESS (Better information, motivation, and
              control with the Best IVR Service Provider)
            </p>
            <div className="col-md-12">
              <h2 className="heading">What is IVR?</h2>
              <p>
                Interactive voice response (IVR) allows callers to interact with
                a computer-operated phone system using voice recognition and
                DTMF input via a keypad. An IVR system plays a pre-recorded
                voice prompting users to press digits to select options.
              </p>

              <h2 className="heading">IVR Service Provider in India</h2>
              <p>
                Every firm wishes to have a large customer base, which
                inevitably leads to high phone call volumes. IVR systems
                simplify call routing by handling basic interactions and
                directing callers to the appropriate agents when needed. Our IVR
                solutions reduce phone call costs while enhancing client service
                and marketing strategies.
              </p>

              <section className="text-center mt-5">
                <h2 className="title grad-text">
                  IVR Service Provider in India
                </h2>
                <div className="loader-line"></div>

                <div className="row mt-5">
                  <div className="col-md-3">
                    <div className="whatsapp-box">
                      <img
                        src={ivr1}
                        className="w-50 mb-3"
                        alt="Auto Dialer Services"
                      />
                      <h3 className="heading mb-3">Auto Dialer Services</h3>
                      <p>
                        Improve your contact center's efficiency and maintain a
                        high level of utilization with our auto dialers for
                        sales and lead generation.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="whatsapp-box">
                      <img
                        src={ivr2}
                        className="w-50 mb-3"
                        alt="Missed Call Services"
                      />
                      <h3 className="heading mb-3">Missed Call Services</h3>
                      <p>
                        Let your customers reach you with a missed call, helping
                        in lead generation, surveys, voting, and campaigns.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="whatsapp-box">
                      <img
                        src={ivr3}
                        className="w-50 mb-3"
                        alt="Toll-Free Service"
                      />
                      <h3 className="heading mb-3">Toll-Free Service</h3>
                      <p>
                        Our toll-free numbers provide positive branding and are
                        portable as per your business requirements.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="whatsapp-box">
                      <img
                        src={ivr4}
                        className="w-50 mb-3"
                        alt="Bulk Voice Calls"
                      />
                      <h3 className="heading mb-3">Bulk Voice Calls</h3>
                      <p>
                        Grow your business with our affordable bulk voice SMS
                        and voice call services.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <p className="grad-text text-center mt-5">
              Choose the best plan as per your need
            </p>
            <p>
              IVR technology allows computers to interact with people through
              DTMF tones and voice input. We are one of the leading IVR service
              providers in India, offering customizable and scalable IVR
              systems.
            </p>

            <h2 className="grad-text text-center mt-5">
              Advantages of IVR Services
            </h2>
            <ul className="features">
              <li>
                <i class="bi bi-arrow-right-circle tick"></i> Increased
                marketing and lead management proficiency.
              </li>
              <li>
                <i class="bi bi-arrow-right-circle tick"></i> Centralized
                opportunity tracking in a single database.
              </li>
              <li>
                <i class="bi bi-arrow-right-circle tick"></i> Better management
                of leads and sales lifecycle.
              </li>
              <li>
                <i class="bi bi-arrow-right-circle tick"></i> Enhanced control
                over business operations.
              </li>
              <li>
                <i class="bi bi-arrow-right-circle tick"></i> Streamlined
                business communication.
              </li>
              <li>
                <i class="bi bi-arrow-right-circle tick"></i> Reduced support
                request costs through automated feedback.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <RequestDemo />
    </>
  );
};

export default IvrServices;

import React, { useEffect } from "react";
import WhatsApp from "../../images/WhatsApp.jpg";
import "../WhatsappSms/whatsapp.css";
import whatsapp1 from "../../images/E-commerce-icon.png";
import whatsapp2 from "../../images/Healthcare-icon.png";
import whatsapp3 from "../../images/education.png";
import whatsapp4 from "../../images/banking-icon.png";
import whatsapp5 from "../../images/school.png";
import whatsapp6 from "../../images/Retail-Outlets.png";
import RequestDemo from "../RequestDemo/RequestDemo";

import step1 from "../../images/step1-sms.png";
import step2 from "../../images/step2-sms.png";
import step3 from "../../images/step3-sms.png";
import { Helmet } from "react-helmet";

const WhatsappSms = () => {
  useEffect(() => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  });
  return (
    <>
      <Helmet>
        <title>Bulk SMS on WhatsApp - Promotion Ki Duniya</title>
        <meta
          name="description"
          content="Discover how to send bulk SMS on WhatsApp with attachments for your business. Boost your marketing efforts today!"
        />
        <meta
          name="keywords"
          content="Bulk SMS, WhatsApp, digital marketing, business communication, SMS marketing"
        />
      </Helmet>
      <section class="page-title  text-center py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-12">
              <h1 class="title grad-text">Bulk Sms on WhatsApp</h1>
              <div class="loader-line"></div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="container">
          <div className="heading mb-5">
            Send PDF, Image, Excel File Attachments through Bulk SMS on WhatsApp
          </div>
          <p>
            Now Share your Company Profile, Product Catalogue, Brochures,
            College Prospectus on WhatsApp
          </p>

          <div className="mb-5">
            <img src={WhatsApp} className="w-100" alt="Bulk SMS" />
          </div>
          <p className="heading">
            Welcome to the leading destination to have OTP SMS
          </p>
          <p>
            Promotion Ki Duniya Bulk SMS on WhatsApp service allows you to share
            PDF, Excel, JPEG, DOC and other files as attachments. You can send
            bulk SMS to customers and share attachments in WhatsApp on-demand-
            if the customer selects to receive further information. Send company
            profiles, brochures, catalogues, admission prospectus to thousands
            of prospects. Share detailed information and generate more leads by
            registering to bulk SMS on WhatsApp.
          </p>

          <p className="heading">What is Bulk Sms on WhatsApp?</p>
          <div class="loader-line"></div>
          <p>
            Bulk SMS on WhatsApp is an interactive way to connect with people
            powerfully and promote products digitally. It is an extension to
            bulk SMS service that enable businesses to share thorough details
            about the product or services with thousand of customers.
          </p>

          <p>
            You send SMS to multiple mobile numbers. Customer receives the SMS
            and follows the given link that opens up in WhatsApp. When message
            opens in WhatsApp, it includes business-centric keywords that
            customer can send to receive detailed information on the product
            being advertised.
          </p>
          <ul className="features">
            <li className="">
              <b>1. Business Profiles</b>
            </li>
            <li className="">
              <b>2. Admission Details</b>
            </li>
            <li className="">
              <b>3. Product Catalogues</b>
            </li>
            <li className="">
              <b>4. Deals & Discounts Info</b>
            </li>
          </ul>
        </div>
      </div>

      <section>
        <div className="container text-center mt-5">
          <p className="title grad-text">
            How Can Your Business Use SMS Attachments?
          </p>
          <div class="loader-line"></div>
          <p>Connect with Your Customers Digitally via WhatsApp</p>

          <div className="row">
            <div className="col-md-4">
              <div className="whatsapp-box">
                <img src={whatsapp1} alt="Promotion Ki Duniya" />
                <div className="heading mb-3">Ecommerce</div>
                <p>
                  Share product description, features, benefits, and pricing
                  details with prospective buyers interactively via bulk SMS on
                  WhatsApp and boost your sales graph.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="whatsapp-box">
                <img src={whatsapp2} alt="Promotion Ki Duniya" />
                <div className="heading mb-3">Travel & Tourism</div>
                <p>
                  Attract more customers by marketing adventurous tour details
                  along with flight details, hotel images, attractive
                  site-seeing descriptions, etc. to sell more travel packages.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="whatsapp-box">
                <img src={whatsapp3} alt="Promotion Ki Duniya" />
                <div className="heading mb-3">Real Estate Agents</div>
                <p>
                  An ultimate marketing platform for real estate agents to
                  display property listings (for rental, sale, purchase
                  properties) with end prospects in just few seconds.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="whatsapp-box">
                <img src={whatsapp4} alt="Promotion Ki Duniya" />
                <div className="heading mb-3">Banking & Insurance</div>
                <p>
                  Promote existing and new financial schemes, fixed-deposit
                  offerings, insurance products, and other services to inform
                  and attract customers to purchase it.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="whatsapp-box">
                <img src={whatsapp5} alt="Promotion Ki Duniya" />
                <div className="heading mb-3">College & Universities</div>
                <p>
                  Educational institutions can share their admission prospectus,
                  specific program details with aspirants based on the
                  program-specific keywords mentioned in the WhatsApp message.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="whatsapp-box">
                <img src={whatsapp6} alt="Promotion Ki Duniya" />
                <div className="heading mb-3">Malls & Retail Outlets</div>
                <p>
                  You can share detailed information about any particular
                  product, entire product catalog, product-wise deals, festival
                  discounts, etc. with customers to promote outlet sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whatsapp-work text-center mt-5">
        <div className="title grad-text">How Bulk SMS on WhatsApp Works?</div>
        <div class="loader-line"></div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <p className="heading">#STEP 1</p>
              <img src={step1} alt="step-1" />
              <p className="mt-3">
                Businesses can send bulk SMS on mobile number.
              </p>
            </div>
            <div className="col-md-4">
              <p className="heading">#STEP 2</p>
              <img src={step2} alt="step-2" />
              <p className="mt-3">
                Customer receives SMS, clicks on the link that opens up in
                WhatsApp.
              </p>
            </div>
            <div className="col-md-4">
              <p className="heading">#STEP 3</p>
              <img src={step3} alt="step-3" />
              <p className="mt-3">
                Customer sends keyword and receives relevant information as PDF,
                DOC, PPT, Excel on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>
      <RequestDemo />
    </>
  );
};

export default WhatsappSms;

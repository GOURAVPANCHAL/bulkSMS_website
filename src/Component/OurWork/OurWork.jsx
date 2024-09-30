import React from "react";
import "../OurWork/ourWork.css";
import image1 from "../../images/project1.jpeg";
import image2 from "../../images/project2.jpeg";
import image3 from "../../images/project3.jpeg";
import image4 from "../../images/project4.jpeg";
import image5 from "../../images/project5.jpeg";
import image6 from "../../images/project6.jpeg";
import image7 from "../../images/project7.jpeg";
import image8 from "../../images/project8.jpeg";
import image9 from "../../images/project9.jpeg";
import image10 from "../../images/project10.jpeg";
import image11 from "../../images/project11.jpeg";
import image12 from "../../images/project12.jpeg";

import what1 from "../../images/what1.jpg";
import what2 from "../../images/what2.jpg";
import what3 from "../../images/what3.jpg";
import what4 from "../../images/what4.jpg";

import b1 from "../../images/bulksms1.jpg";
import b2 from "../../images/bulksms2.jpg";
import b3 from "../../images/bulksms3.jpg";
import b4 from "../../images/bulksms4.jpg";

import whatisbulk1 from "../../images/whatisbulk1.jpg";
import whatisbulk2 from "../../images/whatisbulk2.jpg";
import whatisbulk3 from "../../images/whatisbulk3.jpg";
import whatisbulk4 from "../../images/whatisbulk4.jpg";

import whatsappbulk1 from "../../images/whatsappbulk1.png";
import whatsappbulk2 from "../../images/whatsappbulk2.png";
import whatsappbulk3 from "../../images/whatsappbulk3.jpg";
import whatsappbulk4 from "../../images/whatsappbulk4.webp";

import { Link } from "react-router-dom";

const OurWork = () => {
  // Array of images
  const images = [
    { src: image1, alt: "Project 1", link: "https://camrosteel.com/" },
    {
      src: image2,
      alt: "Project 2",
      link: "https://naturalcottoncollection.com/",
    },
    { src: image3, alt: "Project 3", link: "https://labmantra.com/" },
    { src: image4, alt: "Project 4", link: "https://apnipolicy.in/" },
    { src: image5, alt: "Project 5", link: "https://iscindiasales.co.in/" },
    { src: image6, alt: "Project 6", link: "https://www.mediaman.in/" },
    { src: image7, alt: "Project 7", link: "https://adroilseals.com/" },
    { src: image8, alt: "Project 8", link: "https://manshapackaging.in/" },
    { src: image9, alt: "Project 9", link: "https://vigaz.in/" },
    { src: image10, alt: "Project 10", link: "https://hansproperty.in/" },
    {
      src: image11,
      alt: "Project 11",
      link: "https://www.sitarammarriagebureau.com/",
    },
    { src: image12, alt: "Project 12", link: "https://noidayogaclass.in/" },
  ];

  return (
    <>
      <section className="whatwedo py-5">
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-md-6">
              <h4 className="grad-text">What We Do</h4>
              <p>
               we excel in delivering premium Bulk SMS
                services that elevate your communication strategy. Our platform
                is equipped with a variety of features, such as high delivery
                rates, real-time tracking, and customizable messaging options,
                ensuring your messages reach the right audience at the right
                moment.
              </p>
              <p className="heading">Explore our services below:</p>
              <ul className="custom-li list-unstyled list-icon-2 my-3 d-inline-block">
                <li>
                  <i className="bi bi-arrow-right-circle footerIcon"></i> Bulks
                  SMS Promotion
                </li>
                <li>
                  <i className="bi bi-arrow-right-circle footerIcon"></i> Bulk
                  SMS Transaction
                </li>

                <li>
                  <i className="bi bi-arrow-right-circle footerIcon"></i> OTP
                  SMS
                </li>
                <li>
                  <i className="bi bi-arrow-right-circle footerIcon"></i>{" "}
                  International SMS{" "}
                </li>
                <li>
                  <i className="bi bi-arrow-right-circle footerIcon"></i>{" "}
                  WhatsApp SMS
                </li>
                <li>
                  <i className="bi bi-arrow-right-circle footerIcon"></i> Mobile
                  database
                </li>
                <li>
                  <i className="bi bi-arrow-right-circle footerIcon"></i> Social
                  media marketing
                </li>
                <li>
                  <i className="bi bi-arrow-right-circle footerIcon"></i>{" "}
                  Website designing
                </li>
                <li>
                  <i className="bi bi-arrow-right-circle footerIcon"></i> IVR
                  Services
                </li>
                <li>
                  <i className="bi bi-arrow-right-circle footerIcon"></i>{" "}
                  Voice call
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 col-6">
                  <img
                    src={what1}
                    className="w-100 mb-3"
                    alt="Promotion Ki Duniya"
                  />
                </div>
                <div className="col-md-6 col-6">
                  <img
                    src={what2}
                    className="w-100 mb-3"
                    alt="Promotion Ki Duniya"
                  />
                </div>
                <div className="col-md-6 col-6">
                  <img
                    src={what3}
                    className="w-100 mb-3"
                    alt="Promotion Ki Duniya"
                  />
                </div>
                <div className="col-md-6 col-6">
                  <img
                    src={what4}
                    className="w-100 mb-3"
                    alt="Promotion Ki Duniya"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bulk_sms">
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-md-6">
              <h4 className="grad-text">Bulk SMS Services</h4>
              <p className="paragraph">
                Bulk SMS is one of the most powerful features of our SMS
                services, enabling businesses to deliver high-quality and
                reliable information directly to their customers.
              </p>
              <p>There are primarily two types of Bulk SMS:</p>

              <p>
                <span className="footerIcon">Promotional SMS</span> <br />
                Use promotional SMS to effectively promote your products, remind
                customers about upcoming sales, and more. Our service allows you
                to send messages to both non-DND and DND numbers, as well as
                opt-in numbers, using a six-digit sender ID. Easily manage SMS
                templates and schedule campaigns, consolidating your Excel
                contacts through our plug-in.
              </p>
              <p>
                <span className="footerIcon">Transactional SMS</span> <br />
                Transactional SMS focuses on delivering essential updates to
                your customers in bulk. We provide a six-character alphabetic
                sender ID that begins with the first two letters of your
                business or brand name. This service allows you to send messages
                to both DND and non-DND numbers in any language, 24/7.
              </p>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 col-6">
                  <img
                    src={b1}
                    className="w-100 mb-3"
                    alt="Promotion Ki Duniya"
                  />
                </div>
                <div className="col-md-6 col-6">
                  <img
                    src={b2}
                    className="w-100 mb-3"
                    alt="Promotion Ki Duniya"
                  />
                </div>
                <div className="col-md-6 col-6">
                  <img
                    src={b3}
                    className="w-100 mb-3"
                    alt="Promotion Ki Duniya"
                  />
                </div>
                <div className="col-md-6 col-6">
                  <img
                    src={b4}
                    className="w-100 mb-3"
                    alt="Promotion Ki Duniya"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="what_is_bulk_sms mt-5">
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 col-6">
                  <img
                    src={whatisbulk1}
                    className="w-100 mb-3"
                    alt="Promotion Ki Duniya"
                  />
                </div>
                <div className="col-md-6 col-6">
                  <img
                    src={whatisbulk2}
                    className="w-100 mb-3"
                    alt="Promotion Ki Duniya"
                  />
                </div>
                <div className="col-md-6 col-6">
                  <img
                    src={whatisbulk3}
                    className="w-100 mb-3"
                    alt="Promotion Ki Duniya"
                  />
                </div>
                <div className="col-md-6 col-6">
                  <img
                    src={whatisbulk4}
                    className="w-100 mb-3"
                    alt="Promotion Ki Duniya"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="grad-text">What Is Bulk SMS?</h4>
              <p>
                Bulk SMS refers to the practice of sending a large volume of
                text messages simultaneously to multiple recipients. It’s widely
                used by businesses, organizations, and institutions for various
                purposes, including:
              </p>
              <p>
                <span className="footerIcon">Marketing Campaigns:</span> &nbsp;
                Promote products, services, or special offers to a broad
                audience.
              </p>
              <p>
                <span className="footerIcon">Customer Notifications:</span>{" "}
                &nbsp; Inform customers about order updates, appointment
                reminders, or service alerts.
              </p>
              <p>
                <span className="footerIcon">Emergency Alerts:</span>&nbsp;
                Quickly send urgent messages or warnings to a large group.
              </p>
              <p>
                <span className="footerIcon">Event Reminders:</span> &nbsp;
                Notify participants about upcoming events, changes, or important
                information.
              </p>
              <p>
                Bulk SMS is typically managed through specialized software or
                service providers that offer platforms for efficient message
                delivery. These platforms often include features like
                scheduling, personalization, tracking, and reporting to enhance
                the effectiveness of SMS campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bulk_whatsapp mt-5">
        <div className="container">
          <div className="row" style={{alignItems:'center'}}>
            <div className="col-md-6">
              <h4 className="grad-text">Bulk WhatsApp Marketing</h4>
              <p className="paragraph">
                Bulk WhatsApp Marketing is one of the most effective strategies
                for growing your business online. Choosing the right bulk
                service can significantly enhance your outreach. When you
                partner with Brand Rise Services Private Limited for your Bulk
                WhatsApp Marketing needs, we provide you with dedicated software
                and a user-friendly panel.
              </p>
              <p>
                To take advantage of our services, simply download our Bulk
                WhatsApp software, where you can easily input your promotional
                content. We also offer customized content to meet your specific
                marketing needs.
              </p>
              <p>Why Choose Brand Rise Services Private Limited?</p>
              <ul className="custom-li list-unstyled list-icon-2 my-3 d-inline-block">
                <li>
                  <i className="bi bi-arrow-right-circle footerIcon"></i> Responsibility
                  for Data Privacy
                </li>
                <li>
                  <i className="bi bi-arrow-right-circle footerIcon"></i> API’s And Third
                  Party Processing Security
                </li>

                <li>
                  <i className="bi bi-arrow-right-circle footerIcon"></i> Dynamic
                  alphanumeric sender’s ID name
                </li>
                <li>
                  <i className="bi bi-arrow-right-circle footerIcon"></i> End To End
                  Encryption
                </li>
                <li>
                  <i className="bi bi-arrow-right-circle footerIcon"></i> Message will
                  deliver on dnd number (OBD)
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 col-6">
                  <img
                    src={whatsappbulk1}
                    className="w-100 mb-3"
                    alt="Promotion Ki Duniya"
                  />
                </div>
                <div className="col-md-6 col-6">
                  <img
                    src={whatsappbulk2}
                    className="w-100 mb-3"
                    alt="Promotion Ki Duniya"
                  />
                </div>
                <div className="col-md-6 col-6">
                  <img
                    src={whatsappbulk3}
                    className="w-100 mb-3"
                    alt="Promotion Ki Duniya"
                  />
                </div>
                <div className="col-md-6 col-6">
                  <img
                    src={whatsappbulk4}
                    className="w-100 mb-3"
                    alt="Promotion Ki Duniya"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="price_table py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center text-black">
              <h4 className="grad-text">Price Table</h4>
              <p className="heading text-white">Choose Your Pricing plan</p>
              <div className="loader-line"></div>
              <p>
                BrandRise has extensive experience across all industries. We
                help our clients set new standards of excellence.
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <div className="smspack">
                <h4 className="grad-text text-center">Transactional SMS</h4>
                <ul className="custom-li list-unstyled list-icon-2 my-3 d-inline-block">
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    Send Bulk SMS In 1 Click
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    85% to 90% Delivery.
                  </li>

                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    Delivery on DND & Non DND.
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    1 Year Extendable Validity.
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    DLT REQUIRED from JIO or AIRTEL
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    1 Lac SMS = 11000 + GST = 12980 INR (11 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    5 Lac SMS = 47500 + GST = 56050 INR (9.5 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    10 Lac SMS = 90000 + GST = 106200 INR (9 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    50 Lac SMS = 400000 + GST = 472000 INR (8 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    18% GST Additional
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="smspack">
                <h4 className="grad-text text-center">Email Marketing</h4>
                <ul className="custom-li list-unstyled list-icon-2 my-3 d-inline-block">
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    Send Bulk Email In 1 Click
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    90% inbox Delivery.
                  </li>

                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    Send Text in mail body with attachment.
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    1 Year Extendable Validity.
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    Gmail SMTP Server
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    1 Lac EMAIL = 5000 + GST = 5900 INR (5 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    5 Lac EMAIL = 23750 + GST = 28025 INR (4.75 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    10 Lac EMAIL = 45000 + GST = 53100 INR (4.5 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    50 Lac EMAIL = 200000 + GST = 236000 INR (4 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    18% GST Additional
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="smspack">
                <h4 className="grad-text text-center">Voice calls</h4>
                <ul className="custom-li list-unstyled list-icon-2 my-3 d-inline-block">
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    Send Bulk Voice In 1 Click
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    85% to 90% Delivery.
                  </li>

                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    Delivery on Non DND.
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    1 Year Extendable Validity.
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    Send 30 Seconds Mp3 Recording.
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    1 Lac Voice Calls = 13000 + GST = 15340 INR (13 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    5 Lac Voice Calls = 55000 + GST = 64900 INR (11 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    10 Lac Voice Calls = 100000 + GST = 118000 INR (10 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    50 Lac Voice Calls = 400000 + GST = 472000 INR (8 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    18% GST Additional
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="smspack">
                <h4 className="grad-text text-center">Bulk Whatsapp</h4>
                <ul className="custom-li list-unstyled list-icon-2 my-3 d-inline-block">
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    Send Bulk Whatsapp In 1 Click
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    85% to 90% Delivery.
                  </li>

                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    Delivery on DND & Non DND.
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    1 Year Extendable Validity.
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    Send Image or Video or PDF or Text
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    1 Lac WHATSAPP : 13000 + GST = 15340 INR (13 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    5 Lac WHATSAPP : 55000 + GST = 64900 INR (11 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    10 Lac WHATSAPP : 100000 + GST = 118000 INR (10 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    50 Lac WHATSAPP : 400000 + GST = 472000 INR (8 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    18% GST Additional
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="smspack">
                <h4 className="grad-text text-center">
                  BULK WHATSAPP BUSINESS
                </h4>
                <ul className="custom-li list-unstyled list-icon-2 my-3 d-inline-block">
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    Send Bulk Whatsapp In 1 Click
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    85% to 90% Delivery
                  </li>

                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    Delivery on DND & Non DND.
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    1 Year Extendable Validity.
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    Send Text or Image with Caption
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    1 Lac WHATSAPP : 40000 + GST = 47200 INR (40 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    5 Lac WHATSAPP : 190000 + GST = 224200 INR (38 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    10 Lac WHATSAPP : 350000 + GST = 413500 INR (35 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    50 Lac WHATSAPP : 1500000 + GST = 1770000 INR (30 paisa)
                  </li>
                  <li className="smspack_li d-flex gap-2">
                    <div>
                      <i className="bi bi-check-all"></i>
                    </div>
                    18% GST Additional
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="our_work">
        <div className="mb-5 text-center">
          <h5>
            REAL RESULTS, REAL IMPACT: SEE HOW WE'VE TRANSFORMED BUSINESSES!
          </h5>
          <h1>Our Work in Action</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            {images.map((image, index) => (
              <div className="col-md-4 col-6 mb-3" key={index}>
                <div className="work">
                  <div className="image-wrapper">
                    <Link
                      to={image.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-100 img-fluid"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default OurWork;

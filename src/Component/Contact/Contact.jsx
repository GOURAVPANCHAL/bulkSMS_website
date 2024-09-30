import React, { useEffect } from "react";
import "../Contact/contact.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Contact = () => {
  const servicesList = [
    "Bulk SMS Service",
    "WhatsApp Business Solution",
    "Voice Call Service",
    "Bulk Email Service",
    "Social Media Marketing",
    "Email Marketing",
    "SEO Services",
    "Others",
  ];
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <Helmet>
        <title>Contact Us - Promotion Ki Duniya</title>
        <meta
          name="description"
          content="Get in touch with Promotion Ki Duniya for bulk SMS services. We are here to assist you with all your messaging needs."
        />
        <meta
          name="keywords"
          content="Contact, Promotion Ki Duniya, Bulk SMS, Support, Inquiries"
        />
      </Helmet>
      <section className="page-title text-center py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h1 className="title grad-text">Contact Us</h1>
              <div className="loader-line"></div>
              <p>
                Thanks for your interest in Promotion Ki Duniya, We will be
                happy to hear from you. Kindly use this form to share your query
                and we shall get back to you shortly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div className="container">
          <div className="row contact-row" style={{ alignItems: "center" }}>
            <div className="col-md-6">
              <div className="contact-details">
                <div className="heading mb-3">Contact Information</div>
                <p>
                  For any inquiries or support related to our bulk SMS services,
                  feel free to reach out. You can contact us via phone, email,
                  or by filling out the form below. We’re here to assist you
                  with all your messaging needs and ensure you get the best
                  experience!
                </p>
                <div className="info">
                  <div className="information">
                    <i className="bi bi-geo-alt"></i> &nbsp; &nbsp;
                    <p>F318,OLD MB ROAD ,LADO SARAI ,NEW DELHI 110030</p>
                  </div>
                  <div className="information">
                    <i className="bi bi-envelope"></i> &nbsp; &nbsp;
                    <Link className="text-white" to={'mailto:Info@promotionkiduniya.com'}>Info@promotionkiduniya.com</Link>
                  </div>
                  <div className="information">
                    <i className="bi bi-telephone"></i>&nbsp; &nbsp;
                    <Link className="text-white" to={'tel:917562800337'}>+91 7562800337</Link>
                  </div>
                </div>
                <div className="social-media">
                  <p>Connect with us :</p>
                  <div className="social-icons">
                    <Link
                      target="_blank"
                      to="https://www.facebook.com/share/zdSsibuww7gEB1tk/?mibextid=LQQJ4d"
                    >
                      <i className="bi bi-facebook"></i>
                    </Link>
                    {/* <Link target="_blank" to="#">
                      <i className="bi bi-twitter"></i>
                    </Link> */}
                    <Link target="_blank" to="https://www.instagram.com/promotion_ki_duniya?igsh=dGxzaThncTNzMGg2&utm_source=qr">
                      <i className="bi bi-instagram"></i>
                    </Link>
                    {/* <Link target="_blank" to="#">
                      <i className="bi bi-linkedin"></i>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-form">
                <div className="heading text-center">Contact us</div>
                <form
                  id="mail"
                  name="mail"
                  action="https://api.web3forms.com/submit"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="e6a5e829-f4ff-422f-a904-c8b7c67ed132"
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="New Submission from Web3Forms"
                  />
                  <input
                    type="checkbox"
                    name="botcheck"
                    style={{ display: "none" }}
                  />

                  <div className="form-group mb-3">
                    <label className="my-2">
                      Name<font color="#FF0000">*</font>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      id="name"
                      required=""
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>
                      Email <font color="#FF0000">*</font>
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                      required=""
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label className="my-2">
                      Phone <font color="#FF0000">*</font>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="phone"
                      id="phone"
                      required=""
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label className="my-2">Company</label>
                    <input
                      className="form-control"
                      type="text"
                      name="company"
                      id="company"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label className="my-2">Services</label>
                    <select
                      id="services"
                      name="services"
                      className="form-control"
                    >
                      {servicesList.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    <label className="my-2">Details</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="3"
                      cols="3"
                      id="message"
                      required=""
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    value="submit"
                    id="submit"
                    name="submit"
                    className="tabsButton"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

import React, { useState } from "react";
import HeroImage from "../../images/hero.png";
import "../Hero/hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [modalShow, setModalShow] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   setModalShow(false); // Close the modal after submission
  // };
  return (
    <>
      <section className="HeroTop py-5">
        <div className="container-fluid">
          <div className="row tabssection">
            <div className="col-md-4">
              <h1 className="colorfull_Heading">
                Empower Your Business with Bulk SMS Solutions
              </h1>
            </div>
            <div className="col-md-8">
              <div
                className="card tabsCard p-3 shadow"
                style={{ maxWidth: "900px", alignItems: "center" }}
              >
                <nav>
                  <div
                    className="nav nav-tabs mb-3"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link webButtons active"
                      id="nav-web-design-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-web-design"
                      type="button"
                      role="tab"
                      aria-controls="nav-web-design"
                      aria-selected="true"
                    >
                      Bulks SMS Promotion
                    </button>
                    <button
                      className="nav-link webButtons"
                      id="nav-ecommerce-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-ecommerce"
                      type="button"
                      role="tab"
                      aria-controls="nav-ecommerce"
                      aria-selected="false"
                    >
                      Bulk SMS Transaction
                    </button>
                    <button
                      className="nav-link webButtons"
                      id="nav-seo-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-seo"
                      type="button"
                      role="tab"
                      aria-controls="nav-seo"
                      aria-selected="false"
                    >
                      OTP SMS
                    </button>
                    <button
                      className="nav-link webButtons"
                      id="nav-mobile-app-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-mobile-app"
                      type="button"
                      role="tab"
                      aria-controls="nav-mobile-app"
                      aria-selected="false"
                    >
                      International SMS
                    </button>
                    <button
                      className="nav-link webButtons"
                      id="nav-bulk-sms-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-bulk-sms"
                      type="button"
                      role="tab"
                      aria-controls="nav-bulk-sms"
                      aria-selected="false"
                    >
                      WhatsApp SMS
                    </button>
                  </div>
                </nav>
                <div className="tab-content p-3" id="nav-tabContent">
                  <div
                    className="tab-pane text-center fade show active"
                    id="nav-web-design"
                    role="tabpanel"
                    aria-labelledby="nav-web-design-tab"
                  >
                    <p className="tabsTitle">Effective Communication</p>
                    <p className="tabsHeading">Bulk SMS Promotion</p>
                    <p className="tabsDesc">
                      Solutions to reach your customers instantly and
                      efficiently.
                    </p>
                    <button
                      onClick={() => navigate("/bulk-sms-promotion")}
                      className="tabsButton"
                    >
                      View More <i className="bi bi-patch-plus"></i>
                    </button>
                  </div>
                  <div
                    className="tab-pane text-center fade"
                    id="nav-ecommerce"
                    role="tabpanel"
                    aria-labelledby="nav-ecommerce-tab"
                  >
                    <p className="tabsTitle">Transactional SMS Solutions</p>
                    <p className="tabsHeading">Bulk SMS Transaction</p>
                    <p className="tabsDesc">
                      Reliable SMS for secure transactions.
                    </p>
                    <button
                      onClick={() => navigate("/bulk-sms-transaction")}
                      className="tabsButton"
                    >
                      View More <i className="bi bi-patch-plus"></i>
                    </button>
                  </div>
                  <div
                    className="tab-pane text-center fade"
                    id="nav-seo"
                    role="tabpanel"
                    aria-labelledby="nav-seo-tab"
                  >
                    <p className="tabsTitle">OTP SMS Services</p>
                    <p className="tabsHeading">Bulk OTP SMS</p>
                    <p className="tabsDesc">
                      Securely authenticate users with OTP.
                    </p>
                    <button
                      onClick={() => navigate("/otp-sms")}
                      className="tabsButton"
                    >
                      View More <i className="bi bi-patch-plus"></i>
                    </button>
                  </div>
                  <div
                    className="tab-pane text-center fade"
                    id="nav-mobile-app"
                    role="tabpanel"
                    aria-labelledby="nav-mobile-app-tab"
                  >
                    <p className="tabsTitle"> International SMS Solutions</p>
                    <p className="tabsHeading">International SMS</p>
                    <p className="tabsDesc">
                      Connect globally with seamless SMS.
                    </p>
                    <button
                      onClick={() => navigate("/international-sms")}
                      className="tabsButton"
                    >
                      View More <i className="bi bi-patch-plus"></i>
                    </button>
                  </div>
                  <div
                    className="tab-pane text-center fade"
                    id="nav-bulk-sms"
                    role="tabpanel"
                    aria-labelledby="nav-bulk-sms-tab"
                  >
                    <p className="tabsTitle">WhatsApp SMS Services</p>
                    <p className="tabsHeading">WhatsApp SMS</p>
                    <p className="tabsDesc">
                      Engage customers via WhatsApp messaging.
                    </p>
                    <button
                      onClick={() => navigate("/whatsapp-bulk-sms")}
                      className="tabsButton"
                    >
                      View More <i className="bi bi-patch-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img src={HeroImage} alt="hero images" className="w-100" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="container">
                <h1>
                  <span className="bold">Powerful</span>
                  <span className="pink">Digital</span> Marketing
                  <span className="bold">Solution</span>
                </h1>
                <p className="subtitle">
                  Discover Powerful Digital Marketing Solutions with BrandRise!
                </p>
                <p>Start working with BrandRise to:</p>
                <ul className="features">
                  <li>✔️ Get high-quality leads</li>
                  <li>✔️ Promote your products effectively</li>
                  <li>✔️ Connect with your customers</li>
                </ul>
                <p className="services-title">
                  Our Most Selling Services Include:
                </p>
                <ul className="services">
                  <li>📤 BULK SMS : PROMOTIONAL AND TRANSACTIONAL</li>
                  <li>📱 WHATSAPP AND SMS API</li>
                  <li>✉️ EMAIL MARKETING</li>
                  <li>📞 VOICE CALLS (OBD)</li>
                  <li>💬 BULK WHATSAPP AND BUSINESS WHATSAPP</li>
                </ul>
                <button
                  className="demo-button"
                  onClick={() => setModalShow(true)}
                >
                  
                  Try Free Demo
                </button>
                <div
                  className={`modal fade ${modalShow ? "show" : ""}`}
                  style={{ display: modalShow ? "block" : "none" }}
                  tabIndex="-1"
                  role="dialog"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Free Demo Request</h5>
                        <button
                          type="button"
                          className="close"
                          onClick={() => setModalShow(false)}
                        >
                          <span>&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form
                          action="https://api.web3forms.com/submit"
                          method="POST"
                          id="form"
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

                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input
                              type="tel"
                              className="form-control"
                              id="mobile"
                              name="phone"
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn demo-button mt-3"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                {modalShow && <div className="modal-backdrop fade show"></div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

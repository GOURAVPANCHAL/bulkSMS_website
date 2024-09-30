import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import service1 from "../../images/service1.png";
import service2 from "../../images/service2.png";
import service3 from "../../images/service3.png";
import service4 from "../../images/service4.png";
import service6 from "../../images/service6.png";
import service7 from "../../images/service7.png";
import service9 from "../../images/service9.png";
import service10 from "../../images/service10.png";
import ivrService from "../../images/ivrServices.png";
import voicecall from "../../images/voicecall.png";
import whatsappSMS from "../../images/whatsappSMS.png";
import seo from "../../images/seo.png";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = () => {
  const navbarCollapseRef = useRef(null);

  useEffect(() => {
    const handleDropdownClose = (event) => {
      if (
        navbarCollapseRef.current &&
        !navbarCollapseRef.current.contains(event.target)
      ) {
        const bsCollapse = new window.bootstrap.Collapse(
          navbarCollapseRef.current,
          {
            toggle: false,
          }
        );
        bsCollapse.hide();
      }
    };

    document.addEventListener("click", handleDropdownClose);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleDropdownClose);
    };
  }, []);

  const handleDropdownClick = (event) => {
    event.stopPropagation(); // Prevents the click event from closing the dropdown immediately
  };

  const [services, setServices] = useState(false);
  const [webdesign, setWebdesign] = useState(false);

  const handleMouseEnter = () => {
    setServices(true);
  };

  const handleRemoveSetService = () => {
    setServices(false);
  };

  const WebDesignhandleMouseEnter = () => {
    setWebdesign(true);
  };

  const handleRemovesetWebdesign = () => {
    setWebdesign(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">☰</span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            ref={navbarCollapseRef}
          >
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={() => {
                    if (navbarCollapseRef.current) {
                      new window.bootstrap.Collapse(navbarCollapseRef.current, {
                        toggle: false,
                      }).hide();
                    }
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={() => {
                    if (navbarCollapseRef.current) {
                      new window.bootstrap.Collapse(navbarCollapseRef.current, {
                        toggle: false,
                      }).hide();
                    }
                  }}
                >
                  About Us
                </Link>
              </li>
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleRemoveSetService}
                className={`nav-item webdesign ${services ? "active" : ""}`}
              >
                <Link className="nav-link" to="#" onClick={handleDropdownClick}>
                  Services <i className="bi bi-chevron-down"></i>
                </Link>
                <div className="dropMain bg-white">
                  <div className="container py-2">
                    <div className="row">
                      <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                        <div className="service">
                          <Link
                            to="/bulk-sms-promotion"
                            onClick={() => {
                              if (navbarCollapseRef.current) {
                                new window.bootstrap.Collapse(
                                  navbarCollapseRef.current,
                                  { toggle: false }
                                ).hide();
                              }
                              handleRemoveSetService();
                            }}
                          >
                            <img src={service1} alt="Bulk SMS Promotion" />
                            <br />
                            <h6>Bulk SMS Promotion</h6>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                        <div className="service">
                          <Link
                            to="/bulk-sms-transaction"
                            onClick={() => {
                              if (navbarCollapseRef.current) {
                                new window.bootstrap.Collapse(
                                  navbarCollapseRef.current,
                                  { toggle: false }
                                ).hide();
                              }
                              handleRemoveSetService();
                            }}
                          >
                            <img src={service2} alt="Bulk SMS Transaction" />
                            <br />
                            <h6>Bulk SMS Transaction</h6>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                        <div className="service">
                          <Link
                            to="/otp-sms"
                            onClick={() => {
                              if (navbarCollapseRef.current) {
                                new window.bootstrap.Collapse(
                                  navbarCollapseRef.current,
                                  { toggle: false }
                                ).hide();
                              }
                              handleRemoveSetService();
                            }}
                          >
                            <img src={service3} alt="OTP SMS" />
                            <br />
                            <h6>OTP SMS</h6>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                        <div className="service">
                          <Link
                            to="/international-sms"
                            onClick={() => {
                              if (navbarCollapseRef.current) {
                                new window.bootstrap.Collapse(
                                  navbarCollapseRef.current,
                                  { toggle: false }
                                ).hide();
                              }
                              handleRemoveSetService();
                            }}
                          >
                            <img src={service4} alt="International SMS" />
                            <br />
                            <h6>International SMS</h6>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                        <div className="service">
                          <Link
                            to="/whatsapp-bulk-sms"
                            onClick={() => {
                              if (navbarCollapseRef.current) {
                                new window.bootstrap.Collapse(
                                  navbarCollapseRef.current,
                                  { toggle: false }
                                ).hide();
                              }
                              handleRemoveSetService();
                            }}
                          >
                            <img src={whatsappSMS} alt="WhatsApp SMS" />
                            <br />
                            <p>WhatsApp SMS</p>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                        <div className="service">
                          <Link
                            to="/mobile-database"
                            onClick={() => {
                              if (navbarCollapseRef.current) {
                                new window.bootstrap.Collapse(
                                  navbarCollapseRef.current,
                                  { toggle: false }
                                ).hide();
                              }
                              handleRemoveSetService();
                            }}
                          >
                            <img src={service6} alt="Mobile Database" />
                            <br />
                            <p>Mobile Database</p>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                        <div className="service">
                          <Link
                            to="/website-designing"
                            onClick={() => {
                              if (navbarCollapseRef.current) {
                                new window.bootstrap.Collapse(
                                  navbarCollapseRef.current,
                                  { toggle: false }
                                ).hide();
                              }
                              handleRemoveSetService();
                            }}
                          >
                            <img src={service7} alt="Website Designing" />
                            <br />
                            <p>Website Designing</p>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                        <div className="service">
                          <Link
                            to="/ivr-services"
                            onClick={() => {
                              if (navbarCollapseRef.current) {
                                new window.bootstrap.Collapse(
                                  navbarCollapseRef.current,
                                  { toggle: false }
                                ).hide();
                              }
                              handleRemoveSetService();
                            }}
                          >
                            <img src={ivrService} alt="IVR Services" />
                            <br />
                            <p>IVR Services</p>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                        <div className="service">
                          <Link
                            to="/voice-call"
                            onClick={() => {
                              if (navbarCollapseRef.current) {
                                new window.bootstrap.Collapse(
                                  navbarCollapseRef.current,
                                  { toggle: false }
                                ).hide();
                              }
                              handleRemoveSetService();
                            }}
                          >
                            <img src={voicecall} alt="Voice Call" />
                            <br />
                            <p>Voice Call</p>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                        <div className="service">
                          <Link
                            to="/email-marketing"
                            onClick={() => {
                              if (navbarCollapseRef.current) {
                                new window.bootstrap.Collapse(
                                  navbarCollapseRef.current,
                                  { toggle: false }
                                ).hide();
                              }
                              handleRemovesetWebdesign();
                            }}
                          >
                            <img src={service10} alt="Email Marketing" />
                            <br />
                            <p>Email Marketing</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                onMouseEnter={WebDesignhandleMouseEnter}
                onMouseLeave={handleRemovesetWebdesign}
                className={`nav-item webdesign ${webdesign ? "active" : ""}`}
              >
                <Link className="nav-link" to="#" onClick={handleDropdownClick}>
                  Digital Marketing <i className="bi bi-chevron-down"></i>
                </Link>
                <div className="dropMain bg-white">
                  <div className="container py-5">
                    <div className="row">
                      <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                        <div className="service">
                          <Link
                            to="/search-engine-optimization"
                            onClick={() => {
                              if (navbarCollapseRef.current) {
                                new window.bootstrap.Collapse(
                                  navbarCollapseRef.current,
                                  { toggle: false }
                                ).hide();
                              }
                              handleRemovesetWebdesign();
                            }}
                          >
                            <img src={seo} alt="SEO" />
                            <br />
                            <p>Search Engine Optimization (SEO)</p>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                        <div className="service">
                          <Link
                            to="/social-media-optimization-smo"
                            onClick={() => {
                              if (navbarCollapseRef.current) {
                                new window.bootstrap.Collapse(
                                  navbarCollapseRef.current,
                                  { toggle: false }
                                ).hide();
                              }
                              handleRemovesetWebdesign();
                            }}
                          >
                            <img src={service9} alt="SMO" />
                            <br />
                            <p>Social Media Optimization (SMO)</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/dlt"
                  onClick={() => {
                    if (navbarCollapseRef.current) {
                      new window.bootstrap.Collapse(navbarCollapseRef.current, {
                        toggle: false,
                      }).hide();
                    }
                  }}
                >
                  DLT Guide
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact-us"
                  onClick={() => {
                    if (navbarCollapseRef.current) {
                      new window.bootstrap.Collapse(navbarCollapseRef.current, {
                        toggle: false,
                      }).hide();
                    }
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <a href="tel:+917562800337" className="callbutton">
                Call Us: +91 7562800337
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

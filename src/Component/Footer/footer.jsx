import React from "react";
import "../Footer/footer.css";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 mt-3 footer-column">
                <div className="logo-widget footer-widget">
                  {/* <div className="heading">Promotion Ki Duniya</div> */}
                  <figure className="logo-box">
                    <Link to="/">
                      <img
                        src={logo}
                        alt="Promotion Ki Duniya"
                      />
                    </Link>
                  </figure>
                  <div className="text">
                    <p>
                      Our focus lies in targeted marketing, customer care,
                      customer voice, and professional services that allow our
                      clients to move beyond messaging to create a meaningful
                      dialogue with the customers.
                    </p>
                  </div>
                  <ul className="footer-social">
                    <li>
                      <Link target="_blank" to="https://www.facebook.com/share/zdSsibuww7gEB1tk/?mibextid=LQQJ4d">
                        <i className="bi bi-facebook"></i>
                      </Link>
                    </li>
                    {/* <li>
                      <Link target="_blank" to="#">
                        <i className="bi bi-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link target="_blank" to="#">
                        <i className="bi bi-vimeo"></i>
                      </Link>
                    </li> */}
                    <li>
                      <Link target="_blank" to="https://www.instagram.com/promotion_ki_duniya?igsh=dGxzaThncTNzMGg2&utm_source=qr">
                        <i className="bi bi-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="service-widget footer-widget">
                  <div className="footer-title">Services</div>
                  <ul className="list">
                    <li>
                      <Link to="/bulk-sms-promotion">
                        <i class="bi bi-caret-right footerIcon"></i> Bulk SMS Promotion
                      </Link>
                    </li>
                    <li>
                      <Link to="/bulk-sms-transaction">
                        <i class="bi bi-caret-right footerIcon"></i>Bulk SMS Transaction
                      </Link>
                    </li>
                    <li>
                      <Link to="/otp-sms">
                        <i class="bi bi-caret-right footerIcon"></i> OTP SMS
                      </Link>
                    </li>
                    <li>
                      <Link to="/international-sms">
                        <i class="bi bi-caret-right footerIcon"></i>International SMS
                      </Link>
                    </li>
                    <li>
                      <Link to="/whatsapp-bulk-sms">
                        <i class="bi bi-caret-right footerIcon"></i> WhatsApp SMS
                      </Link>
                    </li>
                    <li>
                      <Link to="/mobile-database">
                        <i class="bi bi-caret-right footerIcon"></i> Mobile Database
                      </Link>
                    </li>
                    <li>
                      <Link to="/website-designing">
                        <i class="bi bi-caret-right footerIcon"></i> Website Designing
                      </Link>
                    </li>
                    <li>
                      <Link to="/ivr-services">
                        <i class="bi bi-caret-right footerIcon"></i> IVR Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/voice-call">
                        <i class="bi bi-caret-right footerIcon"></i> Voice Call
                      </Link>
                    </li>
                    <li>
                      <Link to="/email-marketing">
                        <i class="bi bi-caret-right footerIcon"></i> Email Marketing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="service-widget footer-widget">
                  <div className="footer-title">Digital Marketing</div>
                  <ul className="list">
                    <li>
                      <Link to="/search-engine-optimization">
                        <i class="bi bi-caret-right footerIcon"></i> Search Engine Optimization (SEO)
                      </Link>
                    </li>
                    <li>
                      <Link to="/social-media-optimization-smo">
                        <i class="bi bi-caret-right footerIcon"></i> Social Media Optimization (SMO)
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-widget">
                <div className="contact-widget footer-widget">
                  <div className="footer-title">Contacts</div>
                  <div className="text">
                    <p><i class="bi bi-geo-alt footerIcon"></i> F318, OLD MB ROAD, LADO SARAI, NEW DELHI 110030</p>
                    <p><i class="bi bi-telephone-outbound footerIcon"></i> +91 7562800337</p>
                    <p><i class="bi bi-envelope-paper footerIcon"></i> Info@promotionkiduniya.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12 column">
              <div className="copyright">
                Copyright © 2024 All Rights Reserved. Designed By{" "}
                <Link target="_blank" to="https://www.digiindiasolutions.com/">
                  <b>DIGI INDIA SOLUTIONS</b>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 column"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import { useNavigate } from "react-router-dom";

const RequestDemo = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="request_demo">
        <div className="container">
          <div className="smsContactUs">
            <p className="grad-text">Request A Demo</p>
            <p>EXPLORE OUR FULLY FEATURED BULK SMS PLATFORM</p>
            <div className="loader-line"></div>
            <button className="tabsButton" onClick={() => navigate("/contact-us")}>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestDemo;

import React from "react";
import "../OurLocation/location.css";
import delhiImage from '../../images/delhi.jpg'
import Tamilnadu from '../../images/tamil.jpg'
const OurLocation = () => {
  return (
    <>
      <div className="ourLocation">
        <div className="text-center">
          <p>LOCATIONS WE WORK FROM</p>
          <p className="locationHeading colorfull_Heading">Our Offices</p>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 mb-3">
              <div className="office-card">
                <img src={delhiImage} className="w-100" alt="" />
                <div className="office-text">
                  <h4 className="grad-text">Delhi, India</h4>
                  <p>
                    F318,OLD MB ROAD ,LADO SARAI ,NEW DELHI 110030
                    <br />
                    <br />
                  </p>
                  {/* <div className="social_icons_Locations">
                    <Link to="#" target="_blank" className="btn-outline rount-btn">
                      <i className="bi bi-geo-alt-fill"></i>
                    </Link>
                    <Link to="tel:+917017940576" className="btn-outline rount-btn">
                      <i className="bi bi-telephone-plus"></i>
                    </Link>
                    <Link to="#" target="_blank" className="btn-outline rount-btn">
                      <i className="bi bi-whatsapp"></i>
                    </Link>
                    <Link
                      href="mailto:info@pstechglobal.com"
                      className="btn-outline rount-btn"
                    >
                      <i className="bi bi-envelope"></i>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="office-card">
              <img src={Tamilnadu} className="w-100" alt="" />
                <div className="office-text">
                  <h4 className="grad-text">Tamilnadu, India</h4>
                  <p>
                    N58, SRI NAGAR, PEELAMEEDU,COIMBATORE 641004
                    <br />
                    <br />
                  </p>
                  {/* <div className="social_icons_Locations">
                    <Link to="#" target="_blank" className="btn-outline rount-btn">
                      <i className="bi bi-geo-alt-fill"></i>
                    </Link>
                    <Link to="tel:+917017940576" className="btn-outline rount-btn">
                      <i className="bi bi-telephone-plus"></i>
                    </Link>
                    <Link to="#" target="_blank" className="btn-outline rount-btn">
                      <i className="bi bi-whatsapp"></i>
                    </Link>
                    <Link
                      href="mailto:info@pstechglobal.com"
                      className="btn-outline rount-btn"
                    >
                      <i className="bi bi-envelope"></i>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurLocation;

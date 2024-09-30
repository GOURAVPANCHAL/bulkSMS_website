import React, { useEffect } from "react";

import mobileDB1 from "../../images/mobileDB1.png"; // Placeholder for relevant images
import mobileDB2 from "../../images/mobileDB2.png";
import mobileDB3 from "../../images/mobileDB3.png";
import mobileDB4 from "../../images/mobileDB4.jpg";
import { Helmet } from "react-helmet";

const MobileDatabase = () => {
  useEffect(()=>{
    window.scrollTo({
        top:'0',
        behavior:'smooth'
    })
})
  return (
    <>
    <Helmet>
        <title>Mobile Database Services | Accurate & Targeted Data</title>
        <meta
          name="description"
          content="Get accurate and updated mobile databases tailored to your industry and region. Maximize your marketing efforts with our targeted mobile database services."
        />
        <meta
          name="keywords"
          content="Mobile Database, Mobile Marketing Data, HNI Database, Corporate Database, Job Seekers Database, Students Database, Bulk SMS Marketing, Targeted Mobile Contacts, Business Outreach, Accurate Marketing Data, Updated Mobile Database, Business Growth"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Page Title Section */}
      <section className="page-title text-center py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h1 className="title grad-text">Mobile Database Services</h1>
              <div className="loader-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <p className="text-center">
                Get accurate and updated mobile databases for your business campaigns. Access data tailored to your industry and region to maximize your marketing efforts.
              </p>

              <h2 className="heading">What is a Mobile Database?</h2>
              <p>
                A mobile database is a collection of categorized phone numbers that businesses use to target specific audiences for promotional SMS campaigns. Whether you are looking for corporate contacts, job seekers, or region-specific numbers, our mobile database solutions are designed to meet all your needs.
              </p>

              <h2 className="heading">Our Mobile Database Services</h2>
              <p>
                We offer an extensive range of mobile databases categorized by industry, location, and demographics. With accurate and regularly updated data, you can enhance your outreach for marketing, customer engagement, and sales growth.
              </p>
            </div>

            {/* Mobile Database Categories Section */}
            <section className="text-center mt-5">
              <h2 className="title grad-text">Mobile Database Categories</h2>
              <div className="loader-line"></div>

              <div className="row mt-5">
                <div className="col-md-3">
                  <div className="whatsapp-box">
                    <img
                      src={mobileDB1}
                      className="w-50 mb-3"
                      alt="HNI Database"
                    />
                    <h3 className="heading mb-3">HNI Database</h3>
                    <p>
                      Access databases of High Net-Worth Individuals to target affluent prospects for luxury goods, premium services, and more.
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="whatsapp-box">
                    <img
                      src={mobileDB2}
                      className="w-50 mb-3"
                      alt="Corporate Database"
                    />
                    <h3 className="heading mb-3">Corporate Database</h3>
                    <p>
                      Reach decision-makers in top companies across sectors, perfect for B2B marketing and corporate outreach.
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="whatsapp-box">
                    <img
                      src={mobileDB3}
                      className="w-50 mb-3"
                      alt="Job Seekers Database"
                    />
                    <h3 className="heading mb-3">Job Seekers Database</h3>
                    <p>
                      Find candidates actively looking for jobs in various industries and match them with your recruitment needs.
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="whatsapp-box">
                    <img
                      src={mobileDB4}
                      className="w-50 mb-3"
                      alt="Students Database"
                    />
                    <h3 className="heading mb-3">Students Database</h3>
                    <p>
                      Target students for educational services, recruitment, and internships with our curated student databases.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Advantages of Mobile Database Section */}
            <h2 className="grad-text text-center mt-5">Advantages of Mobile Database Services</h2>
            <ul className="features text-left">
              <li><i class="bi bi-arrow-right-circle tick"></i> Enhanced marketing targeting with accurate data.</li>
              <li><i class="bi bi-arrow-right-circle tick"></i> Industry-specific databases for more effective campaigns.</li>
              <li><i class="bi bi-arrow-right-circle tick"></i> Regularly updated databases to ensure fresh contacts.</li>
              <li><i class="bi bi-arrow-right-circle tick"></i> Customizable databases to meet your specific needs.</li>
              <li><i class="bi bi-arrow-right-circle tick"></i> Boost your sales outreach with verified mobile numbers.</li>
              <li><i class="bi bi-arrow-right-circle tick"></i> Scalable databases for small, medium, and large businesses.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Request Demo Section */}
      <section className="request_demo mt-5">
        <div className="container">
          <div className="smsContactUs text-center">
            <h2 className="grad-text">Request A Demo</h2>
            <p>Explore our comprehensive mobile database services to drive your business growth.</p>
            <div className="loader-line"></div>
            <button className="tabsButton" aria-label="Contact Us">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileDatabase;

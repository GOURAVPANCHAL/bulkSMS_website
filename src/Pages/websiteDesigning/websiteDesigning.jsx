import React, { useEffect } from "react";
import webDesign from "../../images/web-design.jpg";
import implementer1 from "../../images/implementer1.png";
import implementer2 from "../../images/implementer2.png";
import implementer3 from "../../images/implementer3.png";
import implementer4 from "../../images/implementer4.png";
import implementer5 from "../../images/implementer5.png";
import implementer6 from "../../images/implementer6.png";
import { Helmet } from "react-helmet";

const WebsiteDesigning = () => {
  useEffect(()=>{
    window.scrollTo({
      top:'0',
      behavior:'smooth'
    })
  })
  return (
    <>
    <Helmet>
        <title>Website Designing - The Click Funnel</title>
        <meta name="description" content="Professional website designing services to boost your business. Create responsive and user-friendly websites that drive results." />
        <meta name="keywords" content="website design, web development, responsive design, SEO, digital marketing, user-friendly websites" />
      </Helmet>
      {/* Page Title Section */}
      <section className="page-title text-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="title grad-text">Website Designing</h1>
              <div className="loader-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container py-5">
        <div className="row">
          {/* Left Column - Image */}
          <div className="col-md-6">
            <img src={webDesign} className="w-100" alt="Website Design" />
          </div>

          {/* Right Column - Description */}
          <div className="col-md-6">
            <p className="heading mb-3">
              Boost your business with our experienced Web development team and
              build your presence.
            </p>
            <p>The Click Funnel Website Development Services</p>
            <p className="mb-3">
              A business website lets your online audience see your products and
              services and get in touch with them if they want to learn more
              about the services you provide. A decent website acts as a
              launchpad for selling products and services globally, allowing a
              digital firm to fulfil its objectives. Professional website
              developers can teach you the fundamentals of creating an efficient
              website. Theclickfunnel is a renowned digital marketing business
              in India that specialises in web development. Theclickfunnel has
              gained expertise in offering services to improve digital companies
              by working with large MNCs, start-ups, small and large
              organisations.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="row mt-5">
          <div className="col-md-5">
            <h2 className="title grad-text">Benefits with TheClickFunnel</h2>
            <p className="mt-3">
              THE CLICK FUNNEL is a Digital Marketing Agency that helps you
              promote or create a brand and take it to new heights. Our agency
              brings your target audience to your doorstep. We offer services
              like Social Media Marketing, Website Development, and SEO.
            </p>
          </div>

          {/* Benefit Items */}
          <div className="col-lg-7">
            <div className="row">
              {/* Benefit 1 */}
              <div className="col-md-4 col-6 wow fadeInUp">
                <img className="bg-light" src={implementer1} alt="Creative Result" />
                <h4>Creative Result</h4>
                <p>
                  We help create a well-structured and creative website that
                  captures the audience's attention.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="col-md-4 col-6 wow fadeInUp">
                <img className="bg-light" src={implementer2} alt="User Friendly" />
                <h4>User Friendly</h4>
                <p>
                  Our user interface designs ensure that your website is
                  responsive to all visitors.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="col-md-4 col-6 wow fadeInUp">
                <img className="bg-light" src={implementer3} alt="Mobile Friendly" />
                <h4>Mobile Friendly</h4>
                <p>
                  We design websites that are as easy to use on mobile devices
                  as they are on desktops.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="col-md-4 col-6 wow fadeInUp">
                <img className="bg-light" src={implementer4} alt="Optimized" />
                <h4>Optimized</h4>
                <p>
                  Our SEO techniques ensure your website ranks highly in search
                  engine results.
                </p>
              </div>

              {/* Benefit 5 */}
              <div className="col-md-4 col-6 wow fadeInUp">
                <img className="bg-light" src={implementer5} alt="Fast And Secure" />
                <h4>Fast And Secure</h4>
                <p>
                  We focus on the safety and security of your website, ensuring
                  it operates smoothly and securely.
                </p>
              </div>

              {/* Benefit 6 */}
              <div className="col-md-4 col-6 wow fadeInUp">
                <img className="bg-light" src={implementer6} alt="Redesigning" />
                <h4>Redesigning</h4>
                <p>
                  Need to drive more sales from your website? We can redesign it
                  according to your requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="text-center">
              <p className="heading">Why should you go with us?</p>
              <p>
                The Click Funnel is one of India’s top web development
                companies, with a reputation for offering high-quality services.
                We hire the best people to join our team so that we can work
                quickly and effectively to provide our clients with timely
                services. our website developers serve as consultants to our
                clients, guiding them through fundamental aspects of websites
                such as site architecture, design, style, content management
                systems, integration with various apps and marketing, and
                branding. Our team’s years of expertise enable them to put and
                manage all digital assets in accordance with the digital
                marketing plan..
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Demo Section */}
      <section className="request_demo py-5">
        <div className="container">
          <div className="smsContactUs text-center">
            <h2 className="grad-text">Request A Demo</h2>
            <p>EXPLORE OUR FULLY FEATURED BULK SMS PLATFORM</p>
            <div className="loader-line"></div>
            <button className="tabsButton">Contact Us</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteDesigning;

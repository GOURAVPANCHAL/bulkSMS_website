import React, { useEffect } from "react";
import about1 from "../../images/what1.jpg";
import about2 from "../../images/what2.jpg";
import { Helmet } from "react-helmet";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  });
  return (
    <>
      <Helmet>
        <title>About Us - Promotion Ki Duniya</title>
        <meta
          name="description"
          content="Learn about Promotion Ki Duniya, your trusted partner in Bulk SMS solutions since 2017. Discover our story, commitment, vision, and mission."
        />
        <meta
          name="keywords"
          content="Bulk SMS services, SMS marketing solutions, Digital marketing agency, SMS communication, Marketing automation, Text message marketing, Mobile marketing strategies, Communication solutions, Business messaging services, High delivery rates, Real-time SMS tracking, Customizable SMS campaigns, Transactional SMS services, Promotional SMS messages, User-friendly SMS platform, Scalable messaging solutions, API integration for SMS, SMS scheduling features, Improve customer communication, Enhance brand engagement, Increase response rates, Cost-effective marketing strategies, Streamline business communication, Boost customer loyalty, SMS for retail marketing, Healthcare SMS solutions, SMS for education institutions, Travel industry messaging, SMS for event promotions, Real estate SMS alerts"
        />
      </Helmet>
      <section class="page-title  text-center py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-12">
              <h1 class="title">About Us</h1>
              <div class="loader-line"></div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="grad-text">Our Story</h1>
              <p className="heading">
                We are Digital Marketing Agency, We Provide professional
                solutions.
              </p>
              <p>
                Welcome to Promotion Ki Duniya, your trusted partner in Bulk SMS
                solutions. Founded in 2017, we recognized the growing need for
                efficient, reliable, and scalable messaging services in today’s
                fast-paced world. Our mission is to simplify communication for
                businesses of all sizes, helping them reach their audience
                effectively and effortlessly.
              </p>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={about1}
                    className="w-100 mb-3"
                    alt="Promotion Ki Duniya"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src={about2}
                    className="w-100 mb-3"
                    alt="Promotion Ki Duniya"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <p className="grad-text">What We Do</p>
              <div>
                <p className="mb-5">
                  We specialize in providing top-notch Bulk SMS services
                  designed to enhance your communication strategy. Our platform
                  offers a range of features, including high delivery rates,
                  real-time tracking, and customizable messaging options,
                  ensuring that your messages get to the right people at the
                  right time.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <p className="grad-text">Our Commitment</p>
              <div>
                <p className="mb-5">
                  Reliable Delivery : Our advanced technology ensures that your
                  messages are delivered quickly and reliably.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <p className="grad-text">Why Choose Us?</p>
              <div>
                <p>
                  Reliable Delivery : Our advanced technology ensures that your
                  messages are delivered quickly and reliably.
                </p>
                <p>
                  User-Friendly Platform : Easily manage and send messages
                  through our intuitive and user-friendly interface.
                </p>
                <p>
                  Scalable Solutions : Whether you need to send a few messages
                  or millions, our solutions scale with your needs.
                </p>
                <p>
                  Exceptional Support : Our dedicated support team is always
                  here to assist you with any questions or issues.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <p className="grad-text">Our Vision</p>
              <div>
                <p className="mb-5">
                  “To be the global leader in bulk SMS solutions,
                  revolutionizing communication by setting the highest standards
                  for reliability, innovation, and customer satisfaction. We
                  envision a world where businesses of all sizes harness the
                  power of SMS to build stronger connections, drive growth, and
                  deliver exceptional value to their customers. By continuously
                  advancing our technology and expanding our reach, we aim to
                  redefine the future of messaging and become the trusted
                  partner for organizations seeking to elevate their
                  communication strategies.”
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <p className="grad-text">OUR MISSION</p>
              <div>
                <p className="mb-5">
                  “Our mission is to empower businesses with innovative and
                  reliable SMS solutions that drive engagement, enhance
                  communication, and optimize customer relationships. Through
                  our state-of-the-art bulk SMS platform, we deliver seamless
                  transactional and promotional messaging services that enable
                  our clients to connect with their audience effectively and
                  efficiently. We are committed to providing exceptional
                  service, cutting-edge technology, and unparalleled support to
                  help businesses achieve their goals and grow their brand.”
                </p>
                <p className="mb-5">
                  Thank you for choosing Promotion Ki Duniya. We look forward to
                  helping you connect with your audience and grow your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

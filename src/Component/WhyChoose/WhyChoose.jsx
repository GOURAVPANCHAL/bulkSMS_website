import React from "react";
import whychoose from "../../images/vectr.png";
const WhyChoose = () => {
  return (
    <>
      <div>
        <div className="container mt-5">
          <div className="row" style={{alignItems:'center'}}>
            <div className="col-md-6">
              <h5>Why Choose Promotion Ki Duniya?</h5>
              <div>
                <h1 className="colorfull_Heading">
                Your Reliable Partner in Digital Success
                </h1>
                <p>
               we recognize the challenges that startup founders face in navigating the tech landscape. With experience supporting over 200 startups, we've evolved from a traditional service provider to your dedicated "Personal Tech Strategist." Our commitment is to empower you every step of the way, ensuring your ventures succeed in the competitive digital realm.
                </p>
                <p>
                We specialize in creating visually stunning and highly functional websites through our comprehensive web design and development services, tailored to meet your specific needs. Our digital marketing expertise spans SEO, social media marketing, PPC advertising, and email campaigns, all designed to effectively connect you with your target audience. By leveraging data-driven performance marketing strategies, we optimize your campaigns in real-time to maximize your return on investment.
                </p>
                <p>
                Moreover, our branding services focus on crafting a strong and memorable brand identity, with cohesive strategies, eye-catching logo designs, and impactful visuals. Join us at Promotion Ki Duniya to enhance your online presence and foster sustainable growth for your business.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img src={whychoose} className="w-100" alt="why-choose-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;

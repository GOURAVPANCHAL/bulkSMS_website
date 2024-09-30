import React, { useEffect } from "react";
import smOptimization from "../../images/social-media.jpg"; // replace with relevant image
import organicStrategy from "../../images/organicStrategy.png";
import influencerMarketing from "../../images/influencerMarketing.png";
import socialAudit from "../../images/socialAudit.png";
import contests from "../../images/contests.png";
import paidAds from "../../images/paidAds.png";
import contentMarketing from "../../images/contentMarketing.png";
import { Helmet } from "react-helmet";

const Smo = () => {
  useEffect(() => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  });
  return (
    <>
    <Helmet>
        <title>Social Media Optimization - Promotion Ki Duniya</title>
        <meta name="description" content="Boost your social media presence with tailored strategies, content creation, and performance analytics." />
      </Helmet>
      {/* Page Title Section */}
      <section className="page-title text-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="title grad-text">Social Media Optimization</h1>
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
            <img
              src={smOptimization}
              className="w-100"
              alt="Social Media Optimization"
            />
          </div>

          {/* Right Column - Description */}
          <div className="col-md-6">
            <p className="heading mb-3">
              Looking to expand your social media growth? We are here for
              everything you need.
            </p>
            <p>THECLICKFUNNEL Digital Marketing Agency</p>
            <p className="mb-3">
              At Promotion Ki Duniya, we specialize in helping you achieve all
              your social media goals. Whether you’re aiming to grow your
              followers, increase engagement, or build brand awareness, we’re
              here to provide expert support and tailored strategies. From
              content creation and platform management to targeted advertising
              and performance analytics, our team is dedicated to elevating your
              online presence. Let us handle everything you need to take your
              social media to the next level, so you can focus on what you do
              best.
            </p>
            <p className="mb-3">
              We are evolving and making our digital marketing experience useful
              for clients’ brands. Our main objective behind our social media
              services is to bring your brand into social conversations between
              your potential consumers. We help build presence on multiple
              social platforms like Facebook, Instagram, Twitter, LinkedIn,
              Pinterest, Koo, YouTube, and many more.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="row mt-5">
          <div className="col-md-5">
            <h2 className="title grad-text">Benefits with TheClickFunnel</h2>
            <p className="mt-3">
              We help your business reflect in sync with your social media
              presence, building you as a brand.
            </p>
          </div>

          {/* Benefit Items */}
          <div className="col-lg-7">
            <div className="row">
              {/* Benefit 1 */}
              <div className="col-md-4 wow smoicon">
                <img
                  src={organicStrategy}
                  alt="Organic Social Media Strategy"
                />
                <h4>Organic Social Media Strategy</h4>
                <p>
                  Optimize profiles, create content, and ensure you’re using the
                  most effective hashtags.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="col-md-4 wow smoicon">
                <img src={influencerMarketing} alt="Influencer Marketing" />
                <h4>Influencer Marketing</h4>
                <p>
                  Strategize and collaborate with influencers to grow your
                  brand’s reach and engagement.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="col-md-4 wow smoicon">
                <img src={socialAudit} alt="Social Media Audit" />
                <h4>Social Media Audit</h4>
                <p>
                  Analyze your current social media standings and explore
                  opportunities for growth.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="col-md-4 wow smoicon">
                <img src={contests} alt="Contests, Promotions, and Giveaways" />
                <h4>Contests, Promotions, and Giveaways</h4>
                <p>
                  Engage your audience with creative contests and promotions to
                  boost interaction.
                </p>
              </div>

              {/* Benefit 5 */}
              <div className="col-md-4 wow smoicon">
                <img src={paidAds} alt="Paid Social Ads" />
                <h4>Paid Social Ads</h4>
                <p>
                  Utilize audience analysis, A/B testing, and more for immediate
                  engagement.
                </p>
              </div>

              {/* Benefit 6 */}
              <div className="col-md-4 wow smoicon">
                <img src={contentMarketing} alt="Content Marketing" />
                <h4>Content Marketing</h4>
                <p>
                  Content remains king – we help with blogs, press releases,
                  eBooks, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Demo Section */}
      <section className="request_demo py-5">
        <div className="container">
          <div className="smsContactUs text-center">
            <h2 className="grad-text">Request A Demo</h2>
            <p>EXPLORE OUR FULLY FEATURED SOCIAL MEDIA SERVICES</p>
            <div className="loader-line"></div>
            <button className="tabsButton">Contact Us</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Smo;

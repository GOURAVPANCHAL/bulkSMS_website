import React, { useEffect } from "react";
import seoImage from "../../images/seo-image.jpg"; // replace with relevant image
import keywordResearch from "../../images/keyword-research.png";
import onPageOptimization from "../../images/on-page-optimization.png";
import linkBuilding from "../../images/link-building.png";
import seoAudit from "../../images/seo-audit.png";
import analyticsReporting from "../../images/analytics-reporting.png";
import localSeo from "../../images/local-seo.png";
import { Helmet } from "react-helmet";

const Seo = () => {
  useEffect(()=>{
    window.scrollTo({
      top:'0',
      behavior:'smooth'
    })
  })
  return (
    <>
    <Helmet>
        <title>Search Engine Optimization (SEO) - TheClickFunnel</title>
        <meta
          name="description"
          content="Unlock the full potential of your website with our expert SEO services, including keyword research, on-page SEO, link-building, and more."
        />
        <meta
          name="keywords"
          content="SEO services, Search Engine Optimization, keyword research, on-page SEO, link building, SEO audit, local SEO"
        />
      </Helmet>
      {/* Page Title Section */}
      <section className="page-title text-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="title grad-text">Search Engine Optimization (SEO)</h1>
              <div className="loader-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container">
        <div className="row">
          {/* Left Column - Image */}
          <div className="col-md-6">
            <img src={seoImage} className="w-100" alt="Search Engine Optimization" />
          </div>

          {/* Right Column - Description */}
          <div className="col-md-6">
            <p className="heading mb-3">
              Unlock the full potential of your website and boost your search rankings with our expert SEO services.
            </p>
            <p>Comprehensive SEO Solutions by TheClickFunnel</p>
            <p className="mb-3">
              Search Engine Optimization (SEO) is the key to increasing the visibility of your business on search engines like Google, Yahoo, and Bing. Our SEO services ensure that your business ranks higher in search results, driving organic traffic and potential customers to your website. With a proven track record, TheClickFunnel offers expert solutions in keyword research, on-page SEO, link-building, and more.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="row mt-5">
          <div className="col-md-5">
            <h2 className="title grad-text">Benefits with TheClickFunnel SEO</h2>
            <p className="mt-3">
              Maximize your website's potential by leveraging our SEO strategies to get ahead of your competition.
            </p>
          </div>

          {/* Benefit Items */}
          <div className="col-lg-7">
            <div className="row">
              {/* Benefit 1 */}
              <div className="col-md-4 col-6 wow fadeInUp">
                <img src={keywordResearch} alt="Keyword Research" />
                <h4>Keyword Research</h4>
                <p>
                  Our team conducts in-depth research to find the most effective keywords for your business.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="col-md-4 col-6 wow fadeInUp">
                <img src={onPageOptimization} alt="On-Page Optimization" />
                <h4>On-Page Optimization</h4>
                <p>
                  We ensure your website’s structure and content are optimized for the best search results.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="col-md-4 col-6 wow fadeInUp">
                <img src={linkBuilding} alt="Link Building" />
                <h4>Link Building</h4>
                <p>
                  Enhance your domain authority with high-quality backlinks from reputable sites.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="col-md-4 col-6 wow fadeInUp">
                <img src={seoAudit} alt="SEO Audit" />
                <h4>SEO Audit</h4>
                <p>
                  We analyze your current SEO efforts and identify areas for improvement.
                </p>
              </div>

              {/* Benefit 5 */}
              <div className="col-md-4 col-6 wow fadeInUp">
                <img src={analyticsReporting} alt="Analytics & Reporting" />
                <h4>Analytics & Reporting</h4>
                <p>
                  Get detailed insights and performance reports on how your SEO strategy is performing.
                </p>
              </div>

              {/* Benefit 6 */}
              <div className="col-md-4 col-6 wow fadeInUp">
                <img src={localSeo} alt="Local SEO" />
                <h4>Local SEO</h4>
                <p>
                  Target local customers by optimizing your business for location-based searches.
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
            <p>EXPLORE OUR FULLY FEATURED SEO SERVICES</p>
            <div className="loader-line"></div>
            <button className="tabsButton">Contact Us</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Seo;

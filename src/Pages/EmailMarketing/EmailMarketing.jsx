import React, { useEffect } from "react";
import email from "../../images/rimg1.png";
import RequestDemo from "../RequestDemo/RequestDemo";

import email1 from "../../images/email1.png";
import email2 from "../../images/email2.png";
import email3 from "../../images/email3.png";
import email4 from "../../images/email4.png";
import email5 from "../../images/email5.png";
import email6 from "../../images/email6.png";
import email7 from "../../images/email7.png";
import email8 from "../../images/email8.png";
import email9 from "../../images/email9.png";
import { Helmet } from "react-helmet";

const EmailMarketing = () => {
  useEffect(() => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  });
  return (
    <>
      <Helmet>
        <title>Bulk Email Marketing | Professional Email Campaigns</title>
        <meta
          name="description"
          content="Launch professional bulk email campaigns with ease. Reach your audience effectively through targeted email marketing."
        />
        <meta
          name="keywords"
          content="bulk email marketing, email campaigns, email marketing services, newsletters, transactional emails, marketing emails, subscriber management, email templates"
        />
      </Helmet>
      <section className="page-title  text-center py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h1 className="title grad-text">Bulk Email Marketing</h1>
              <div className="loader-line"></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="container">
            <div className="heading text-center mb-5">
              Execute professional bulk email campaign in minutes
            </div>

            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-md-6">
                <p className="mb-5">
                  We provide an easy to use bulk email marketing platform that
                  helps you launch professional marketing campaigns. Select
                  predefined templates, add your message and your campaign is
                  ready to go LIVE. Use email marketing to send:
                </p>
                <ul className="features">
                  <li>
                    <i class="bi bi-check2-circle tick"></i> Newsletters
                  </li>
                  <li>
                    <i class="bi bi-check2-circle tick"></i> Latest / popular
                    blogs
                  </li>
                  <li>
                    <i class="bi bi-check2-circle tick"></i> Promote products
                    services
                  </li>
                  <li>
                    <i class="bi bi-check2-circle tick"></i> Share your brand’s
                    story
                  </li>
                  <li>
                    <i class="bi bi-check2-circle tick"></i> Nature leads
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <img src={email} alt="bulk email" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container text-center mt-5 mb-5">
        <h2 className="title grad-text">IVR Service Provider in India</h2>
        <div className="loader-line"></div>

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="whatsapp-box">
              <img
                src={email1}
                className="w-30 mb-3"
                alt="Auto Dialer Services"
              />
              <h3 className="heading mb-3">Manage subscriber base</h3>
              <p>
                Track subscribers activity, get relevant stats, segment
                audience, & manage your subscribers at one place.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="whatsapp-box">
              <img
                src={email2}
                className="w-30 mb-3"
                alt="Missed Call Services"
              />
              <h3 className="heading mb-3">Customized emails</h3>
              <p>
                Set up customized email campaigns for your audience based on the
                user persona and get the email notified.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="whatsapp-box">
              <img src={email3} className="w-30 mb-3" alt="Autoresponder" />
              <h3 className="heading mb-3">Autoresponder</h3>
              <p>
                Immediately engage with your new subscribers / leads with an
                autoresponder feature.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="whatsapp-box">
              <img src={email4} className="w-30 mb-3" alt="Bulk Voice Calls" />
              <h3 className="heading mb-3">Email newsletter</h3>
              <p>
                Choose a template, create your message, and send engaging email
                newsletters easily.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="whatsapp-box">
              <img src={email5} className="w-30 mb-3" alt="Bulk Voice Calls" />
              <h3 className="heading mb-3">Spam reporting</h3>
              <p>
                We keep the spammers out. Get a list of users who report your
                emails under spam through FBL.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="whatsapp-box">
              <img src={email6} className="w-30 mb-3" alt="Bulk Voice Calls" />
              <h3 className="heading mb-3">Analytics and data</h3>
              <p>
                Check your campaigns open rate, bounce rate, and engagement
                levels with analytics reporting.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="whatsapp-box">
              <img src={email7} className="w-30 mb-3" alt="Bulk Voice Calls" />
              <h3 className="heading mb-3">Predefined templates</h3>
              <p>
                Give a professional touch to your emails with predefined
                templates and designs.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="whatsapp-box">
              <img src={email8} className="w-30 mb-3" alt="Bulk Voice Calls" />
              <h3 className="heading mb-3">100% Deliverability</h3>
              <p>
                Launch email campaigns with 100% deliverability. Authenticate
                emails using SPF and domain keys.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="whatsapp-box">
              <img src={email9} className="w-30 mb-3" alt="Bulk Voice Calls" />
              <h3 className="heading mb-3">API Connectivity</h3>
              <p>
                Easily connects with email API for transactional email elerts in
                real time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container text-center">
          <div className="mb-5">
            <p className="title grad-text">What is bulk email marketing?</p>
            <p className="mt-3">
              Bulk Email marketing is a communication mode to promote your
              product, share your brand story, and connect with your
              subscribers. It’s a cost-effective way to reach and engage with
              your customers. Nurture your leads, potential customers, and
              retain your old customers through targeted email marketing
              campaigns. With our easy to use platform, create and execute
              successful campaigns in minutes. We help you to send targeted
              campaigns that ensure 100% deliverability and higher ROI.
            </p>
          </div>
          <div>
            <p className="title grad-text">
              What is marketing email and transactional email?
            </p>
            <p className="mt-3">
              There are two types of email campaigns that run: marketing emails
              and transactional emails. Both types of emails are used at
              different stages of the funnel to connect with your audience and
              build lasting relationships.
            </p>
          </div>
          <div>
            <p className="title grad-text">Transactional emails</p>
            <p className="mt-3">
              Transactional emails are those that contain unique information
              about every recipient. These emails are sent after any user action
              taken on the site. The purpose is to help the user complete the
              process. These mails help to build good relationships with
              customers and boost the user experience. Here are a few examples
              of transactional emails.
            </p>
            <ul className="features text-start">
              <li>
                <i class="bi bi-check2-circle tick"></i> Monthly statements
              </li>
              <li>
                <i class="bi bi-check2-circle tick"></i> Reset password
              </li>
              <li>
                <i class="bi bi-check2-circle tick"></i> Order confirmation
              </li>
              <li>
                <i class="bi bi-check2-circle tick"></i> Legal updates
              </li>
            </ul>
          </div>
          <div>
            <p className="title grad-text">Marketing emails</p>
            <p className="mt-3">
              Marketing emails are purely commercial emails. Marketing emails
              are sent to promote your product/services and give voice to your
              brand. The aim is to prompt the user to take the required action.
              The goals could vary due to business needs. For instance, any mail
              that triggers you to make the purpose, downloads, or send a query
              comes under marketing email. These emails are delivered to engage
              maximum users who are interested in specific information. Here are
              a few examples of marketing mails.
            </p>
            <ul className="features text-start">
              <li>
                <i class="bi bi-check2-circle tick"></i> Newsletters
              </li>
              <li>
                <i class="bi bi-check2-circle tick"></i> Latest product launch
                information
              </li>
              <li>
                <i class="bi bi-check2-circle tick"></i> Free download/guides
              </li>
              <li>
                <i class="bi bi-check2-circle tick"></i> Generate query
              </li>
            </ul>
          </div>
        </div>
      </section>
      <RequestDemo />
    </>
  );
};

export default EmailMarketing;

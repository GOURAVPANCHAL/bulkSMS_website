import React, { useEffect } from "react";
import "./dlt.css";
import { Helmet } from "react-helmet";

const DLT = () => {
    useEffect(() => {
        window.scrollTo({
            top: '0',
            behavior: 'smooth',
        });
    }, []);

    return (
        <>
         <Helmet>
                <title>DLT (Distributed Ledger Technology) - Promotion Ki Duniya</title>
                <meta name="description" content="Learn about DLT (Distributed Ledger Technology) in the context of SMS, its regulatory framework, and how it secures SMS communications." />
                <meta name="keywords" content="DLT, Distributed Ledger Technology, SMS regulation, SMS compliance, Bulk SMS, SMS security, SMS management" />
            </Helmet>
            <section className="page-title text-center py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <h1 className="title">DLT (Distributed Ledger Technology)</h1>
                            <div className="loader-line"></div>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <div className="container">
                    <div className="heading mb-5">
                        What is DLT (Distributed Ledger Technology)?
                    </div>
                    <p>
                        DLT, or Distributed Ledger Technology, is a general term that refers to technologies like blockchain
                        that use decentralized networks to record and manage data. However, when talking about DLT in the
                        context of SMS (Short Message Service), it usually refers to the regulatory framework and technology
                        designed to manage and secure SMS traffic.
                    </p>
                    <p className="mb-5">
                        In some regions, particularly in India, DLT is used to ensure that SMS communication is compliant
                        with regulations to prevent spam and fraud. This system requires businesses to register their SMS
                        templates and sender identities with a DLT platform. This way, SMS traffic can be monitored, and
                        it can be ensured that messages are legitimate and comply with the rules set by regulatory authorities.
                    </p>
                    <div className="mb-5">
                        {/* <img src={bulksmstrans} className="w-100" alt="Bulk SMS" /> */}
                    </div>
                    <p>
                        So, in summary, DLT for SMS is about using technology and regulations to manage and secure SMS
                        communications, making sure they're authentic and in line with legal requirements.
                    </p>
                </div>
            </div>

            {/* Timeline Steps */}
            <div className="timeline-main">
                <div className="timeline-wrap">
                    <div className="timeline-card">
                        <div className="timeline-card-wrap">
                            <div className="card-head-wrap">
                                <h2 className="timeline-card-head">
                                    Step 1: Entity/Enterprise Registration
                                </h2>
                            </div>
                            <p className="timeline-card-text">
                                This includes details of KYC (Know Your Customer) documents like PAN, GST, TAN, CIN, etc.
                                The process has been designed for easy and quick completion. Your organization will get a
                                unique Entity ID.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-card">
                        <div className="timeline-card-wrap">
                            <div className="card-head-wrap">
                                <h2 className="timeline-card-head">
                                    Step 2: Header (Sender ID) registration
                                </h2>
                            </div>
                            <p className="timeline-card-text">
                                Messages are classified into Promotional, Transactional, Service Explicit, and Service Implicit.
                                Entities need to register all their headers on the platform. Every header gets a unique Header ID
                                that is shared across other DLT platforms seamlessly.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-card">
                        <div className="timeline-card-wrap">
                            <div className="card-head-wrap">
                                <h2 className="timeline-card-head">
                                    Step 3: Content Template Registration
                                </h2>
                            </div>
                            <p className="timeline-card-text">
                                Entities are required to register all their templates on the blockchain DLT SMS system. Once a
                                template is created, the entity retains the template ownership across all platforms. Every
                                template gets a unique Template ID that is shared across other Blockchain DLT SMS platforms
                                seamlessly. Every Content Template should contain ‘Brand Name(s)’.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-card">
                        <div className="timeline-card-wrap">
                            <div className="card-head-wrap">
                                <h2 className="timeline-card-head">
                                    Step 4: Templates registered on DLT Platform
                                </h2>
                            </div>
                            <p className="timeline-card-text">
                                Once your template gets approved from the DLT platform, all the approved templates must be
                                submitted in Excel format.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <p><b>Note:</b></p>
                <p>
                    You can register on any of the DLT platforms among Jio, Vodafone, Airtel, BSNL, Videocon, Tata Teleservices.
                    We recommend Jio as its registration services are better compared to others. For registering with any operator
                    or telecom partner, you need to pay Rs. 5900.
                </p>
            </div>
        </>
    );
};

export default DLT;

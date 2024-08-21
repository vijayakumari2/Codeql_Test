import React from "react"
import service1 from "../../images/image.jpg"
import service2 from "../../images/home2.jpg"
import service3 from "../../images/banner44.jpg"

const OurServices = () => {
  return (
    <>
      {/* Service Left Image Style */}
      <div className="about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <img src={service1} alt="service" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12 pt-40">
              <div className="about-content">
                <div className="content">
                  {/* <span className="sub-title">
                    <img src={starIcon} alt="icon" /> Services
                  </span> */}

                  <h2>Business Domain Experience</h2>
                  <p>
                    We've worked across a wide range of industries, each with
                    their specific needs and challenges. This gives us a unique
                    perspective that we bring to every client relationship.{" "}
                    <br />
                    We take a proactive approach, looking closely at your entire
                    ecosystem, bringing fresh perspective and insight to help
                    you achieve results that bridge what is with what can be.
                  </p>
                  <ul className="about-list mb-0">
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Carbon Market
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i> GreenIT
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Audit & Taxation
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Pensions
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Payments
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Engineering
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Logistic
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      E-Commerce
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Supply Chain Management
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>Open Banking & Finance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Left Image Style */}

      {/* Service Right Image Style */}
      <div className="our-mission-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="our-mission-content">
                <div className="content">
                  {/* <span className="sub-title">
                    <img src={starIcon} alt="icon" /> Services
                  </span> */}

                  <h2>Technology Expertise</h2>
                  <p>
                    We leverage the spectrum of our engineering and consulting
                    resources across multi-cloud, API Enablement and software
                    development, to work flexibly, seamlessly, and react quickly
                    to client needs to reach their short-term and long-term digital
                    potential.
                    <br /> We are technologists focused on accelerating digital
                    delivery with deep practical experience in start-up,
                    enterprise and public sector projects.
                  </p>

                  <ul className="our-mission-list mb-0">
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Cloud Native
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Data Analytics
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Multi-cloud
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Microservices
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Event Driven
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      CIAM
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      API-LED Connectivity
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Bespoke Software
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Blockchain
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      AI & ML
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Application Modernization
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="our-mission-image">
                <img src={service2} alt="service" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Right Image Style */}
      <div className="about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <img src={service3} alt="service" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  {/* <span className="sub-title">
                    <img src={starIcon} alt="icon" /> Services
                  </span> */}

                  <h2>Delivery Excellence</h2>
                  <p>
                    We work side-by-side with our clients as one team with a
                    shared ambition to achieve extraordinary results. There's a
                    practicality in our thinking, bringing an action orientation
                    to our integrated expertise. <br />
                    We leverage proven methodologies to identify gaps in
                    execution capabilities, and work with our clients to define
                    a step-by-step roadmap to orchestrate change and sustain
                    impact.
                  </p>
                  <ul className="about-list mb-0">
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Agile
                    </li>

                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      On-time
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Quality Assurance
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      ROI
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Standards
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Compliant
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>
                      Self-Sufficiency
                    </li>
                    <li className="single-industries-serve-box">
                      <i className="flaticon-tick"></i>Future-Proof
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurServices

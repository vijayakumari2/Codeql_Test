import React from "react"

import image from "../../images/qa-flow.png"
import ServiceSidebar from "./ServiceSidebar"
import service3 from "../../images/services/qa3.jpg"
import service1 from "../../images/services/qa1.jpg"
import service2 from "../../images/services/qa2.jpg"
import service4 from "../../images/services/qa4.jpg"
import service5 from "../../images/services/qa5.jpg"
import service6 from "../../images/services/qa6.jpg"
import service7 from "../../images/services/qa7.jpg"

import icon1 from "../../images/icons/automated11.png"
import icon2 from "../../images/icons/manual.png"
import icon3 from "../../images/icons/web.png"
import icon4 from "../../images/icons/api11.png"
import icon5 from "../../images/icons/security11.png"
import icon6 from "../../images/icons/testdata.png"


import service from "../../images/services/qa.jpg"

import SliderComponent from "./SliderComponent"

const QualityAssurance = () => {
  const slidesData = [
    {
      content:
        "API testing tools are essential for verifying the functionality, performance, and security of Application Programming Interfaces (APIs).",
      features: ["JMETER", "POSTMAN", "REST ASSURED"],
      image: service1,
    },
    {
      content:
        "Performance testing tools are crucial for assessing the responsiveness, scalability, and reliability of software applications under varying workloads.",
      features: ["JMETER", "LOAD RUNNER", "SILK PERFORMER"],
      image: service2,
    },
    {
      content:
        "Automated UI testing tools ensure software applications meet design specifications and are free of functional defects. They deliver a consistent user experience across various browsers and platforms.",
      features: ["SELENIUM", "PROTRACTOR", "CYPRESS", "PLAYWRIGHT"],
      image: service3,
    },
    {
      content:
        "Security testing tools are crucial for identifying and addressing vulnerabilities in software applications, ensuring robust protection against security threats.",
      features: ["HCL APPSCAN", "BURP SUITE", "ZED ATTACK PROXY (ZAP)"],
      image: service4,
    },
    {
      content:
        "Automated mobile testing tools are essential for ensuring the functionality, usability, and performance of mobile applications across different devices and platforms.",
      features: ["APPIUM"],
      image: service5,
    },
    {
      content:
        "Continuous Integration (CI) and Continuous Delivery (CD) tools play a vital role in automating the software development and release processes.",
      features: ["CI / CD", "JENKINS"],
      image: service6,
    },
    {
      content:
        "Test management and defect tracking tools are essential for organizing test activities, managing test cases, and tracking and resolving defects throughout the software development lifecycle.",
      features: ["JIRA", "AZURE DEVOPS", "XRAY"],
      image: service7,
    },
  ]
  return (
    <>
      <section className="services-details-area ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="services-details-image" id ="quality-assurance">
                    <img src={service} alt="about" />
                  </div>
                  <div className="services-details-desc justify-content">
                    {/* <span className="sub-title">Consulting & Advisory</span> */}
                    <div>
                      <h2 className="main-banner-image" >Quality Assurance</h2>
                      <p>
                        At <b className="bold-text-color">AppNetWise</b>,
                        excellence is our standard. Our dedicated Quality
                        Assurance team meticulously ensures top-notch software
                        quality through rigorous test planning, precise
                        execution, and an unwavering commitment to uncovering
                        defects. From functional and regression testing to
                        performance and security assessments, we leave no stone
                        unturned. Trust us to deliver software that meets the
                        highest standards of quality and reliability.
                      </p>
                      <p>
                        Our team leverages the latest tools and technologies to
                        provide comprehensive testing solutions that guarantee
                        your software is robust and ready for market. By
                        combining automated and manual testing methods, we
                        ensure thorough coverage and quick identification of
                        issues. With AppNetWise, you can be confident that your
                        software will perform flawlessly under all conditions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <ServiceSidebar />
                </div>
              </div>
              <div
                className=" services-area bg-f1f8fb"
                style={{
                  padding: "40px",
                  marginTop: "40px",
                  borderRadius: "24px",
                }}
              >
                <h2 className="main-banner-image">
                  Quality Assurance Implementation Roadmap
                </h2>

                <p>
                  The Quality Assurance (QA) implementation involves analyzing
                  requirements, creating a test plan, designing test cases,
                  setting up the test environment, executing tests, and
                  documenting and resolving defects. Regression testing ensures
                  existing functionalities remain intact after defect
                  resolution. A release readiness assessment precedes
                  deployment, followed by ongoing monitoring and user feedback.
                  Continuous improvement analyzes the QA process for
                  enhancements, contributing to the goal of delivering
                  high-quality software.
                </p>

                <img src={image} alt="api" />
              </div>
              <div className="ptb-70">
                <h2 className="main-banner-image">Our Testing Services</h2>
                <div className="row justify-content pt-40">
                  <div
                    className="col-lg-4 col-sm-6"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        
                        <img src = {icon1} alt = "banner" width="24%" />
                      </div>
                      <h3>Automated Testing</h3>
                      <p>
                        Involves the use of tools and scripts to execute test
                        cases and compare actual outcomes with expected
                        outcomes. It is efficient for repetitive and regression
                        testing.​​ Benefits include{" "}
                        <b className="bold-text-color">
                          {" "}
                          faster test execution, early bug detection
                        </b>
                        , and the ability to run tests in various environments.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-sm-6"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        
                        <img src = {icon2} alt = "banner" width="24%" />
                      </div>
                      <h3>Manual Testing</h3>
                      <p>
                        A process where testers manually execute test cases
                        without using any automation tools, manual testing
                        involves simulating end-user scenarios to{" "}
                        <b className="bold-text-color">identify bugs</b> and
                        ensure the software meets{" "}
                        <b className="bold-text-color">user expectations</b>. It
                        is valuable for exploratory testing, usability testing,
                        and scenarios that are challenging to automate.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                       
                        <img src = {icon3} alt = "banner" width="24%" />
                      </div>
                      <h3>Web Testing</h3>
                      <p>
                        Checks web applications for functionality, usability,
                        performance, and security across various browsers and
                        devices. It ensures that the application works as
                        intended, with types of testing including{" "}
                        <b className="bold-text-color">
                          functional, compatibility, performance, and security
                          testing, </b> specific to web applications.
                        
                         
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        
                        <img src = {icon4} alt = "banner" width="24%" />
                      </div>
                      <h3>API Testing</h3>
                      <p>
                        Assesses the functionality, reliability, performance,
                        and security of application programming interfaces
                        (APIs). It ensures that APIs communicate effectively and
                        perform as expected, often using tools like{" "}
                        <b className="bold-text-color">
                          {" "}
                          Postman, SoapUI, and Insomnia
                        </b>
                        .
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                      <img src = {icon5} alt = "banner" width="24%" />
                      </div>
                      <h3>Security Testing</h3>
                      <p>
                        Evaluates a system to identify vulnerabilities and
                        ensure it is resistant to unauthorized access, attacks,
                        and data breaches. It includes penetration testing,
                        vulnerability assessment, and analyzing the system's
                        ability to handle security threats.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        
                        <img src = {icon6} alt = "banner" width="24%" />
                      </div>
                      <h3>Test Data Generation</h3>
                      <p>
                        Involves creating data sets used for testing
                        applications. It ensures that the software functions
                        correctly under various conditions and scenarios. Proper
                        test data helps identify bugs related to{" "}
                        <b className="bold-text-color">
                          data handling, security, and performance.
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="main-banner-image">
                Effective Tools And Technologies Employed By The Team
              </h2>

              <SliderComponent slidesData={slidesData} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default QualityAssurance

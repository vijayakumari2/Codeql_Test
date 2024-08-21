import React from "react"
import service1 from "../../images/services/api1.jpg"
import service2 from "../../images/services/api2.jpg"
import service3 from "../../images/services/api3.jpg"
import service from "../../images/services/api111.png"
import image from "../../images/api-flow.png"
import ServiceSidebar from "./ServiceSidebar"
import SliderComponent from "./SliderComponent"
import icon1 from"../../images/icons/strategy.png"
import icon2 from"../../images/icons/execution.png"
import icon3 from"../../images/icons/tooling.png"

const ApiEnablement = () => {
  const slidesData = [
    {
      content:
        "Drawing from extensive experience spanning various industries and standards, including PSD2, open banking, pensions dashboard, payment, and taxation, we collaborate closely with clients throughout the entire API enablement journey, from API strategy formulation to API product development.",
      features: [
        "PSD2",
        "OPEN BANKING",
        "PENSIONS",
        "APPLICATION PAYMENTS",
        "OPTIMISE",
        "TAXATION",
      ],
      image: service1,
    },

    {
      content:
        "Our expertise encompasses the development of APIs across various domains, including Public, Private, Partner Interconnects, Experience, Process, and System APIs. Leveraging API-first principles and an array of industry-standard technologies, we ensure that APIs are designed and implemented to meet the diverse needs of our clients.",
      features: [
        "API FIRST",
        "API LED",
        "RAML",
        "GRAPHQL",
        "DEVOPS",
        "ASYNC API",
      ],
      image: service2,
    },
    {
      content:
        "    As a vendor-neutral partner, our approach is driven by  both client requirements and organizational capabilities. We carefully assess and recommend the most suitable technologies, to accelerate API enablement initiatives and facilitate application modernization efforts.",
      features: ["APIGEE", "MULESOFT", "KONG", "AZURE APIM"],
      image: service3,
    },
  ]
  return (
    <>
      <section className="services-details-area ptb-70">
        <div className="container">
          <div className="row justify-content">
            <div className="col-lg-12 col-md-12">
              <div className="row justify-content">
                <div className="col-lg-8 col-md-12">
                  <div className="services-details-image" id ="api-enablement">
                    <img src={service} alt="about" />
                  </div>
                  <div className="services-details-desc justify-content">
                    <div>
                      <h2 className="main-banner-image" >API Enablement</h2>

                      <p>
                        At <b className="bold-text-color">AppNetWise</b>, we
                        understand the critical role that API enablement plays
                        in driving digital transformation and empowering
                        businesses to unlock the full potential of their systems
                        and data. Our API enablement solutions are designed to
                        streamline communication between disparate systems,
                        facilitate seamless data exchange, and foster innovation
                        across client organization.
                      </p>
                      <p>
                        With APIs, clients enhance agility and gain a
                        competitive edge. Whether integrating systems or
                        enabling data access, our experts ensure robust,
                        reliable, and future-proof solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12">
                  <ServiceSidebar />
                </div>
              </div>
              {/* <blockquote>
                  <p>
                    Being vendor neutral allows us to deliver unparalleled value
                    by utilizing best-in-class products and services tailored to
                    our clients' needs.
                  </p>
                </blockquote> */}
              <div
                className=" services-area bg-f1f8fb"
                style={{
                  padding: "40px",
                  marginTop: "40px",
                  borderRadius: "24px",
                }}
              >
                <h2 className="main-banner-image">API Strategy Overview</h2>

                <p>
                  Our API strategy begins by thoroughly assessing business needs
                  and market opportunities, identifying where APIs can add
                  significant value. Through comprehensive evaluations, we
                  leverage industry-standard specifications such as OAS and
                  RAML, alongside technologies like GraphQL, to design
                  user-friendly APIs that cater to evolving demands. This
                  process involves engaging key stakeholders and fostering
                  collaborations with external partners to ensure alignment and
                  maximize innovation potential.
                </p>
                <p>
                  Once the assessment is complete, we establish a robust API
                  governance framework to guide development, management, and
                  consumption. Leveraging platforms like APIGEE or MULESOFT, we
                  enforce policies and standards, ensuring security, compliance,
                  and consistency across the API lifecycle. By prioritizing
                  measures such as authentication, authorization, and
                  encryption, we safeguard APIs against threats, while
                  continuous monitoring and optimization enable us to adapt and
                  evolve in alignment with our organization's strategic
                  objectives and market dynamics.
                </p>
                <img src={image} alt="api" />
              </div>
              <div className="ptb-70">
                <h2 className="main-banner-image">What we do?</h2>
                <div className="row justify-content">
                  <div
                    className="col-lg-4 col-sm-6"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        
                        <img src={icon1} alt="banner" width = "20%" />
                        
                      </div>
                      <h3>Strategy</h3>
                      <p>
                        Our approach to API strategy is forward-thinking,
                        considering the future needs of your organization rather
                        than solely focusing on initial API implementations. We
                        specialize in defining{" "}
                        <b className="bold-text-color">API strategies</b> that
                        align with long-term goals and growth.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-sm-6"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                      
                        <img src={icon2} alt="banner" width = "20%" />
                      </div>
                      <h3>Tooling</h3>
                      <p>
                        Utilizing APIM, we streamline end-to-end API lifecycle
                        management. Our expertise lies in mapping requirements
                        to APIM product features, evaluating and selecting the
                        most suitable tools, and fostering the development of
                        these capabilities within your organization.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                      <img src={icon3} alt="banner" width = "20%" />
                      </div>
                      <h3>Execution</h3>
                      <p>
                        We excel in executing API capabilities across your
                        organization, empowering teams to leverage APIs
                        effectively. Additionally, we aid in transforming APIs
                        into products, unlocking new revenue streams and
                        enhancing business opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="main-banner-image">
                API Enablement Integrated Services
              </h2>
              <SliderComponent slidesData={slidesData} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ApiEnablement

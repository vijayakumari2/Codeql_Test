import React from "react"
import ServiceSidebar from "./ServiceSidebar"
import service from "../../images/cm.jpg"
import service1 from "../../images/c5.jpg"
import service2 from "../../images/c3.jpg"
import service3 from "../../images/c7.png"
import SliderComponent from "./SliderComponent"

const ServiceDetailsContent = () => {
  const slidesData = [
    {
      image: service1,
      content: (
        <p>
          Our platform seamlessly integrates carbon credit trading with Codefi
          in a secure microservices architecture, delivering cloud-native
          functionality. It ensures bank-grade security, meeting stringent
          standards for data protection and compliance.
        </p>
      ),
      features: [
        "CODEFI",
        "CLOUD NATIVE",
        "MICROSERVICES",
        "BANK GRADE SECURE PLATFORM",
      ],
    },
    {
      image: service2,
      content: (
        <p>
          Our tech stack comprises cutting-edge technologies and powerful tools,
          allowing our team to expertly build and maintain our sophisticated
          infrastructure efficiently.
        </p>
      ),
      features: [
        "NODE.JS",
        "NESTJS",
        "REACT",
        "TYPESCRIPT",
        "COSMOS DB",
        "POSTGRESQL",
        "REDIS",
        "KAFKA",
        "HYPERLEDGER BESU",
        "CIAM (AUTH0)",
        "API-LED ARCHITECTURE",
      ],
    },
    {
      image: service3,
      content: (
        <p>
          We ensure quality through automated testing (Postman for API, Selenium
          for UI, JMeter for performance) and fully automated CI/CD using
          GitOps, emphasizing an all-code approach and stringent gating.
        </p>
      ),
      features: [
        "POSTMAN",
        "SELENIUM",
        "JMETER",
        "GITOPS",
        "CI / CD",
        "DEVOPS",
        "ALL CODE APPROACH",
      ],
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
                  <div className="services-details-image" id = "carbon-market">
                    <img src={service} alt="about" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <ServiceSidebar />
                </div>
              </div>
              <div className="services-details-desc">
                <div>
                  <h2 className="main-banner-image">Carbon Market</h2>
                  <p>
                    At <b className="bold-text-color">AppNetWise</b>, we
                    developed a cutting-edge Carbon Credits Trading Platform,
                    showcasing our expertise in creating{" "}
                    <b className="bold-text-color">
                      {" "}
                      robust, scalable, and feature-rich{" "}
                    </b>
                    showcasing our expertise in creating solutions. The platform
                    features bank-grade security, blockchain technology, and
                    cloud-native architecture for seamless carbon credits
                    trading.
                  </p>
                  <p>
                    Built with{" "}
                    <b className="bold-text-color">
                      microservices and API-led connectivity
                    </b>
                    , it employs Kafka messaging for real-time communication and
                    robust identity and access management with a zero-trust
                    approach. We utilized{" "}
                    <b className="bold-text-color">DevOps and DevSecOps</b>{" "}
                    practices throughout the project, enhancing collaboration,
                    automation, and security.
                  </p>
                  <p>
                    <b className="bold-text-color">Automation </b> efforts
                    included development and deployment workflows, pipelines,
                    and testing, accelerating development and minimizing errors.
                    AppNetWise's expertise in carbon markets is demonstrated
                    through this sophisticated, secure, and efficient platform,
                    integrating key market players and advanced technologies.
                  </p>
                </div>
              </div>
              <blockquote>
                <p>
                  Carbon credits provide a mechanism to reduce greenhouse gas
                  emissions by allowing companies to offset unavoidable
                  emissions through the purchase of credits from certified
                  projects that support community development, ecosystem
                  preservation, or the implementation of efficient
                  emission-reducing technologies.
                </p>
              </blockquote>
              <h2 className="main-banner-image pt-40">
                Carbon Credit Trading Platform{" "}
              </h2>
              <SliderComponent slidesData={slidesData} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetailsContent

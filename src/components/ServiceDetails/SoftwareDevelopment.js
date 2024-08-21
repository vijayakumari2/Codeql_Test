import React from "react"
import service1 from "../../images/services/sd3.jpg"
import service2 from "../../images/services/sd2.jpg"
import service from "../../images/services/sd1.jpg"
import ServiceSidebar from "./ServiceSidebar"
import SliderComponent from "./SliderComponent"
import icon1 from "../../images/icons/microservices.png"
import icon2 from "../../images/icons/eventdriven.png"
import icon3 from "../../images/icons/cloudnative.png"

const SoftwareDevelopment = () => {
  const slidesData = [
    {
      content:
        "We focus to improve the efficiency of existing Software environment, enabling new business capabilities on next-generation architecture and technologies through Reactive, Distributed and Integration Systems.",
      features: [
        "KAFKA",
        "STREAMING ETL",
        "SPRING BOOT",
        " SQL /NO SQL",
        "MULESOFT",
      ],
      image: service1,
    },

    {
      content:
        "Partnering with us, our clients get access to disruptive tools and technologies, and bespoke solutions - from concept, to integration services, to go-to-market - helping them stay ahead of the curve.",
      features: ["CI / CD", "CONTAINERIZATION", "K8S", " SERVICE MESH"],
      image: service2,
    },
  ]
  return (
    <>
      <section className="services-details-area ptb-70">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 col-md-12">
              <div className="row ">
                <div className="col-lg-8 col-md-12">
                  <div className="services-details-image" id ="software-development">
                    <img
                      src={service}
                      alt="about"
                      style={{ height: "500px" }}
                    />
                  </div>
                  <div className="services-details-desc justify-content">
                    {/* <span className="sub-title">Consulting & Advisory</span> */}
                    <div>
                      <h2 className="main-banner-image" >Software Development</h2>

                      <p>
                        Software developed using best practices, standards,
                        technologies and tools help to streamline, improve
                        efficiency and future proof the business. Legacy
                        software comes with bigger risks, is expensive to
                        maintain, improve, and transport, and hinders options
                        for tapping into emerging growth opportunities.
                      </p>
                      <p>
                        We modernise legacy Applications, minimising business
                        disruption, by leveraging the latest architectural
                        patterns, tools and technologies. We design and build
                        software to solve your challenges and better business
                        outcomes. Our engineers combine innovation, experience
                        and pragmatism to deliver exceptional technology
                        consultancy and measurable results with every project.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <ServiceSidebar />
                </div>
              </div>
              <blockquote>
                <p>
                  We design and build software to solve your challenges and
                  better business outcomes. Our engineers combine innovation,
                  experience and pragmatism to deliver exceptional technology
                  consultancy and measurable results with every project.
                </p>
              </blockquote>

              <div className="ptb-70">
                <h2 className="main-banner-image">What we do?</h2>
                <div className="row justify-content pt-40">
                  <div
                    className="col-lg-4 col-sm-6"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        <img src={icon1} alt="banner" width="24%" />
                      </div>
                      <h3>Microservices</h3>
                      <p>
                        We design and develop Applications using Microservice
                        Architecture for loosely coupled services which can be
                        developed, deployed, and maintained independently.
                        Decouple architecture and eliminate inter-service
                        dependencies so developers can build business logic
                        faster. Also, migrate from Monoliths to Microservices.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-sm-6"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        <img src={icon2} alt="banner" width="24%" />
                      </div>
                      <h3>Event driven solutions</h3>
                      <p>
                        We build highly scalable event-driven services using
                        solutions like Eventing, Event Streaming, Event
                        sourcing. Move beyond traditional Messaging
                        infrastructure like Message Queues (MQs), Enterprise
                        Service Buses (ESBs) as they no longer keep up with the
                        needs of modern applications and move to Modern
                        Messaging workload systems like{" "}
                        <b className="bold-text-color">Kafka, Apache Pulsar</b>.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        <img src={icon3} alt="banner" width="24%" />
                      </div>
                      <h3>Cloud-Native Architecture</h3>
                      <p>
                        We develop Cloud native applications to deliver faster
                        time to market, scalability, simpler management and
                        reduce cost through{" "}
                        <b className="bold-text-color">
                          Containerization, Microservices, CI / CD automation
                        </b>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="main-banner-image">
                Software... constantly innovating
              </h2>
              <SliderComponent slidesData={slidesData} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SoftwareDevelopment

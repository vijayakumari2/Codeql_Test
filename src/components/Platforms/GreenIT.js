import React from "react"
import ServiceSidebar from "./ServiceSidebar"
import service from "../../images/g2.jpg"
import service2 from "../../images/g1.jpg"

const ServiceDetailsContent = () => {
  return (
    <>
      <section className="services-details-area ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="services-details-image" id = "green-it">
                    <img src={service} alt="about" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <ServiceSidebar />
                </div>
              </div>
              <div className="services-details-desc">
                <div>
                  <h2 className="main-banner-image">Green IT</h2>
                  <p>
                    In today's rapidly evolving digital landscape,
                    sustainability has emerged as a critical imperative. Green
                    IT, also known as Green Information Technology, stands at
                    the forefront by advocating for environmentally responsible
                    computing practices.
                  </p>
                  <div className="content">
                    <h5>This encompasses several key pillars:</h5>
                    <ul>
                      <li>
                        {" "}
                        The focus on energy-efficient hardware plays a pivotal
                        role in reducing the carbon footprint of IT operations.
                        By employing technologies that consume less power, such
                        as energy-efficient servers and optimized cooling
                        systems, organizations can significantly lower their
                        energy consumption and operational costs while
                        simultaneously minimizing environmental impact.
                      </li>
                      <li>
                        GreenIT emphasizes the reduction of electronic waste
                        through responsible recycling methods and the promotion
                        of extended product life cycles. This approach not only
                        addresses the ecological consequences of electronic
                        waste but also supports a more sustainable approach to
                        technology consumption.
                      </li>
                      <li>
                        {" "}
                        Green Ops extends these principles beyond hardware to
                        encompass operational practices within data centers,
                        cloud services, and IT infrastructures. By optimizing
                        resource usage, implementing efficient data management
                        strategies, and integrating renewable energy sources
                        where feasible, Green Ops ensures that organizations
                        operate with minimal environmental impact.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <blockquote>
                <p>
                  Our team is committed to the principles of Green Software
                  Practitioners, encompassing GreenIT, Green Ops, and Green
                  Software Development practices. This commitment reflects our
                  dedication to a sustainable future, where innovation and
                  environmental stewardship are core values
                </p>
              </blockquote>
              <div className="ptb-70 ">
                {" "}
                <div className="col-sm-12">
                  <div className="overview-box">
                    <div className="overview-image">
                      <div className="image">
                        <img src={service2} alt="features" />
                      </div>
                    </div>

                    <div className="overview-content">
                      <div className="content right-content">
                        <h3>
                          Leading Initiatives to Advance Sustainable Principles
                        </h3>
                        <p>
                          Our cutting-edge sustainability initiatives in IT
                          operations: Kepler optimizes power consumption in
                          real-time across Kubernetes workloads, reducing energy
                          use and emissions. KubeGreen enhances energy
                          efficiency in containerized applications by providing
                          insights and recommendations. The KEDA operator
                          enables efficient autoscaling based on workload
                          events, optimizing resource allocation and reducing
                          energy consumption.
                        </p>
                        <ol className="features-list">
                          <li>
                            <span>
                              <i className="bx bx-check"></i> Kepler
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="bx bx-check"></i> KubeGreen
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="bx bx-check"></i> KEDA
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="bx bx-check"></i> Cloud Carbon
                              Footprint
                            </span>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetailsContent

import React from "react"
import ServiceSidebar from "./ServiceSidebar"
import service2 from "../../images/services/c2.png"
import service1 from "../../images/services/c1.png"
import service from "../../images/services/cloud-adoption.jpg"
import SliderComponent from "./SliderComponent"
import icon1 from "../../images/icons/cloudstrategy.png"
import icon2 from "../../images/icons/cloudreadiness.png"
import icon3 from "../../images/icons/cloudbuild.png"


const CloudAdoption = () => {
  const slidesData = [
    {
      content:
        "With our experience of implementing cloud Native solutions, we help in modernising current or creating new cloud-native applications. We empower clients in cloud-first thinking and  help in the design and build of solutions using cloud-agnostic tools.",
      features: [
        "CLOUD-FIRST",
        "CLOUD-NATIVE",
        "CLOUD-AGNOSTIC",
        "APPLICATION MODERNISATION",
      ],
      image: service1,
    },

    {
      content:
        "Our multi Cloud capabilities and expertise guide your cloud adoption journey, from planning to migration and build, with minimal business disruption, and help leverage the best cloud services specific to requirements.",
      features: ["LANDING ZONE", "IAAS", "PAAS", "K8S", "DEVOPS", "DEVSECOPS"],
      image: service2,
    },
  ]
  return (
    <>
      <section className="services-details-area ptb-70">
        <div className="container">
          <div className="row justify-content">
            <div className="col-lg-12 col-md-12">
              <div className="row flex">
                <div className="col-lg-8 col-md-12">
                  <div className="services-details-image" id ="cloud-adoption">
                    <img src={service} alt="about" />
                  </div>

                  <div className="services-details-desc justify-content">
                    
                    <div>
                      <h2 className="main-banner-image" >Cloud Adoption</h2>
                      <p>
                        Cloud adoption is the biggest business enabler for
                        Digital Transformation. Discussion of deploying
                        technology in an agile enterprise would not be complete
                        without mentioning cloud infrastructure —{" "}
                        <b className="bold-text-color">public</b>,{" "}
                        <b className="bold-text-color">private</b>, or{" "}
                        <b className="bold-text-color">hybrid</b>.
                      </p>
                      <p>
                        Cloud infrastructure allows companies to obtain
                        computing and storage capacity on demand, skip
                        bureaucratic procedures and spend seconds provisioning
                        an environment instead of waiting for weeks.
                      </p>
                      <p>
                        Our work is always driven by client needs, for which
                        reason we are vendor neutral. This means we can deliver
                        value for clients by leveraging best-in-class vendor
                        products and services to always make a positive impact.
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
                  The cost of legacy systems is astonishing; enterprises spend
                  millions just to keep their systems working. Only a move to
                  the cloud and new technology can solve these problems.
                </p>
              </blockquote>
              <div className="ptb-70">
                <h2 className="main-banner-image">What we do?</h2>
                <div className="row justify-content pt-40">
                  <div className="col-sm-4" style={{ display: "flex" }}>
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                       
                        <img src = {icon1} alt = "banner" width="24%"/>
                        
                           
                      </div>
                      <h3>Cloud Strategy</h3>
                      <p>
                        We design a strategy to navigate the landscape of cloud
                        solutions, platforms and tooling, assessing how and
                        where to adopt them to drive value. Depending on the
                        needs we help with the right cloud services -
                        <b className="bold-text-color">
                          IaaS, FaaS, CaaS, PaaS, SaaS,{" "}
                        </b>
                        and Cloud approach -{" "}
                        <b className="bold-text-color">Single, Multi, Hybrid</b>
                        .
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-4" style={{ display: "flex" }}>
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        
                        <img src = {icon2} alt = "banner" width="24%" />
                      </div>
                      <h3>Cloud Readiness Assessment</h3>
                      <p>
                        We determine the current readiness across the
                        organisation's IT landscape, provide guidance on the
                        right migration path, and define subsequent steps to
                        cloud adoption -{" "}
                        <b className="bold-text-color">Re-host to Re-build</b>.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-sm-4 offset-lg-0 offset-sm-3"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        
                        <img src = {icon3} alt = "banner" width="24%" />
                      </div>
                      <h3>Cloud Build & Migration</h3>
                      <p>
                        Accelerating and de-risking Landing Zone deployments lay
                        a solid foundation for a successful cloud program.
                        Large-scale mass migration including lift and shift and
                        re-architecture approaches using a value-driven
                        approach. We{" "}
                        <b className="bold-text-color">
                          Re-host, Re-build, Re-write
                        </b>{" "}
                        to cloud with minimal business disruption
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="main-banner-image">
                Cloud... Private | Public | Hybrid
              </h2>

              <SliderComponent slidesData={slidesData} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CloudAdoption

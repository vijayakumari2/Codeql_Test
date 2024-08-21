import React from "react"
import icon1 from "../../images/icons/businesscaseicon.png"
import icon2 from "../../images/icons/tech-service.png"
import icon3 from "../../images/icons/digital-transformation.png"
import ServiceSidebar from "./ServiceSidebar"
import SliderComponent from "./SliderComponent"
import service2 from "../../images/services/ca-1.png"
import service3 from "../../images/services/ca-2.png"
import service from "../../images/services/consulting-advisory.jpg"

const ConsultingAndAdvisory = () => {
  const slidesData = [
    {
      content:
        "We assess your organization, pinpoint execution gaps, and define essential technologies to craft a tailored digital innovation roadmap. Our collaborative solutions accelerate value delivery while minimizing complexity, risk, and cost.",
      features: ["ASSESS", "PLAN", "CYPRESS", "IMPLEMENT", "OPTIMISE", "ROI"],
      image: service2,
    },

    {
      content:
        "Amid rapid digital changes, companies face both risks and opportunities. We offer ongoing, informed advice by monitoring emerging trends and technological developments, empowering clients to align their IT strategy and systems proactively.",
      features: [
        "INDUSTRY TRENDS",
        "IT ECOSYSTEM",
        "VENDOR CAPABILITIES",
        "BEST PRACTICES",
      ],
      image: service3,
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
                  <div className="services-details-image" id = "consulting-advisory">
                    <img src={service} alt="about"  />
                  </div>

                  <div className="services-details-desc">
                   
                    <div>
                      <h2 className="main-banner-image"  >Consulting & Advisory</h2>
                      <p >
                        Digital transformation puts entirely new demands and
                        expectations on your systems and architecture. Once an
                        organisation understands the different phases of their
                        digital modernisation journey, its leaders should assess
                        where they stand before embarking on their journey. A
                        deep dive into their processes, business goals and
                        vision will help them set the pace for their journey
                        with a clear roadmap.
                      </p>
                      <p >
                        We provide the assurance that future visions are built
                        on strong foundations, that they’re informed by relevant
                        insights, and guided by clear judgement. In all we do,
                        we define the what, how, and why of change to support
                        smart, sure decision-making.
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
                  The more value a transformation captures as it progresses, the
                  more it becomes self-funding and the greater the support it
                  gains. Often a company’s approach is to let a thousand flowers
                  bloom. But this spreads scarce resources thinly. 
                </p>
              </blockquote>
              <div className="ptb-70 ">
                <h2 className="main-banner-image">What we do?</h2>
                <div className="row justify-content pt-40 ">
                  <div className=" col-sm-4" style={{ display: "flex" }}>
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        <img src={icon1} alt="banner" width="24%" />
                      </div>
                      <h3>Business Case & Roadmap</h3>
                      <p>
                        We focus on your most critical IT challenges and
                        opportunities, defining timelines, strategies and
                        resources to achieve your objectives, growth, and new
                        business potential.
                      </p>
                    </div>
                  </div>

                  <div className=" col-sm-4" style={{ display: "flex" }}>
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                      <img src={icon2} alt="banner" width="24%" />
                      </div>
                      <h3>Tech & Engineering Due Diligence</h3>
                      <p>
                        We help assess your organisation’s tech-stack and
                        capabilities, and propose comprehensive technology
                        pathways, architecture and tooling.
                      </p>
                    </div>
                  </div>

                  <div
                    className=" col-sm-4 offset-lg-0 offset-sm-3"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        <img src={icon3} alt="banner" width="24%"/>
                      </div>
                      <h3>Technology Transformation</h3>
                      <p>
                        We adopt tech trends and emerging technologies, in
                        combination with innovation, experience and pragmatism,
                        to deliver exceptional results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="main-banner-image">
                Consulting & Advisory... seeing beyond
              </h2>

              <SliderComponent slidesData={slidesData} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ConsultingAndAdvisory

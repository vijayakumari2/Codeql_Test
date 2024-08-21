import React from "react"

import image from "../../images/devops-flow.png"
import ServiceSidebar from "./ServiceSidebar"
import service1 from "../../images/services/d1.jpg"
import service2 from "../../images/services/d2.png"
import service3 from "../../images/services/d3.jpg"
import service4 from "../../images/services/d4.jpg"
import service5 from "../../images/services/d5.jpg"
import service6 from "../../images/services/d6.jpg"
import service7 from "../../images/services/d7.jpg"
import service from "../../images/services/devops111.png"
import SliderComponent from "./SliderComponent"

import icon20 from"../../images/icons/expertise12.png"
import icon2 from"../../images/icons/proactive12.png"
import icon3 from"../../images/icons/costeffective12.png"
import icon4 from"../../images/icons/proven12.png"
import icon5 from"../../images/icons/continuous12.png"
import icon6 from"../../images/icons/enchanced12.png"


const DevOps = () => {
  const slidesData = [
    {
      image: service1,
      content: (
        <p>
          <b className="bold-text-color">
            Continuous Integration and Deployment (CI/CD): </b>
          Automates the software development process, integrating code changes,
          testing them, and deploying them to production efficiently.
        </p>
      ),
      features: ["JENKINS", "GITLAB", "AWS CODEPIPELINE", "AZURE PIPELINE"],
    },
    {
      image: service2,
      content: (
        <p>
          <b className="bold-text-color">Security Automation:</b> Automates
          security tasks like vulnerability scanning, threat detection, and
          incident response, freeing up security personnel to focus on strategic
          initiatives.
        </p>
      ),
      features: ["SECURITY ORCHESTRATION", "NESSUS", "OPENVAS", "CHEF"],
    },
    {
      image: service3,
      content: (
        <p>
          <b className="bold-text-color">Cloud Migration and Management:</b> The
          process of moving IT resources and applications from on-premises
          infrastructure to the cloud, along with ongoing management of those
          resources.
        </p>
      ),
      features: [
        "AWS MIGRATION HUB",
        "AZURE MIGRATE",
        "GCP MIGRATE",
        "AWS MANAGEMENT CONSOLE",
        "GCP CONSOLE",
        "AZURE PORTAL",
      ],
    },
    {
      image: service4,
      content: (
        <p>
          <b className="bold-text-color">Container Registries:</b> Serve as
          centralized repositories for storing, managing, and distributing
          container images. They play a crucial role in facilitating
          collaboration and deployment of containerized applications by
          providing a secure and scalable platform for sharing images across
          teams and environments.
        </p>
      ),
      features: ["DOCKER HUB", "AMAZON ECR", "AZURE CONTAINER REGISTRY"],
    },
    {
      image: service5,
      content: (
        <p>
          <b className="bold-text-color">Monitoring and Logging:</b>{" "}
          Continuously monitors IT infrastructure and applications for
          performance, errors, and security issues. Logging collects and stores
          data generated by systems for analysis and troubleshooting.
        </p>
      ),
      features: [
        "PROMETHEUS",
        "DATADOG",
        "NEW RELIC",
        "ELK STACK",
        "AWS CLOUDWATCH",
        "AZURE MONITOR",
        "GCP CLOUD MONITORING",
      ],
    },
    {
      image: service6,
      content: (
        <p>
          <b className="bold-text-color">Infrastructure as Code (IaC):</b>{" "}
          Defines and manages infrastructure resources (servers, networks,
          storage) through code. Enables automated provisioning and
          configuration of infrastructure environments.
        </p>
      ),
      features: [
        "TERRAFORM",
        "ANSIBLE",
        "AWS CLOUDFORMATION",
        "AZURE RESOURCE MANAGER",
        "GCP CLOUD DEPLOYMENT MANAGER",
      ],
    },
    {
      image: service7,
      content: (
        <p>
          <b className="bold-text-color">Containerization and Orchestration:</b>{" "}
          Packages applications with their dependencies into standardized units
          called containers. Orchestration tools manage the deployment, scaling,
          and networking of these containers.
        </p>
      ),
      features: [
        "DOCKER",
        "KUBERNETES",
        "DOCKER SWARM",
        "APACHE MESOS",
        "AMAZON ECE",
      ],
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
                  <div className="services-details-image" id ="devops" >
                    <img src={service} alt="about" />
                  </div>
                  <div className="services-details-desc justify-content">
                    {/* <span className="sub-title">Consulting & Advisory</span> */}
                    <div>
                      <div>
                        <h2 className="main-banner-image" >
                        DevOps Practices
                        </h2>
                        <p>
                          At<b className="bold-text-color"> AppNetWise</b>, we
                          understand DevOps vital role in modern software
                          development and deployment. Our DevOps solutions
                          empower businesses to streamline processes, accelerate
                          delivery, and enhance collaboration between teams. By
                          embracing DevOps principles, organizations achieve
                          greater agility, efficiency, and innovation in their
                          software delivery lifecycle.
                        </p>
                        <p>
                          With our expertise and customer-centric approach, we
                          deliver tailored DevOps solutions. Trust AppNetWise to
                          optimize processes, accelerate delivery, and foster
                          collaboration, ensuring your success in today's
                          digital landscape.
                        </p>
                      </div>
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
                <h2 className="main-banner-image">Our DevOps Approach</h2>

                <div className="row align-items-center">
                  <div className="col-lg-8 col-md-12">
                    <p>
                      In the realm of DevOps, Continuous Integration (CI) and
                      Continuous Testing serve as foundational pillars, ensuring
                      code stability and fostering collaboration. CI facilitates
                      rapid feedback on code modifications, while Continuous
                      Testing rigorously evaluates software updates for
                      functionality and performance. These practices enable
                      development teams to iterate swiftly and maintain high
                      standards of quality.
                    </p>
                    <p>
                      Continuing the DevOps journey, practices like Continuous
                      Delivery (CD), Continuous Deployment, and Continuous
                      Monitoring play crucial roles in optimizing the release
                      process and enhancing software performance. CD streamlines
                      adjustments to software, while Continuous Deployment
                      automates production deployment, minimizing manual
                      intervention. Simultaneously, Continuous Monitoring
                      provides valuable insights into application performance,
                      facilitating proactive issue resolution and optimization
                      efforts.
                    </p>
                    <p>
                      Through the seamless integration of these DevOps
                      practices, organizations can drive continuous improvement,
                      empowering teams to deliver innovative features quickly
                      and reliably. By embracing these principles, businesses
                      can maintain a competitive edge in today's fast-paced
                      technological landscape.
                    </p>
                  </div>

                  <div className="col-lg-3 col-md-12">
                    <div className="our-mission-image">
                      <img src={image} alt="service" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ptb-70">
                <h2 className="main-banner-image">
                  Why Choose AppNetWise for DevOps Consulting?
                </h2>
                <div className="row pt-40 justify-content">
                  <div
                    className="col-lg-4 col-sm-6"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        
                        
                        <img src = {icon20} alt = "banner" width="20%" />
                      </div>
                      <h3>Expertise and Experience</h3>
                      <p>
                        Our DevOps engineers are industry veterans, boasting
                        extensive experience in implementing and managing DevOps
                        practices. With a rich background in the field and
                        numerous certifications, they bring a deep understanding
                        of <b className="bold-text-color">best practices</b> and
                        emerging trends to every project.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-sm-6"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        
                        
                        <img src = {icon2} alt = "banner" width="20%" />
                      </div>
                      <h3>Proactive Problem-Solving</h3>
                      <p>
                        Our DevOps strategy prioritizes proactive approaches to
                        identify and resolve issues before they impact
                        operations. With{" "}
                        <b className="bold-text-color">robust monitoring </b>
                        and <b className="bold-text-color">automated alerts</b>,
                        we ensure smoother operations and foster a culture of
                        continuous improvement, enhancing efficiency and
                        reliability.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                       
                      <img src = {icon3} alt = "banner" width="20%" />
                      </div>
                      <h3>Cost-Effective Solutions</h3>
                      <p>
                        By automating manual processes, optimizing resource
                        utilization, and reducing downtime, our DevOps solutions
                        help you minimize operational costs and maximize ROI. We
                        focus on efficiency at every step of the development and
                        deployment lifecycle, saving you both time and money in
                        the long run.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        
                        
                        <img src = {icon4} alt = "banner" width="20%" />
                      </div>
                      <h3>Proven Track Record</h3>
                      <p>
                        Our track record in DevOps speaks volumes. Serving
                        startups to enterprises, we consistently meet business
                        goals. Whether speeding time-to-market, enhancing
                        collaboration, or boosting efficiency, our success
                        showcases dedication to client success.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        
                        
                        <img src = {icon5} alt = "banner" width="20%" />
                      </div>
                      <h3>Continuous Support</h3>
                      <p>
                        Post-implementation, we provide ongoing maintenance to
                        uphold the efficiency of your DevOps setup. Our
                        dedicated team handles troubleshooting, optimizes
                        workflows, and scales infrastructure as needed,
                        guaranteeing seamless operations.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        
                        
                        <img src = {icon6} alt = "banner" width="20%" />
                      </div>
                      <h3>Enhanced Collaboration</h3>
                      <p>
                        DevOps thrives on collaboration. Our solutions
                        prioritize seamless communication among teams, breaking
                        down silos to foster efficiency. By nurturing a
                        collaborative culture, we accelerate innovation for
                        superior <b className="bold-text-color">software delivery.</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="main-banner-image">Our Services</h2>
              <SliderComponent slidesData={slidesData} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DevOps

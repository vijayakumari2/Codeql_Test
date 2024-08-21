import React from "react"
import ServiceSidebar from "./ServiceSidebar"
import service from "../../images/a1.jpg"

const ServiceDetailsContent = () => {
  return (
    <>
      <section className="services-details-area ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="services-details-image" id = "assets-management">
                    <img src={service} alt="about" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <ServiceSidebar />
                </div>
              </div>
              <div className="services-details-desc">
                <div>
                  <h2 className="main-banner-image">Assets Management</h2>
                  <p>
                    An asset management platform is indispensable for
                    enterprises managing multiple locations, offering
                    streamlined inventory management, maintenance scheduling,
                    and lifecycle tracking. It consolidates asset data,
                    including specifications and maintenance history, accessible
                    from anywhere. Integrated with ERP systems, IoT devices, and
                    other software, it enhances operational efficiency across
                    sites. Advanced analytics tools provide insights into asset
                    utilization and maintenance effectiveness through
                    customizable dashboards and reports, supporting informed
                    decision-making.
                  </p>
                  <p>
                    Security protocols ensure data protection, while
                    user-friendly interfaces and mobile accessibility promote
                    usability across roles and locations. In summary, an asset
                    management platform optimizes efficiency, ensures
                    compliance, and mitigates risks, essential for enterprises
                    with diverse geographical footprints.
                  </p>
                </div>
              </div>
              <blockquote>
                <p>
                  Unlock the full potential of your assets with our intuitive
                  management platform. From streamlined operations to enhanced
                  decision-making, we empower your organization to achieve peak
                  efficiency and reliability
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetailsContent

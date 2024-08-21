import React from "react"
import { Link } from "gatsby"

const ServiceSidebar = () => {
  return (
    <>
      <div className="services-details-info">
        <ul className="services-list">
          <li>
            <Link to="/services/consulting-advisory#consulting-advisory"  activeClassName="active">
              Consulting & Advisory
            </Link>
          </li>
          <li>
            <Link to="/services/cloud-adoption#cloud-adoption" activeClassName="active">
              Cloud Adoption
            </Link>
          </li>

          <li>
            <Link to="/services/api-enablement#api-enablement" activeClassName="active">
              API Enablement
            </Link>
          </li>
          <li>
            <Link to="/services/software-development#software-development" activeClassName="active">
              Software Development
            </Link>
          </li>
          <li>
            <Link to="/services/quality-assurance#quality-assurance" activeClassName="active">
              Quality Assurance
            </Link>
          </li>
          <li>
            <Link to="/services/block-chain#block-chain" activeClassName="active">
              Blockchain
            </Link>
          </li>
          <li>
            <Link to="/services/ai-ml#ai-ml" activeClassName="active">
              AI & ML
            </Link>
          </li>
          <li>
            <Link to="/services/devops#devops" activeClassName="active">
              DevOps Practices
            </Link>
          </li>
        </ul>

        <div className="services-contact-info">
          <h3>Contact Info</h3>

          <ul>
            {/* <li>
              <div className="icon">
                <i className="bx bx-user-pin"></i>
              </div>
              <span>Phone:</span>
              <a href="tel:+21453545413">+2145 354 5413</a>
            </li> */}
            <li>
              <div className="icon">
                <i className="bx bx-map"></i>
              </div>
              <span>Location:</span>
              46, Workafella, 6-3-252/2, Mega City, Irram Manzil Colony, Banjara
              Hills, Hyderabad - 500082 - TS
            </li>
            <li>
              <div className="icon">
                <i className="bx bx-envelope"></i>
              </div>
              <span>Email:</span>
              <a href="mailto:connect@appnetwise.com">connect@appnetwise.com</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ServiceSidebar

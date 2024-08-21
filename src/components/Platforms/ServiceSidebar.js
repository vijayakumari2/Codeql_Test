import React from "react"
import { Link } from "gatsby"

const ServiceSidebar = () => {
  return (
    <>
      <div className="services-details-info">
        <ul className="services-list">
          <li>
            <Link to="/platforms/assets-management#assets-management" activeClassName="active">
              Assets Management
            </Link>
          </li>
          <li>
            <Link to="/platforms/carbon-market#carbon-market" activeClassName="active">
              Carbon Market
            </Link>
          </li>

          <li>
            <Link to="/platforms/green-it#green-it" activeClassName="active">
              Green IT
            </Link>
          </li>
        </ul>

        <div className="services-contact-info">
          <h3>Contact Info</h3>

          <ul>
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

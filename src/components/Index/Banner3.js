import React from "react"
import { Link } from "gatsby"
import AOS from "aos"
import "aos/dist/aos.css"

import bannerImg3 from "../../images/banner1.png"

const Banner3 = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    })
    AOS.refresh()
  }, [])

  return (
    <div className="it-services-banner overflow-hidden">
      <div className="container">
        <div className="row align-items-center fadeInUp-animation">
          <div className="col-lg-6 col-md-12">
            <div
              className="main-banner-content fade-right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <h1
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                Offshore Engineering Team
              </h1>
              <div className="banner-buttons">
                <h6
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                  className="banner-btn-gap"
                >
                  <span className="highlight highlight-button">BUILD</span>
                  <span className="highlight highlight-button">OPERATE</span>
                  <span className="highlight highlight-button">TRANSFER</span>
                </h6>
              </div>
              <p
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                Rely on our technical expertise to help you build your dream
                team. We're here to turn your vision into reality.
              </p>
              <div className="btn-box">
                <Link to="/services" className="default-btn">
                  <i className="flaticon-right"></i>
                  Learn More
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className="main-banner-image fade-up"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <img src={bannerImg3} alt="banner" style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner3

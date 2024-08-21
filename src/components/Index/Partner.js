import React from "react"
import AOS from "aos"

import partner1 from "../../images/partner/carbonplace.svg"
import partner2 from "../../images/partner/partner2.png"

const Partner = () => {
  React.useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div className="partner-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div className="row align-items-center justify-content ">
            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div
                className="single-partner-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img src={partner1} alt="partner" />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div
                className="single-partner-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <img src={partner2} alt="partner" />
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  )
}

export default Partner

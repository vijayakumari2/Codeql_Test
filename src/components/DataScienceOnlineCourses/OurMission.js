import React from "react"

import mission2 from "../../images/banner1.png"

const OurMission = () => {
  return (
    <>
      <div className="our-mission-area ptb-40">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="our-mission-content">
                <div className="content">
                  <h2>Managed Dedicated Resources</h2>
                  <p>
                    We provide clients with skilled engineers who work
                    dedicatedly on your projects full-time, remotely.
                  </p>
                  <p>
                    We ensure transparency through continuous communication
                    using team collaboration channels like Slack, MS Teams, PR
                    Code Reviews, Daily Standup, and Agile Sprint ceremonies.
                  </p>
                  <p>Benefits of having managed dedicated resources :</p>
                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i>Your own dedicated team
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Onboarding and relieving
                      engineers instantly (as low as 1 sprint to onboard new
                      member)
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Bringing in our
                      expertise in developing engineering capabilities from the
                      ground up.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="our-mission-image">
                <div className="shape">
                  <img
                    src={mission2}
                    alt="shape"
                    style={{ marginBottom: "100px", width: "700px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurMission

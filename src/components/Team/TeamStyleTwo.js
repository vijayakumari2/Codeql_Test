import React from "react"

import starIcon from "../../images/star-icon.png"
import team1 from "../../images/team/d1.png"
import team2 from "../../images/team/sabiha.png"
import team3 from "../../images/team/kiran11.png"


const TeamStyleTwo = () => {
  return (
    <>
      <section className="scientist-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="team" />
              Team Members
            </span>
            <h2>Our Directors</h2>
          </div>

          <div className="row justify-content">
            <div className="col-lg-3 col-md-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team1} alt="team" />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/dawood-abdullah-mohammed-72687519/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h3>Dawood</h3>
                  <span></span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team2} alt="team" />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/sabiha-sheikh-sultana-13182089/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h3>Sabiha</h3>
                  <span></span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team3} alt="team" />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/kiran-kumar-4429b3257/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h3>Kiran </h3>
                  <span></span>
                </div>
              </div>
            </div>
            
                



          </div>
        </div>
      </section>
    </>
  )
}

export default TeamStyleTwo

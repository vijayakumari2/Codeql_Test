import React from "react"

import starIcon from "../../images/star-icon.png"
import team1 from "../../images/team/tony.jpg"
import team2 from "../../images/team/mohammaed.png"
import team3 from "../../images/team/tasneem.jpg"
import team4 from "../../images/team/omer.jpg"
import team5 from "../../images/team/akhilesh.png"


const TeamStyleThree = () => {
  return (
    <>
      <section className="scientist-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="team" />
              Team Members
            </span>
            <h2>Our Partners & Advisors</h2>
          </div>

          <div className="row justify-content">
            <div className="col-lg-3 col-md-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team1} alt="team" style={{borderRadius:"35px"}} />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/turner2448/"
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
                  <h3>Tony Turner</h3>
                  <span>GreenByte</span><br/>
                  <span>Technical Advisor</span>
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
                        href="https://www.linkedin.com/in/mohamed-alaoui-4268a915/"
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
                  <h3>Mohammed</h3>
                  <span>CultyData</span><br/>
                  <span>Technical Advisor Blockchain - EU</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team3} alt="team"  style={{borderRadius:"35px"}}/>

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/tasneemshariff/"
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
                  <h3> Tasneem Shariff</h3>
                  <span>Proservz</span><br/>
                  <span>Legal & Compliance</span>
                </div>
              </div>
            </div>
            </div>
            <div className="row justify-content">
            <div className="col-lg-3 col-md-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team4} alt="team" style={{borderRadius:"35px"}}/>

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/omer-mohammad-5641a7b4/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div></div>
                <div className="content">
                  <h3> Omer</h3>
                  <span>Digital X</span><br/>
                  <span>Technical Advisor Blockchain - APAC</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team5} alt="team" />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/ca-akhileshsharma/"
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
                  <h3> Akhilesh</h3>
                  <span>Anantharaju Associates</span><br/>
                  <span>Finance & Auditing</span>
                </div>
              </div>
            </div>
           
           

          </div>
        </div>
      </section>
    </>
  )
}

export default TeamStyleThree
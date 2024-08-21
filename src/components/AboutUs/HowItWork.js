import React from "react"
import starIcon from "../../images/star-icon.png"
import process1 from "../../images/process/approach111.png"
import process2 from "../../images/process/approach222.png"
import process3 from "../../images/process/approach666.jpg"
import process4 from "../../images/process/approach777.jpg"
import process5 from "../../images/process/about3333.jpg"
import shape from "../../images/shape/circle-shape1.png"

const HowItWork = () => {
  return (
    <>
      <section className="process-area pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="about"  />
              How It's Work
            </span>
            <h2>Our Approach</h2>
            <p>
              Our goal is never to change for the sake of it. We work on
              technology changes that matters, making them more efficient,
              effective, and resilient.
            </p>
          </div>

          <div className="row justify-content ">
            <div className="col-lg-4 col-md-6">
              <div className="single-process-box">
                <div className="number">1</div>
                <div className="image">
                  <img src={process5} alt="about" width="54%" />
                </div>
                <h3>Enable</h3>
                <p>
                  Assessing your readiness and creating a roadmap to achieve
                  your digital vision
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-process-box">
                <div className="number">2</div>
                <div className="image">
                  <img src={process1} alt="about" width="66%"/>
                </div>
                <h3>Advise</h3>
                <p>
                  Co-creating and developing a transformative program tailored
                  to your needs.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-process-box">
                <div className="number">3</div>
                <div className="image">
                  <img src={process2} alt="about" width="54%" />
                </div>
                <h3>Build</h3>
                <p>
                  Building Solutions that balance today’s needs with tomorrow’s
                  opportunities
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-process-box">
                <div className="number">4</div>
                <div className="image">
                  <img src={process3} alt="about" width="79%" />
                </div>
                <h3>Collaborate</h3>
                <p>
                  Enabling teams with the skills and tools to be competitive and
                  future-ready.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-process-box ">
                <div className="number">5</div>
                <div className="image">
                  <img src={process4} alt="about" width="53%" />
                </div>
                <h3>Deliver</h3>
                <p>
                  Delivering e2e solutions from POC to production ready
                  platforms and products.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape1">
          <img src={shape} alt="about" />
        </div>
      </section>
    </>
  )
}

export default HowItWork

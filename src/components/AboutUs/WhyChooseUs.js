import React from "react"
import starIcon from "../../images/star-icon.png"
import howItWork from "../../images/about22.jpg"

const WhyChooseUs = () => {
  return (
    <>
      <section className="how-its-work-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="how-its-work-content">
                <span className="sub-title">
                  <img src={starIcon} alt="banner" />
                  People Love Us
                </span>
                <h2>Why Choose Us?</h2>
                <p>
                  At <b className="bold-text-color">APPNETWISE</b>, we are team
                  of innovative engineers with multiple years of expertise in
                  Cloud adoption, Software engineering and FinTech.
                </p>
                <div className="inner-box">
                  <div className="single-item">
                    <div className="count-box">1</div>
                    <h3>Empowering Organizations with IT Solutions</h3>
                    <p>
                      Passionate about empowering organizations by addressing
                      their challenges with appropriate IT business solutions.
                    </p>
                  </div>
                  <div className="single-item">
                    <div className="count-box">2</div>
                    <h3>Crafting Future-Ready Solutions</h3>
                    <p>
                      Engaging in the latest technologies, we adopt a
                      comprehensive approach to create sustainable, competitive
                      and dependable solutions for shaping the future.
                    </p>
                  </div>
                  <div className="single-item">
                    <div className="count-box">3</div>
                    <h3>One-Stop Tech Solutions for a Competitive Edge</h3>
                    <p>
                      Our wide array of services gives our clients a competitive
                      advantage, serving as a one-stop solution for all their
                      technical requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="how-its-work-image">
                <img src={howItWork} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs

import React from "react"
import starIcon from "../../images/star-icon.png"
import contact from "../../images/contact.jpg"

const ContactForm = () => {
  return (
    <>
      <section className="contact-area ptb-40">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="contact" />
              Get in Touch
            </span>
            <h2>Ready to Get Started?</h2>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="contact-image">
                <img src={contact} alt="contact" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="contact-form">
                <iframe
                  title="Google Form"
                  src="https://forms.office.com/Pages/ResponsePage.aspx?id=KUoAMHe9x0G4YGji2tQ-CCjKWKRYuxtIqHoXOeDJTnBUNEVHMTFBQ0hFMTZVUlJCNDBJT0VIV1ZFRS4u&embed=true"
                  width="640"
                  height="480"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  style={{
                    border: "none",
                    maxWidth: "100%",
                    maxHeight: "100vh",
                  }}
                  allowFullScreen
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm

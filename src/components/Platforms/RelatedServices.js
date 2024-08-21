import React from "react"
import { Link } from "gatsby"
import Slider from "react-slick"
import icon1 from "../../images/rp4.png"
import icon2 from "../../images/rp1.png"
import icon3 from "../../images/rp3.png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const RelatedServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="services-area pt-100 pb-70 bg-f1f8fb">
      <div className="container">
        <div className="section-title">
          <h2>More Platforms You Might Like</h2>
        </div>

        <Slider {...settings}>
          <div className="single-services-box">
            <div className="icon">
              <img src={icon1} alt="about" style={{ maxWidth: "20%" }} />
            </div>
            <h3>
              <Link to="/platforms/assets-management">Assets Management</Link>
            </h3>
            <p>
              An asset management platform centralizes IT hardware, software,
              physical equipment, and financial investments, enhancing
              efficiency and ensuring regulatory compliance while reducing
              costs.
            </p>

            <Link to="/platforms/assets-management" className="read-more-btn">
              Read More <i className="flaticon-right"></i>
            </Link>
          </div>
          <div className="single-services-box">
            <div className="icon">
              <img src={icon2} alt="about" style={{ maxWidth: "20%" }} />
            </div>
            <h3>
              <Link to="/platforms/carbon-market">Carbon Market</Link>
            </h3>
            <p>
              we led a pioneering effort to develop an advanced Carbon Credits
              Trading Platform, demonstrating our proficiency in creating
              resilient, scalable, and feature-rich solutions for carbon credit
              trading.
            </p>

            <Link to="/platforms/carbon-market" className="read-more-btn">
              Read More <i className="flaticon-right"></i>
            </Link>
          </div>

          <div className="single-services-box">
            <div className="icon">
              <img src={icon3} alt="about" style={{ maxWidth: "20%" }} />
            </div>
            <h3>
              <Link to="/platforms/green-it">Green IT</Link>
            </h3>
            <p>
              In today's fast-changing digital landscape, sustainability is now
              a critical imperative. Green IT, or Green Information Technology,
              leads by promoting environmentally responsible computing
              practices.
            </p>

            <Link to="/platforms/green-it" className="read-more-btn">
              Read More <i className="flaticon-right"></i>
            </Link>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default RelatedServices

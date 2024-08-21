import React from "react"

import starIcon from "../../images/star-icon.png"
import user1 from "../../images/tiago.jpg"
import user2 from "../../images/user1.jpg"

import shape from "../../images/shape/shape1.svg"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper"

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-area pt-100 bg-f1f8fb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="testimonial" />
              Testimonials
            </span>
            <h2>What Our Clients are Saying?</h2>
            <p>
              At <b>AppNetWise</b>, we value our clients' trust and take pride
              in exceeding their expectations with high-quality solutions. Don't
              just take our word for it -here's what some of our clients say.
            </p>
          </div>

          <Swiper
            navigation={true}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Autoplay]}
            className="testimonials-slides"
          >
            <SwiperSlide>
              <div
                className="single-testimonials-box"
                style={{ minHeight: "500px" }}
              >
                <img src={user1} className="shadow-sm" alt="testimonials" />
                <p>
                  Collaborating with AppNetWise has been a transformative
                  experience for us. Their team's adaptability and profound
                  technical expertise in cloud-native solutions, custom software
                  development, and DevOps have been exceptional. What truly sets
                  them apart is their ability to act swiftly and efficiently,
                  ensuring our projects not only meet but exceed expectations.
                  Their partnership has been invaluable in our journey.
                </p>

                <div className="client-info">
                  <div className="title">
                    <h3>Tiago Pina</h3>
                    <span>Head of Engineering at Carbonplace</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="single-testimonials-box"
                style={{ minHeight: "500px" }}
              >
                <img src={user2} className="shadow-sm" alt="testimonials" />
                <p>
                  Having AppNetWise on the build team as been a real boon to the
                  delivery programme. Their professionalism and delivery cadence
                  has really been something. Even though they are based in
                  India, we found that their flexibility to work outside of
                  their core hours really helped to form a strong global team.
                  Also, the quality of their output has been top notch. The one
                  element that I would pull out as their key USP is their
                  ability to really listen to what we needed and to be able to
                  pivot quickly and deliver quality output. I would not hesitate
                  in recommending them.
                </p>

                <div className="client-info">
                  <div className="title">
                    <h3>Bob</h3>
                    <span>CTO at Carbonplace</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* 
            <SwiperSlide>
              <div className="single-testimonials-box">
                <img src={user3} className="shadow-sm" alt="testimonials" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <div className="client-info">
                  <div className="title">
                    <h3>Sarah Taylor</h3>
                    <span>CEO at ThemeForest</span>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>

        <div className="shape-img1">
          <img src={shape} alt="testimonial" />
        </div>
      </div>
    </>
  )
}

export default Testimonials

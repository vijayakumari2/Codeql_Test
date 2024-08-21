import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper"

const SliderComponent = ({ slidesData }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="pt-40"
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="col-sm-12">
            <div className="overview-box">
              <div className="overview-image">
                <div className="image">
                  <img src={slide.image} alt="features" />
                </div>
              </div>
              <div className="overview-content">
                <div className="content right-content">
                  <p>{slide.content}</p>
                  <ol className="features-list">
                    {slide.features.map((feature, i) => (
                      <li key={i}>
                        <span>
                          <i className="bx bx-check"></i> {feature}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SliderComponent

import React from 'react'
import Slider from "react-slick"
import Ddata from "./Ddata"
import "../newarrivals/style.css"

const Dcard = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:true
    }
  return (
    <>
        <Slider {...settings}>
            {Ddata.map((item, index) => {
                return (
                    <>
                      <div className="box product" key={index}>
                          <div className="img">
                              <img src={item.cover} alt="" width="100%" />
                          </div>
                          <h4>{item.name}</h4>
                          <span>{item.price}</span>
                      </div>
                    </>
                )
            })}
        </Slider>
    </>
  )
}

export default Dcard
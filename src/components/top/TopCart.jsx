import React from 'react'
import Slider from 'react-slick'
import Tdata from './Tdata'

const TopCart = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    }
  return (
    <>
      <Slider {...settings}>
          {Tdata.map((item, index) => {
              return (
                  <>
                    <div className="box product" key={index}>
                        <div className="nametop d_flex">
                            <span className="tleft">{item.para}</span>
                            <span className="tright">{item.desc}</span>
                        </div>
                        <div className="img">
                            <img src={item.cover} alt="" />
                        </div>
                    </div>
                  </>
              )
          })}
      </Slider>
    </>
  )
}

export default TopCart
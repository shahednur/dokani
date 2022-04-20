import React from 'react'
import Sdata from './Sdata'
import Slider from 'react-slick'


const SlideCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        SlidesToShow: 1,
        SlidesToScroll: 1,
        autoplay: true,
        appendDots: (dots )=> {
            return <ul style={{ margin:"0px" }}>{dots}</ul>
        }
    }
  return (
    <>
        <Slider {...settings}>
            {Sdata.map((item, index) => {
                return (
                    <>
                      <div className="box d_flex top" key={index}>
                          <div className="left">
                              <h1>{item.title}</h1>
                              <p>{item.desc}</p>
                              <button className="btn-primary">Visit Collection</button>
                          </div>
                          <div className="right">
                                <img src={item.cover} alt="slider" />
                          </div>
                      </div>
                    </>
                )
            })}
        </Slider>
    </>
  )
}

export default SlideCard
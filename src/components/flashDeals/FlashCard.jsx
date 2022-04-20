import React, { useState } from 'react'
import Slider from 'react-slick'

const SampleNextArror = (props) => {
    const { onClick } = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </button>
        </div>
    )
}

const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
            </button>
        </div>
    )
}
const FlashCard = ({productItems}) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArror />,
        prevArrow: <SamplePrevArrow />,
    }
  return (
    <>
      <Slider {...settings}>
        {productItems.map((item, index) => {
            return (
                <div className="box" key={index}>
                    <div className="product mtop">
                        <div className="img">
                            <span className="discount">{item.discount} % Off</span>
                            <img src={item.cover} alt="product" />
                            <div className="product-like">
                                <label>{count}</label><br />
                                <i className="fa fa-regular fa-heart" onClick={increment}></i>
                            </div>
                        </div>
                        <div className="product-details">
                            <h3>{item.name}</h3>
                            <div className="rate">
                                <i className="fa fa-regular fa-star"></i>
                                <i className="fa fa-regular fa-star"></i>
                                <i className="fa fa-regular fa-star"></i>
                                <i className="fa fa-regular fa-star"></i>
                                <i className="fa fa-regular fa-star"></i>
                            </div>
                            <div className="price">
                                <h4>${" "} {item.price}.00</h4>
                                <button><i className="fa fa-plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
      </Slider>
    </>
  )
}

export default FlashCard
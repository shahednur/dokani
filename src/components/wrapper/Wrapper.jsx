import React from 'react'
import "./style.css"

const Wrapper = () => {
    const data = [
        {
          cover: <i class="fa fa-solid fa-truck-fast"></i>,
          title: "Worldwide Delivery",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa fa-solid fa-id-card'></i>,
          title: "Safe Payment",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa fa-solid fa-shield'></i>,
          title: "Shop With Confidence ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class="fa fa-solid fa-headset"></i>,
          title: "24/7 Support ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
      ]

  return (
    <>
      <section className="wrapper background">
          <div className="container d_flex">
              {data.map((item, index) => {
                  return (
                      <div className="product" key={index}>
                          <div className="img icon-circle">
                              <>{item.cover}</>
                          </div>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                      </div>
                  )
              })}
          </div>
      </section>
    </>
  )
}

export default Wrapper
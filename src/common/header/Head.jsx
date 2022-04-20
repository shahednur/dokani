import React from 'react'

const Head = () => {
  return (
    <>
     <section className="head">
         <div className="container d_flex">
            <div className="left row">
                <i classname="fa fa-phone" />
                <label>+88012 3456 7893</label>
                <i className="fa fa-envelope" />
                <label> support@dokani.com</label>
            </div>
            <div className=" right row RText">
                <label>Theme FAQ's</label>
                <label>Need Help?</label>
                <span>🏳</span>
                <label>EN</label>
                <span>💲</span>
                <label>USD</label>
            </div>
         </div>
     </section>
    </>
  )
}

export default Head
import React from 'react'
import Styles from './footer.module.css'
const Footer = () => {

  return (
    <>
    <div>
      <footer className={Styles["footer-section"]}>
        <div className="container">
            <div className={Styles["footer-cta"]}>
                <div style={{display:"flex"}}>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className={Styles["single-cta"]}>
                            <i className="fas fa-map-marker-alt"></i>
                            <div className={Styles["cta-text"]}>
                                <h4>Find us</h4>
                                <span>1010 Avenue, sw 54321, chandigarh</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className={Styles["single-cta"]}>
                            <i className="fas fa-phone"></i>
                            <div className={Styles["cta-text"]}>
                                <h4>Call us</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className={Styles["single-cta"]}>
                            <i className="far fa-envelope-open"></i>
                            <div className={Styles["cta-text"]}>
                                <h4>Mail us</h4>
                                <span>mail@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </footer>
    </div>
    </>
  )
}

export default Footer

import { forwardRef } from "react"
import { useState, useEffect } from "react"
import styles from "./ContactUs.module.css"

import FacebookQR from "../assets/social media/Facebook QR.png"
import GoogleQR from "../assets/social media/Google Play QR.png"
import InstagramQR from "../assets/social media/Instagram QR.png"
import LinkedInQR from "../assets/social media/LinkedIn QR.png"
import LinktreeQR from "../assets/social media/Linktree QR.png"
import YouTubeQR from "../assets/social media/YouTube QR.png"

const ContactUs = forwardRef(function ContactUs(props, ref) {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Add a resize event listener to update the device type when the window size changes
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.contactUs} ref={ref} nav-show={props.id}>
        <div className={styles.titleDiv}>
          <span>Contact Us</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="550" height="10" viewBox="0 0 650 10" fill="none">
            <path d="M0 5H650" stroke="#258F8C" strokeWidth="6" />
          </svg>
          <p>sightforesee@ust.hk</p>
        </div>
        {isDesktop ? (
          <div className={styles.desktopDiv}>
            <div style={{ "display": "flex", "flexDirection": "column" }}>
              <img src={InstagramQR} alt="" />
              <span>Instagram</span>
            </div>
            <div style={{ "display": "flex", "flexDirection": "column" }}>
              <img src={FacebookQR} alt="" />
              <span>Facebook</span>
            </div>
            <div style={{ "display": "flex", "flexDirection": "column" }}>
              <img src={GoogleQR} alt="" />
              <span>Google</span>
            </div>
            <div style={{ "display": "flex", "flexDirection": "column" }}>
              <img src={LinkedInQR} alt="" />
              <span>LinkedIn</span>
            </div>
            <div style={{ "display": "flex", "flexDirection": "column" }}>
              <img src={LinktreeQR} alt="" />
              <span>Linktree</span>
            </div>
            <div style={{ "display": "flex", "flexDirection": "column" }}>
              <img src={YouTubeQR} alt="" />
              <span>YouTube</span>
            </div>
          </div>
        ) : (
          <div className={styles.mobileDiv}>
            <img src={FacebookQR} alt="" />
          </div>
        )
        }
      </div>
    </>
  )
})
export default ContactUs

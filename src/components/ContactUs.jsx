import { forwardRef } from "react"
import { useState, useEffect } from "react"
import styles from "./ContactUs.module.css"

import FacebookQR from "../assets/social media/Facebook QR.png"
import GoogleQR from "../assets/social media/Google Play QR.png"
import InstagramQR from "../assets/social media/Instagram QR.png"
import LinkedInQR from "../assets/social media/LinkedIn QR.png"
import LinktreeQR from "../assets/social media/Linktree QR.png"
import YouTubeQR from "../assets/social media/YouTube QR.png"

import Facebook from "../assets/social media/Facebook.png"
import Google from "../assets/social media/Google Play.jpg"
import Instagram from "../assets/social media/Instagram.png"
import LinkedIn from "../assets/social media/LinkedIn.png"
import Linktree from "../assets/social media/Linktree.svg"
import Youtube from "../assets/social media/Youtube.png"

const ContactUs = forwardRef(function ContactUs(props, ref) {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

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
              <img src={InstagramQR} alt="Instagram" />
              <span>Instagram</span>
            </div>
            <div style={{ "display": "flex", "flexDirection": "column" }}>
              <img src={FacebookQR} alt="Facebook" />
              <span>Facebook</span>
            </div>
            <div style={{ "display": "flex", "flexDirection": "column" }}>
              <img src={GoogleQR} alt="Google" />
              <span>Google</span>
            </div>
            <div style={{ "display": "flex", "flexDirection": "column" }}>
              <img src={LinkedInQR} alt="LinkedIn" />
              <span>LinkedIn</span>
            </div>
            <div style={{ "display": "flex", "flexDirection": "column" }}>
              <img src={LinktreeQR} alt="Linktree" />
              <span>Linktree</span>
            </div>
            <div style={{ "display": "flex", "flexDirection": "column" }}>
              <img src={YouTubeQR} alt="YouTube" />
              <span>YouTube</span>
            </div>
          </div>
        ) : (
          <div className={styles.mobileDiv}>
            <div onClick={() => handleClick('https://instagram.com/foresee_hk?igshid=Y2I2MzMwZWM3ZA==')}>
              <img src={Instagram} alt="Instagram" />
              <span>Instagram</span>
            </div>
            <div onClick={() => handleClick('https://www.facebook.com/foreseehkust')}>
              <img src={Facebook} alt="Facebook" />
              <span>Facebook</span>
            </div>
            <div onClick={() => handleClick('https://play.google.com/store/apps/details?id=com.foresee.hk&pli=1')}>
              <img src={Google} alt="Google Play" />
              <span>Google Play</span>
            </div>
            <div onClick={() => handleClick('https://www.linkedin.com/company/foreseehk/')}>
              <img src={LinkedIn} alt="LinkedIn" />
              <span>LinkedIn</span>
            </div>
            <div onClick={() => handleClick('https://linktr.ee/foresee_hk?utm_source=qr_code')}>
              <img src={Linktree} alt="Linktree" />
              <span>Linktree</span>
            </div>
            <div onClick={() => handleClick('https://www.youtube.com/channel/UCXjkhENQuYXNIqz9AdKVZBw')}>
              <img src={Youtube} alt="Youtube" />
              <span>Youtube</span>
            </div>
          </div>
        )
        }
      </div>
    </>
  )
})
export default ContactUs

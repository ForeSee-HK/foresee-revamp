import { forwardRef } from "react"
import styles from "./ContactUs.module.css"


const ContactUs = forwardRef(function ContactUs(props, ref) {
  return (
    <>
      <div className={styles.contactUs} ref={ref} nav-show={props.id}>
        <div className={styles.titleDiv}>
          <span>Contact Us</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="550" height="10" viewBox="0 0 650 10" fill="none">
            <path d="M0 5H650" stroke="#258F8C" strokeWidth="6" />
          </svg>
        </div>
      </div>
    </>
  )
})
export default ContactUs

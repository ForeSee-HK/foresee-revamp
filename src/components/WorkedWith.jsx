import { forwardRef } from "react"
import styles from "./WorkedWith.module.css"

import DickLo from "../assets/Mr Dick Lo.jpeg"
import Sight from '../assets/HKUST Sight.png'

const WorkedWith = forwardRef(function WorkedWith(props, ref) {
  return (
    <>
      <div className={styles.workedWith} ref={ref} nav-show={props.id}>
        <div className={styles.titleDiv}>
          <span>Proudly Worked With</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="400" height="15" viewBox="0 0 650 10" fill="none">
            <path d="M0 5H650" stroke="#258F8C" strokeWidth="6" />
          </svg>
        </div>
        <div className={styles.imageDiv}>
          <div className={styles.imageCols}>
            <img src={DickLo} alt="Mr Dick Lo"  style={{width:"80%",height:"80%"}} />
            <spacer/>
            <span>Mr Dick Lo</span>
          </div>
          <div  className={styles.imageCols}>
            <img src={Sight} alt="HKUST Sight" style={{width:"80%",height:"50%"}}/>
            <spacer/>
            <span  >HKUST Sight</span>
          </div>
        </div>
      </div>
    </>
  )
})
export default WorkedWith

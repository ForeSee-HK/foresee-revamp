import { forwardRef } from "react"
import styles from "./AppsPage.module.css"

import rectangleTemp from '../assets/rectangle.png'
import circleTemp from '../assets/circle.png'

const AppsPage = forwardRef(function AppsPage(props, ref) {
  return (
    <>
      <div className={styles.appsPage} ref={ref} nav-show={props.id}>
        <div className={styles.titleDiv}>
          <span>Apps</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="125" height="20" viewBox="0 0 650 10" fill="none">
            <path d="M0 5H650" stroke="#258F8C" strokeWidth="50" />
          </svg>
        </div>
        <div className={styles.col}>
          <div>
            <row>
              <span>temp 1</span>
              <img src={circleTemp}></img>
            </row>
            <row>
              <span>temp 2</span>
              <img src={circleTemp}></img>
            </row>
            <row>
              <span>temp 3</span>
              <img src={circleTemp}></img>
            </row>
          </div>
          <div>
            <img src={rectangleTemp}></img>
          </div>
          <div>
            <row>
              <img src={circleTemp}></img>
              <span>temp 4</span>
            </row>
            <row>
              <img src={circleTemp}></img>
              <span>temp 5</span>
            </row>
            <row>
              <img src={circleTemp}></img>
              <span>temp 6</span>
            </row>
          </div>
        </div>
      </div>
    </>
  )
})
export default AppsPage

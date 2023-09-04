import { forwardRef } from "react"
import styles from "./HomePage.module.css"
import HomePageButton from "./HomePageButton"

const HomePage = forwardRef(function HomePage(props, ref) {
  return (
    <>
      <div className={styles.homePage} ref={ref} nav-show={props.id}>
      </div>
    </>
  )
})
export default HomePage

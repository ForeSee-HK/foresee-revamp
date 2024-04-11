import { forwardRef } from "react"
import styles from './OurStory.module.css'
import Sight from '../assets/HKUST Sight.png'


function clickHandler() {
  alert("You clicked me!");
}

const OurStory = forwardRef(function OurStory(props, ref) {
  return (
    
      <div className={styles.ourStory} ref={ref} nav-show={props.id} >
        
          <div className={styles.colsDiv}>
          <div className={styles.headerCol}>
          <div className={styles.titleDiv}>
      <span>Our Story</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="6" viewBox="0 0 650 10" fill="none">
            <path d="M0 5H650" stroke="#258F8C" strokeWidth="15" />
          </svg>
          </div>
          <img src={Sight} alt="HKUST Sight" style={{width:"100%",height:300, backgroundColor:"gray", marginTop:30}}/>

<p style={{marginTop:50, marginRight:10,marginLeft:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

</p>

          </div>
          <div className={styles.bodyCol}>
          

<p style={{marginTop:0,paddingTop:0, marginRight:10,marginLeft:10, textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<br></br><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<br></br><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</p>
          </div>
          </div>
      </div>
   
  )
})
export default OurStory

import { forwardRef } from "react"
import styles from './Community.module.css'
import Sight from '../assets/HKUST Sight.png'


function clickHandler() {
  alert("You clicked me!");
}

const Community = forwardRef(function Community(props, ref) {
  return (
    
      <div className={styles.community} ref={ref} nav-show={props.id} >
        <div className={styles.titleDiv}>
      <span>Community</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="250" height="15" viewBox="0 0 650 10" fill="none">
            <path d="M0 5H650" stroke="#258F8C" strokeWidth="15" />
          </svg>
          </div>
          <div className={styles.colsDiv}>
          <div className={styles.communityCol}>
          <img src={Sight} alt="HKUST Sight" style={{width:"100%", backgroundColor:"gray"}}/>
<h2>
  Innovating the Eye Care Ecosystem
</h2>
<p style={{marginTop:0,paddingTop:0, marginRight:10,marginLeft:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</p>
<button className={styles.communityBtn} onClick={clickHandler} >
LEARN MORE
</button>
          </div>
          <div className={styles.communityCol}>
          <img src={Sight} alt="HKUST Sight" style={{width:"100%", backgroundColor:"gray"}}/>
<h2>
  Innovating the Eye Care Ecosystem
</h2>
<p style={{marginTop:0,paddingTop:0, marginRight:10,marginLeft:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</p>
<button className={styles.communityBtn} onClick={clickHandler} >
LEARN MORE
</button>
          </div>
          </div>
      </div>
   
  )
})
export default Community

import * as React from 'react';
import styles from './NavProgress.module.css'
import Eye from '../assets/eye.svg'

const NavProgress = (props) => {
    return (
    <div className={styles.NavDiv}>
      <img src={Eye} className={styles.NavIcon} /> 
      <span className={styles.NavText}>ForseSee</span>
      <div className={styles.NavProgress}>
        {/* {props.progress} */}

          <div className={styles.container}>
            <ul className={styles.progressbar}>
              <li className={`${styles.progressStep} ${styles.active}`} />
              <li className={`${styles.progressStep} ${styles.active}`} />
              <li className={`${styles.progressStep}`} />
              <li className={`${styles.progressStep}`} />
              <li className={`${styles.progressStep}`} />
            </ul>
          </div>
      </div>
    </div>
  );
}
export default NavProgress;
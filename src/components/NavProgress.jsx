import * as React from 'react';
import styles from './NavProgress.module.css'
import Eye from '../assets/eye.svg'

const NavProgress = (props) => {
  const progressSteps = []
  for (let i = 0; i < 6; i++) {
    progressSteps.push(
      <li
        key={i}
        className={`${props.progress >= i ? styles.active : ''} ${props.progress == i ? styles.last : ''}`}
      />
    )
  }

  return (
    <div className={styles.NavDiv}>
      <img src={Eye} className={styles.NavIcon} />
      <span className={styles.NavText}>ForeSee</span>
      <div className={styles.NavProgress}>
        <div className={styles.container}>
          <ul className={styles.progressBar}>
            {progressSteps}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default NavProgress;
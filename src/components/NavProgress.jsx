import * as React from 'react';
import styles from './NavProgress.module.css'
import Eye from '../assets/eye.svg'

const NavProgress = (props) => {
    return (
    <div className={styles.NavDiv}>
      <img src={Eye} /> 
      <div>{props.progress}</div>
    </div>
  );
}
export default NavProgress;
import styles from './LoadingScreen.module.css'
import Iris from '../assets/iris.svg'
import Sclera from '../assets/sclera.svg'

const LoadingScreen=()=> {
  return (
    <>
      <div className={styles.main}>
        <img src={Sclera} className={styles.eye} /> 
        <img src={Iris} className={`${styles.eye} ${styles.roll}`} /> 
        <div className={styles.loading}>Loading</div>
      </div>
    </>
  )
}
export default LoadingScreen

import { useEffect } from 'react'
import styles from './Home.module.css'

const Home = props => {
  useEffect(() => {
    props.onMount("Home")
  }, [])

  return (
    <>
      <div className={styles.home}>
        testing
      </div>
    </>
  )
}
export default Home


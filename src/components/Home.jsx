import { useEffect } from 'react'
import styles from './Home.module.css'

const Home = props => {
  useEffect(() => {
    props.onMount("Home")
  }, [])

  return (
    <>
      <div className={styles.home}>
        <p>
          testing
        </p>
      </div>
    </>
  )
}
export default Home


import { useEffect } from 'react'
import './Home.css'

const Home = props => {
  useEffect(() => {
    props.onMount("Home")
  }, [])

  return (
    <>
      <div className="home">
        testing
      </div>
    </>
  )
}
export default Home


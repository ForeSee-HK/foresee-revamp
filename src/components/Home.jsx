import { useEffect } from 'react'

const Home = props => {
  useEffect(() => {
    props.onMount("Home")
  }, [])

  return (
    <>
      <p>testing</p>
    </>
  )
}
export default Home


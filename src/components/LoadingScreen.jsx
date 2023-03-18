import './LoadingScreen.css'
import Iris from '../assets/iris.svg'
import Sclera from '../assets/sclera.svg'

const LoadingScreen=()=> {
  return (
    <>
      <div className="main">
        <img src={Sclera} className="eye" /> 
        <img src={Iris} className="eye roll" /> 
        <div className="loading">Loading</div>
      </div>
    </>
  )
}
export default LoadingScreen

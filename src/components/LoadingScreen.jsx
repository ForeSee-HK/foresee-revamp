import './LoadingScreen.css'
import Iris from '../assets/iris.svg'
import Sclera from '../assets/sclera.svg'

const LoadingScreen=()=> {
  return (
    <>
      <div className="main">
        <div className="container"> 
          <img src={Sclera} className="eye" /> 
          <img src={Iris} className="eye roll" /> 
        </div>
        <div className="loading">Loading</div>
      </div>
    </>
  )
}
export default LoadingScreen

import './LoadingScreen.css'

const LoadingScreen=()=> {
  return (
    <>
      <div className="main">
        <div className="container"> 
          <img className="eye" src='./sclera.svg' /> 
          <img className="eye roll" src='./iris.svg' /> 
        </div>
        <div className="loading">Loading</div>
      </div>
    </>
  )
}
export default LoadingScreen

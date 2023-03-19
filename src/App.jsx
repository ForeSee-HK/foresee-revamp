import React, { Suspense, lazy } from 'react'
import reactLogo from './assets/react.svg'
import LoadingScreen from './components/LoadingScreen.jsx'
import './App.css'
// import { Route, Switch } from 'react-router-dom'

const Home = lazy(() => {
  return new Promise (resolve => {
    setTimeout(() => resolve(import("./components/Home.jsx")), 3000)
  })
})

const App = () => {
  const OnChildMount = (componentName) => {
    console.log(componentName)
  }

  return (
    <div className="App">
      <Suspense fallback={ <LoadingScreen /> }>
        <Home onMount={OnChildMount} />
      </Suspense>
    </div>
  )
}

export default App

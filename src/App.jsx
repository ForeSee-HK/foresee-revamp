import React, { Suspense, lazy } from 'react'
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
    <>
      <Suspense fallback={ <LoadingScreen /> }>
        <Home onMount={OnChildMount} />
        <Home onMount={OnChildMount} />
        <Home onMount={OnChildMount} />
        <Home onMount={OnChildMount} />
        <Home onMount={OnChildMount} />
        <Home onMount={OnChildMount} />
      </Suspense>
    </>
  )
}

export default App

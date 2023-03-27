import React, { Suspense, lazy, useRef, useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen.jsx'
import './App.css'
import useElementOnScreen from './components/hooks/useElementOnScreen'

const Home = lazy(() => {
  return new Promise (resolve => {
    setTimeout(() => resolve(import("./components/Home.jsx")), 3000)
  })
})

const App = () => {
  const OnChildMount = (componentName) => {
    console.log(componentName)
  }
  
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  })

  return (
    <>
      <Suspense fallback={ <LoadingScreen /> }>
        <Home onMount={OnChildMount} />
        <Home onMount={OnChildMount} />
        <Home onMount={OnChildMount} />
        <div ref={containerRef}>
          <p>{isVisible ? "Yes" : "No"}</p>
        </div>
        <Home onMount={OnChildMount} />
        <Home onMount={OnChildMount} />
        <Home onMount={OnChildMount} />
      </Suspense>
    </>
  )
}

export default App

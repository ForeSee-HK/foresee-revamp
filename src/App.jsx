import React, { Suspense, lazy } from 'react'
import LoadingScreen from './components/LoadingScreen.jsx'
import './App.css'

const Layout = lazy(() => {
  return new Promise (resolve => {
    setTimeout(() => resolve(import("./Layout.jsx")), 3000)
  })
})

// This App.jsx is only for 1) suspensing the Layout 2) show loading
const App = () => {
  return (
    <>
      <Suspense fallback={ <LoadingScreen /> }>
        <Layout />
      </Suspense>
    </>
  )
}

export default App

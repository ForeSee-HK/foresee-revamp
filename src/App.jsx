import React, { Suspense, lazy } from 'react'
import LoadingScreen from './components/LoadingScreen.jsx'
import './App.css'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import About from "./components/pages/About.jsx"
import Join from "./components/pages/Join.jsx"
import Events from "./components/pages/Events.jsx"
import Games from "./components/pages/Games.jsx"
import Home from "./components/pages/Home.jsx"
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
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="join" element={<Join/>} />
          <Route path="events" element={<Events/>} />
          <Route path="games" element={<Games/>} />
         
        </Route>
      </Routes>
    </BrowserRouter>
     
      </Suspense>
    </>
  )
}

export default App

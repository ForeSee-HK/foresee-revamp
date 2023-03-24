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
    <div className="App">
      <Suspense fallback={ <LoadingScreen /> }>
        <Home onMount={OnChildMount} />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sit numquam rerum accusantium maxime quam, odio laborum repellat est veniam nisi reiciendis blanditiis quis. Est enim odio non debitis officiis?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sit numquam rerum accusantium maxime quam, odio laborum repellat est veniam nisi reiciendis blanditiis quis. Est enim odio non debitis officiis?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sit numquam rerum accusantium maxime quam, odio laborum repellat est veniam nisi reiciendis blanditiis quis. Est enim odio non debitis officiis?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sit numquam rerum accusantium maxime quam, odio laborum repellat est veniam nisi reiciendis blanditiis quis. Est enim odio non debitis officiis?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sit numquam rerum accusantium maxime quam, odio laborum repellat est veniam nisi reiciendis blanditiis quis. Est enim odio non debitis officiis?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sit numquam rerum accusantium maxime quam, odio laborum repellat est veniam nisi reiciendis blanditiis quis. Est enim odio non debitis officiis?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sit numquam rerum accusantium maxime quam, odio laborum repellat est veniam nisi reiciendis blanditiis quis. Est enim odio non debitis officiis?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sit numquam rerum accusantium maxime quam, odio laborum repellat est veniam nisi reiciendis blanditiis quis. Est enim odio non debitis officiis?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sit numquam rerum accusantium maxime quam, odio laborum repellat est veniam nisi reiciendis blanditiis quis. Est enim odio non debitis officiis?</p>
      </Suspense>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LoadingScreen from './components/LoadingScreen.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LoadingScreen />
    </div>
  )
}

export default App

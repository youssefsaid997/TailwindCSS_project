import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/shared/Header'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/shared/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
       <Home />
       <About/>
       <Footer/>
    </>
  )
}

export default App

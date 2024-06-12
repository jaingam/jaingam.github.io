import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import "./index.css";
import Footer from './sections/Footer'
import Sidebar from './components/Sidebar'

function App() {
  // const [count, setCount] = useState(0)
  // 
  return (
    <div class="flex flex-row items-center
    scroll-smooth
    bg-white dark:bg-slate-800 
    text-slate-900 dark:text-slate-50 
    font- leading-loose 
    duration-75
    ">

      <Sidebar />

      <div class="flex flex-col items-center w-full">
        <About />
        <Experience />
        <Footer />
      </div></div>

  )
}

export default App

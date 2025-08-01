import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from "react-router";

function App() {

  return (
    <>
      <h1>REACT ROUTERS</h1>
      <BrowserRouter>
      <Link to = "/" >HOME</Link>
      <Link to="/About">ABOUT</Link>
      <Link to = "/Contact">CONTACT</Link>
      <Routes>
        <Route path='/' element={<h1>HOME</h1>}/>
        <Route path='/About' element={<h1>ABOUT</h1>}/>
        <Route path='/Contact' element={<h1>CONTACT</h1>}/>
        <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>
        <Route/>
        <Route/>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

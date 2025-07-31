import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function App() {
  const inputRef = useRef(null);
  const inputHandeler = ()=>{
    inputRef.current.style.color= 'red';
    inputRef.current.style.background = 'yellow';
  }
  return (
    <>
      <h1>UseRef</h1>
      <input type="text" placeholder='enter your text' ref={inputRef}/>
      <button onClick={inputHandeler}>CHANGE</button>
    </>
  )
}

export default App

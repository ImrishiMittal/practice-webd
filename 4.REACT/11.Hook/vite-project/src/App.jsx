import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  function increase(e){
    setCount(count + 1);
  }
  function call(){
    console.log("THIS FUNCTION CALL WAS CALLED")
  }
  function Hello(){
    console.log("THIS FUNCTION HELLO WAS CALLED")
  }
  useEffect(()=> {
    Hello();
  }, [Hello]) 
  useEffect(() => {
    call();
  }, [count]);



  // call(); //Like this the function is being called everytime in rerenders
  return (
    <>
      <div>
        <h2>COUNTER {count}</h2>
        <button onClick={increase}>INCERASE</button>
        <button onClick={Hello}>HELLO</button>
        </div>
    </>
  )
}

export default App

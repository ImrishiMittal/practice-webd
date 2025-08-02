import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect,useState } from 'react';

function App() {
  const[useData,setUserData] = useState([]);
  useEffect(()=>{
    getData();
  },[])

  async function getData(){
    const url = "https://jsonplaceholder.typicode.com/users";
    let response = await fetch(url);
    response = await response.json();
    setUserData(response)
  }
  console.log(useData);
  return (
    <>
     <h1>FETCH DATA FROM API</h1>
     {
  useData.map((user) => {
    return (
      <div key={user.id}>
        <h3>{user.name}</h3>
        <div>
          <ol>
            <li>{user.address.street}</li>
          </ol>
        </div>
      </div>
    );
  })
}

    </>
  )
}

export default App

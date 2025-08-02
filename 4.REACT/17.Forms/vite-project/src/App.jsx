import { useState } from 'react';
import './App.css';

function App() {
  const [currentName, setName] = useState('');
  const [currentNameErr, setNameErr] = useState('');

  const [currentPass, setPass] = useState('');
  const [currentPassErr, setPassErr] = useState('');

  const name = (event) => {
    const value = event.target.value;
    setName(value);

    const regex = /^[A-Za-z0-9]+$/;

    if (!regex.test(value)) {
      setNameErr("Only alphanumeric characters allowed");
    } else if (value.length > 5) {
      setNameErr("Length should be less than or equal to 5 letters");
    } else {
      setNameErr("");
    }
  };

  const pass = (event) => {
    const value = event.target.value;
    setPass(value);

    if (value.length < 8) {
      setPassErr("Password should be at least 8 characters");
    } else {
      setPassErr("");
    }
  };

  return (
    <>
      <h1>FORM</h1>
      <div>
        <input onChange={name} type="text" placeholder="Enter your userID" />
        <span className="Error">{currentNameErr}</span>
        <br /><br />
        <input onChange={pass} type="password" placeholder="Enter your password" />
        <span className="Error">{currentPassErr}</span>
        <br /><br />
        <button type="submit">Submit</button>
      </div>
    </>
  );
}

export default App;

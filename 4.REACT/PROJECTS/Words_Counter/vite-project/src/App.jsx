import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  return (
    <>
    <h1>TEXT COUNTER</h1>
      <div>
        <textarea value={text} name="" id="" cols="30" rows="10" placeholder='TYPE SOMETHING......' onChange={(e)=>setText(e.target.value)}>
        </textarea>
          <p>Characters : {text.length}</p>
          <p> Words: {text.trim() === '' ? 0 : text.trim().split(/\s+/).length}</p>
      </div>
    </>
  );
}

export default App;

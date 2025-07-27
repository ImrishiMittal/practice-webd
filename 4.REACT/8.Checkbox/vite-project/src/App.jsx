import { useState } from 'react';

function App() {
  const [check, setCheck] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setCheck([...check, value]); // Add to array
    } else {
      setCheck(check.filter((item) => item !== value)); // Remove from array
    }
  };

  return (
    <>
      <div>
        <label htmlFor="Ball">Ball</label>
        <input
          type="checkbox"
          value="Ball"
          onChange={handleCheckboxChange}
        />
      </div>
      <div>
        <label htmlFor="Bat">Bat</label>
        <input
          type="checkbox"
          value="Bat"
          onChange={handleCheckboxChange}
        />
      </div>
      <div>
        <label htmlFor="Wicket">Wicket</label>
        <input
          type="checkbox"
          value="Wicket"
          onChange={handleCheckboxChange}
        />
      </div>

      <div>
        <h2>THE OPTIONS YOU CHOSE</h2>
        {check.length > 0 ? (
          check.map((item, index) => <h4 key={index}>{item}</h4>)
        ) : (
          <h4>No options selected</h4>
        )}
      </div>
    </>
  );
}

export default App;

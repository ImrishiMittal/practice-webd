import { useState } from "react";

function App() {
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");

  return (
    <>
      <div>
        <label>GENDER</label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
            checked={gender === "Male"}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
            checked={gender === "Female"}
          />{" "}
          Female
        </label>
        <h2>YOU SELECTED: {gender}</h2>
      </div>

      <div>
        <label>City</label>
        <br />
        <select onChange={(e) => setCity(e.target.value)} value={city}>
          <option value="">-- Select a City --</option>
          <option value="BOKARO">BOKARO</option>
          <option value="JAIPUR">JAIPUR</option>
          <option value="DELHI">DELHI</option>
        </select>
        <h2>YOU SELECTED: {city}</h2>
      </div>
    </>
  );
}

export default App;

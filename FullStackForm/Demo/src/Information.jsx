import { useState } from "react";
import styles from "./styles.module.css";

function Infromation() {
  const [curreName, SetName] = useState("");
  const [currEmail, SetEmail] = useState("");
  const [currPhone, SetPhone] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload

    const formData = {
      name: curreName,
      email: currEmail,
      phone: currPhone,
      gender: gender,
    };

    fetch("http://localhost:5000/api/form", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
})
  .then((res) => res.json())
  .then((data) => {
    console.log("Backend response:", data);
    alert("Form submitted successfully");
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/*
fetch("URL", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((result) => {
    // success
  })
  .catch((error) => {
    // error
  });









  fetch("http://localhost:5000/api/form", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});


*/
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>DEMO DATA</h1>

        <div>
          <label><b>NAME</b></label>
          <input
            type="text"
            placeholder="Enter your name here......"
            value={curreName}
            onChange={(e) => SetName(e.target.value)}
          />
        </div>

        <div>
          <label><b>EMAIL</b></label>
          <input
            type="email"
            placeholder="Enter your e-mail here......"
            value={currEmail}
            onChange={(e) => SetEmail(e.target.value)}
          />
        </div>

        <div>
          <label><b>PHONE</b></label>
          <input
            type="tel"
            placeholder="Enter your number here......"
            value={currPhone}
            onChange={(e) => SetPhone(e.target.value)}
          />
        </div>

        <div>
          <label><b>GENDER</b></label>

          <label>
            <input
              type="radio"
              name="gender"
              value="MALE"
              checked={gender === "MALE"}
              onChange={(e) => setGender(e.target.value)}
            />
            MALE
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="FEMALE"
              checked={gender === "FEMALE"}
              onChange={(e) => setGender(e.target.value)}
            />
            FEMALE
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Infromation;

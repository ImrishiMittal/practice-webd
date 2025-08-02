import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", state);
    // you can also send data to API here
    dispatch({ type: "RESET" });
  };

  return (
    <div className="App">
      <h2>Form using useReducer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2>Name : {state.name}</h2>
      <h2>Email : {state.name}</h2>
    </div>
  );
}

export default App;

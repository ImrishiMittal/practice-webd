import useFormAction from "./useFormAction";

function App() {
  const {
    name,
    nameErr,
    pass,
    passErr,
    validateName,
    validatePass
  } = useFormAction();

  return (
    <>
      <h1>FORM</h1>
      <div>
        <input onChange={(e) => validateName(e.target.value)} type="text" placeholder='Enter your userID' />
        <span className='Error'>{nameErr}</span>
        <br /><br />
        <input onChange={(e) => validatePass(e.target.value)} type="password" placeholder='Enter your password' />
        <span className='Error'>{passErr}</span>
        <br /><br />
        <button type='Submit'>Submit</button>
      </div>
    </>
  );
}
export default App;

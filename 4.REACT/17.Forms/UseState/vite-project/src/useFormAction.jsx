import { useState } from "react";

export default function useFormAction() {
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [pass, setPass] = useState('');
  const [passErr, setPassErr] = useState('');

  const validateName = (value) => {
    if (value.length < 5) {
      setNameErr("Name should be at least 5 characters");
    } else {
      setNameErr("");
    }
    setName(value);
  };

  const validatePass = (value) => {
    if (value.length < 8) {
      setPassErr("Password should be at least 8 characters");
    } else {
      setPassErr("");
    }
    setPass(value);
  };

  return {
    name,
    nameErr,
    pass,
    passErr,
    validateName,
    validatePass,
  };
}

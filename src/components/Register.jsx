import React from "react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Register() {
  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function registerUser(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/register", inputValues)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      navigate('/login')
  }

  function onChange(e) {
    setInputValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  return (
    <div>
      <h1>REGISTER</h1>
      <form onSubmit={registerUser}>
        <label htmlFor="username">username</label>
        <input
          value={inputValues.username}
          onChange={onChange}
          name="username"
          id="username"
          type="text"
        />
        <label htmlFor="email">email</label>
        <input
          value={inputValues.email}
          onChange={onChange}
          name="email"
          id="email"
          type="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={inputValues.password}
          onChange={onChange}
          name="password"
          id="password"
          type="password"
        />
        <input
          type="submit"
          placeholder="submit"
          value="register"
          className="submit-button"
        />
      </form>
    </div>
  );
}

export default Register;

import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [newData, setNewData] = useState([])
  const navigate = useNavigate()

  async function loginUser(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/login", inputValues)
      .then((response) => {
        setNewData((prevData) => { return [ ...prevData, response.data] })
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      navigate('/user')
  }

  function onChange(e) {
    setInputValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  console.log(newData);

  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={loginUser}>
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
          value="login"
          className="submit-button"
        />
      </form>
      <div>
        <ul>
          {newData.length > 0 ? newData.map((data) => {
            return <li>{data.email}</li>
          })
           : null}
        </ul>
      </div>
    </div>
  );
}

export default Login;

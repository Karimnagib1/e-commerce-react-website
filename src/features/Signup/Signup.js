import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
  const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // let data = new FormData();
    // data.append("name", name);
    // data.append("email", email);
    // data.append("password", password);
    // data.append("password2", password2);
    let data = {
      name: name,
      email: email,
      password: password,
      password2:password2
    }
    const response = await axios.post(
      "http://localhost:5000/api/users/register",
      data
    );
    console.log(response.data);
    if (response.status === 200){
      navigate('/login');
    }
  };

  return (
    <div className="content-wrap">
      <div className="signup-c">
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name </label>
          <input
            placeholder="Enter your name"
            id="name"
            name="name"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="email">Email </label>
          <input
            placeholder="Enter your email"
            id="email"
            name="email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password">Password </label>
          <input
            placeholder="Enter your password"
            id="password"
            name="password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="password2">Confirm Password </label>

          <input
            placeholder="Confirm your password"
            id="password2"
            name="password2"
            type="password"
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      
    </div>
  );
};

export default Signup;

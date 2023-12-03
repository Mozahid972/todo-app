import React, { useState } from "react";
import "./Signup.css";
import { HeadingConmponent } from "./HeadingConmponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Signup = () => {
  const [input, setInput] = useState({ email: "", username: "", password: "" });
  const history = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };




  const Submit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${window.location.origin}/api/v1/register`, input)
      .then((response) => {
        if (response.data.message === "User Already Exists") {
          alert(response.data.message);
        } else {
          alert(response.data.message);
          setInput({
            email: "",
            username: "",
            password: "",
          });
          history("/signin");
        }
      });
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-3">
              <input
                className="p-2 my-3  input-signup"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={change}
                value={input.email}
              />
              <input
                className="p-2 my-3 input-signup"
                type="text"
                name="username"
                placeholder="Enter Your Username"
                onChange={change}
                value={input.username}
              />
              <input
                className="p-2 my-3 input-signup"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                onChange={change}
                value={input.password}
              />
              <button className="btn-signup p-2" onClick={Submit}>
                SignUp
              </button>
            </div>
          </div>
          <div className="col-lg-4 column col-left d-lg-flex justify-content-center align-items-center d-none">
            <HeadingConmponent first="Sign" second="Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

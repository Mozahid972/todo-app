import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { HeadingConmponent } from "./HeadingConmponent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
export const Signin = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const history = useNavigate();
  const dispatch = useDispatch();

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };


  //   e.preventDefault();
  //   await axios
  //     .post("http://localhost:3000/api/v1/login", input)
  //     .then((response) => {
  //       sessionStorage("id", response.data.others._id);
  //       dispatch(authActions.login());
  //       history("/todo");
  //     });
  // };

  const Submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${window.location.origin}/api/v1/login`,
        input
      );
      console.log(response.data);
      if (response.data) {
        sessionStorage.setItem("id", response.data.others._id);
        dispatch(authActions.login());
        history("/todo");
      } else {
        // Handle the case where the response does not contain the expected data
        console.error("Response data or _id not found in the response.");
      }
    } catch (error) {
      // Handle any errors that occurred during the HTTP request
      console.error("An error occurred:", error);
    }
  };
  return (
    <div>
      <div className="signup">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 column col-left d-none d-lg-flex justify-content-center align-items-center">
              <HeadingConmponent first="Sign" second="In" />
            </div>
            <div className="col-lg-8 d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column w-100 p-3">
                <input
                  className="p-2 my-3  input-signup"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={input.email}
                  onChange={change}
                />

                <input
                  className="p-2 my-3 input-signup"
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  value={input.password}
                  onChange={change}
                />
                <button className="btn-signup p-2" onClick={Submit}>
                  SignIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./user.css";

const Signup = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  function validation() {
    let flag = true;
    if (state.email === "") {
      // errors.email = "username cannot be empty";
      setErrors({ ...errors, email: "username cannot be empty" });
      flag = false;
    }
    if (state.password === "" || state.password.length < 6) {
      setErrors({
        ...errors,
        password: "password must be of 6 to 16 characters",
      });
      flag = false;
    }

    if (
      state.confirm_password === "" ||
      state.password !== state.confirm_password
    ) {
      setErrors({ ...errors, confirm_password: "password must be same" });
      flag = false;
    }

    return flag;
  }

  function handleSubmit(e) {
    e.preventDefault();
    let res = validation();
    console.log({ errors });
    console.log(state);

    if (res) {
      const URL = "http://127.0.0.1:5000/register";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(state),
      };

      fetch(URL, options)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.errors) {
            console.log(data.errors[0].msg);
            alert(data.errors[0].msg);
          } else {
            if (data.status === "Failed") {
              alert(data.message);
            } else {
              setState({
                ...state,
                email: "",
                password: "",
                confirmPassword: "",
              });
              navigate("/");
            }
          }
        });
    }
  }

  return (
    <div className="body">
      <div className="user">
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="email"
              email="email"
              value={state.email}
              onChange={(e) => {
                setErrors({ ...errors, email: "" });
                setState({ ...state, email: e.target.value });
              }}
            />
          </div>
          {errors.email}
          <div>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={state.password}
              onChange={(e) => {
                setErrors({ ...errors, password: "" });
                setState({ ...state, password: e.target.value });
              }}
            />
          </div>
          {errors.password}
          <div>
            <input
              type="password"
              placeholder="confirm password"
              value={state.confirm_password}
              name="confirm_password"
              onChange={(e) => {
                setErrors({ ...errors, confirm_password: "" });
                setState({ ...state, confirm_password: e.target.value });
              }}
            />
          </div>
          {errors.confirm_password}
          <div>
            <button>Register</button>
          </div>
        </form>
        <p onClick={() => navigate("/")}>
          <span> Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;

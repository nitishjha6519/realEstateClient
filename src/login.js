import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./user.css";

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function validation() {
    let error = { ...errors };
    if (state.email === "") {
      error.email = "username cannot be empty";
    } else {
      error.email = "";
    }
    if (state.password === "") {
      error.password = "password cannot be empty";
    } else {
      error.password = "";
    }
    console.log({ error });
    setErrors(error);
  }

  function handleSubmit(e) {
    e.preventDefault();
    validation();
    const URL = "http://127.0.0.1:5000/login";
    const Options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(state),
    };
    console.log({ state });
    if (errors.email === "" && errors.password === "") {
      // console.log(errors.email);
      fetch(URL, Options)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.status === "success") {
            setState({ ...state, username: "", password: "" });
            const token = data.token;
            const useremail = data.email;
            const userid = data.userid;
            window.localStorage.setItem("token", token);
            window.localStorage.setItem("email", useremail);
            window.localStorage.setItem("userid", userid);
            setState({
              ...state,
              email: "",
              password: "",
            });
            navigate("/dashboard");
          } else {
            alert(data.message);
          }
        });
    }
  }

  return (
    <div className="body">
      <div className="user">
        <h2>Member Login</h2>

        <form onSubmit={handleSubmit} autoComplete="false">
          <div>
            <input
              type="email"
              placeholder="email"
              value={state.email}
              name="email"
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
              value={state.password}
              name="password"
              onChange={(e) => {
                setErrors({ ...errors, password: "" });
                setState({ ...state, password: e.target.value });
              }}
            />
          </div>
          {errors.password}
          <div>
            <button>Login</button>
          </div>
        </form>

        <p onClick={() => navigate("/signup")}>
          Do not have account? <span> Signup</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;

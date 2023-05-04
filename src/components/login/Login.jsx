import React from "react";
import "./Login.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
export const Login = () => {
  // To store the username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const loginHandler = () => {
    const user = {
      username,
      password,
    };
    fetch("http://localhost:3001/auth/v1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log("token as data", data);
        localStorage.setItem("token", data["token"]);
        history.push("/");
      });
  };
  return (
    <div
      className="mainn row pt-5 pb-5"
      style={{ paddingTop: "100px", height: "100vh", color: "white" }}
    >
      <div className="col-md-4"></div>
      <form className="col-md-4" style={{ backgroundColor: "#ffffff44" }}>
        <h1 className="mb-5">LOGIN</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Keep me logged in
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => loginHandler()}
        >
          Submit
        </button>
        <p>New Here? Register Now!</p>
        <a
          href="register"
          className="btn btn-primary"
          style={{ color: "white" }}
        >
          Register
        </a>
      </form>
      <div className="col-md-4"></div>
    </div>
  );
};

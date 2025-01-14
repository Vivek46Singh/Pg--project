// App.js

import React, { useState } from "react";
// import app.css here
// import "../../App.css";
import "../../utils/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data); // Response from the backend
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        {/* <p Style="margin-Right: 120px">Welcome to</p> */}
        <h2>PG-MANAGEMENT</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username" Style="margin-Right: 100px">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" Style="margin-Right: 110px">
              Password
            </label>

            <input
            className="input-group"
              type={showPassword ? "text" : "password"}
              Style="margin-Right: -18px"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </span>
          </div>
          <div className="forgot-password-link">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <h2>
            <button className="bstyle" type="submit" >Login</button>
          </h2>
          <h2>
            <button className="Gstyle"type="submit"  >Login with Google</button>
          </h2>
        </form>
      </div>
    </div>
  );
}

export default Login;

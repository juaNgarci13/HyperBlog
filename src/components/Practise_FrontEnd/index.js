import React from "react";
import "./styles.css";

// logos
import logo1 from "./logos/logo_yard_sale.svg";

function Index() {
  return (
    <body className="body_PF">
      <div className="login">
        <div className="form-container">
          <img className="logo-login" src={logo1} alt="logo" />
          <h1 className="title">Create a new Password</h1>
          <p className="sub-title">Enter a new Password for your acount</p>
          <form action="/" className="form">
            <label for="Password" className="label">
              Password
            </label>
            <input
              className="input"
              type="password"
              id="Password"
              placeholder="********"
            />

            <label for="New-password" className="label">
              New Password
            </label>
            <input
              className="input"
              type="password"
              id="New-password"
              placeholder="********"
            />

            <input
              className="primary-button input-confirm"
              type="submit"
              value="Confirm"
            />
          </form>
        </div>
      </div>
    </body>
  );
}

export default Index;

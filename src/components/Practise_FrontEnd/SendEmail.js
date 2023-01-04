import React from "react";
import "./styles.css";

// logos
import logo1 from "./logos/logo_yard_sale.svg";
// Icons
import Icon_Email from "./icons/email.svg";

function SendEmail() {
  return (
    <body className="body_PF">
      <div className="Email">
        <div className="email-container">
          <img className="logo-login" src={logo1} alt="logo" />
          <h1 className="title">Email has been sent!!</h1>
          <p className="sub-title">
            Please, check your inbox for instructions on how to reset the
            password
          </p>
          <div className="email-image">
            <img className="" src={Icon_Email} alt="" />
          </div>
          <input
            className="primary-button input-confirm"
            type="submit"
            value="Login"
            formAction="/"
          />
          <p className="request-email">
            <span>Didn't recive the email?</span>
            <a href="/">Resend</a>
          </p>
        </div>
      </div>
    </body>
  );
}

export default SendEmail;

{
  /* <div className="login">
  <div className="form-container">
    <img className="logo-login" src={logo1} alt="logo" />
    <h1 className="title">Email has been sent!!</h1>
    <p className="sub-title">
      Please, check your inbox for instructions on how to reset the password
    </p>
  </div>
</div>; */
}

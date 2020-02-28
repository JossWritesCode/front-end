import React from "react";
import { Header, LoginForm } from "../../";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GoogleIcon from "../../../assets/images/google-icon.png";
const LoginPage = ({ className }) => {
  return (
    <div className={`${className} LoginPage Page`}>
      <Header title="Login" />
      <LoginForm />
      <p className="LoginPage-accountless">
        Don't have an account? Register here
      </p>

      <div className="LoginPage-OAuth-options">
        <p>Login</p>
        <p>with your Social Media Account</p>
        <p className="LoginPage-OAuth-icons">
          <FacebookIcon color="primary" />
          <TwitterIcon color="primary" />
          <div>
            <img src={GoogleIcon} alt="google-icon" srcset="" />
          </div>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";
import { Header, LoginForm } from "../../";
<<<<<<< HEAD
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GoogleIcon from "../../../assets/images/google-icon.png";
=======
import { OAuthOptions } from "../../";
>>>>>>> 32a3b58d16bd5d29b9c779922ba30fb7e308dd48
const LoginPage = ({ className }) => {
  return (
    <div className={`${className} LoginPage Page`}>
      <Header title="Login" />
      <LoginForm />
<<<<<<< HEAD
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
=======
      <OAuthOptions />
>>>>>>> 32a3b58d16bd5d29b9c779922ba30fb7e308dd48
    </div>
  );
};

export default LoginPage;

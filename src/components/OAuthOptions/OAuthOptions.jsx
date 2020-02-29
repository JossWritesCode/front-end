import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GoogleIcon from "../../assets/images/google-icon.png";
import { Link } from "react-router-dom";
const OAuthOptions = ({ mode }) => {
  return (
    <>
      <p className="LoginPage-accountless">
        {mode ? "H" : `Don't h`}ave an account?
        {!mode ? " Register " : " Login "}
        <Link to={mode ? "/login" : "/register"}>here</Link>
      </p>
      <div className="OAuthOptions">
        <p>{mode ? "Sign up" : "Login"}</p>
        <p>with your Social Media Account</p>
        <p className="OAuthOptions-icons">
          <FacebookIcon color="primary" />
          <TwitterIcon color="primary" />
          <div>
            <img src={GoogleIcon} alt="google-icon" srcset="" />
          </div>
        </p>
      </div>
    </>
  );
};

export default OAuthOptions;

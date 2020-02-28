import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GoogleIcon from "../../assets/images/google-icon.png";
const OAuthOptions = ({ mode }) => {
  return (
    <>
      <p className="LoginPage-accountless">
        {mode ? "H" : `Don't h`}ave an account?
        {!mode ? " Register" : " Login"} here
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

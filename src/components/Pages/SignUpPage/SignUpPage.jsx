import React from "react";
import { Header, SignUpForm, OAuthOptions } from "../..";

const SignUp = ({ className }) => {
  return (
    <div className={`${className} SignUpPage Page`}>
      <Header title="Sign Up" />

      <SignUpForm />

      <OAuthOptions mode />
    </div>
  );
};

export default SignUp;

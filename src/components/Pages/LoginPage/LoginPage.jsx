import React from "react";
import { Header, LoginForm } from "../../";
import { OAuthOptions } from "../../";
const LoginPage = ({ className }) => {
  return (
    <div className={`${className} LoginPage Page`}>
      <Header title="Login" />
      <LoginForm />
      <OAuthOptions />
    </div>
  );
};

export default LoginPage;

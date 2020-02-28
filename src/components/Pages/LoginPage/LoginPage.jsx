import React from "react";
import { Header, LoginForm } from "../../";
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
        <p className="LoginPage-OAuth-icons"></p>
      </div>
    </div>
  );
};

export default LoginPage;

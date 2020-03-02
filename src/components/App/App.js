import React from "react";
import {
  Navbar,
  SideDrawerMenu,
  AuthModal,
  LoginPage,
  SignupPage as RegisterPage,
  DonationPage,
  ConfirmationModalContainer,
  LoadingModal
} from "../";
import ProtectedRoute from "../utils/ProtectedRoute";

import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthModal />
      <SideDrawerMenu />
      <ConfirmationModalContainer />
      <LoadingModal />
      <Navbar />
      {/* <ProtectedRoute path='/' component={DonationPage} /> */}
      <Switch>
        <Route
          path="/login"
          render={() => {
            return <LoginPage />;
          }}
        />
        <Route
          path="/register"
          render={() => {
            return <RegisterPage />;
          }}
        />

        <ProtectedRoute path="/donate" component={DonationPage} />

        <Route path="/" exact render={() => <Redirect to="/login" />} />
      </Switch>
    </div>
  );
}

export default App;

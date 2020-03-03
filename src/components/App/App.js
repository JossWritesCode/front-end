import React from "react";
import {
  Navbar,
  SideDrawerMenu,
  AuthModal,
  LoginPage,
  SignupPage as RegisterPage,
  DonationPage,
  ConfirmationModalContainer
} from "../";
import ProtectedRoute from "../utils/ProtectedRoute";

import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthModal />
      <SideDrawerMenu />
      <ConfirmationModalContainer />
      <Navbar />
      {/* <ProtectedRoute path='/' component={DonationPage} /> */}
      <Switch>
        <Route
          exact path="/"
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

        <Route path="/donate" render={() => <DonationPage />} />

       {/* <Route path="/" exact render={() => <Redirect to="/login" />}*/} />
      </Switch>
    </div>
  );
}

export default App;

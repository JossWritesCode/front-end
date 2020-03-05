import React from "react";
import {
  Navbar,
  SideDrawerMenu,
  AuthModal,
  LoginPage,
  SignupPage as RegisterPage,
  DonationPage,
  ConfirmationModalContainer,
  LoadingModal,
  BrowsePage,
  ProjectList
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

      <Switch>
        <Route
          exact
          path="/"
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

        <Route
          path="/login"
          render={() => {
            return <LoginPage />;
          }}
        />

        <ProtectedRoute path="/donate" component={DonationPage} />
        <ProtectedRoute path="/browse" component={BrowsePage} />

        <Route path="/" exact render={() => <Redirect to="/login" />} />
        <Route path="/projects" component={ProjectList} />
      </Switch>
    </div>
  );
}

export default App;

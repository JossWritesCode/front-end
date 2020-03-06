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

import UpdateProjectForm from "../Form/UdateProjectForm/UpdateProjectForm";
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

        <Route
          path="/edit"
          render={() => {
            return <UpdateProjectForm />;
          }}
        />

        <ProtectedRoute path="/donate" component={DonationPage} />
        <ProtectedRoute path="/browse" component={BrowsePage} />

        <Route path="/" exact render={() => <Redirect to="/login" />} />
        <Route render={() => <Redirect to="/login" />} />
      </Switch>
    </div>
  );
}

export default App;

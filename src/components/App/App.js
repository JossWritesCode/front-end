import React, { useState } from "react";
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
  const [modalsVisibility, setModalVisibility] = useState({
    authModal: false,
    sideDrawerMenu: false,
    confirmationModal: false
  });

  const modalsVisibilityHandler = (_, modalType) => {
    console.log("firing");
    setModalVisibility({
      ...modalsVisibility,
      [modalType]: !modalsVisibility[modalType]
    });
  };

  return (
    <div className="App">
      <AuthModal
        visibilityHandler={modalsVisibilityHandler}
        show={modalsVisibility.authModal}
      />
      <SideDrawerMenu
        visibilityHandler={modalsVisibilityHandler}
        show={modalsVisibility.sideDrawerMenu}
      />
      <Navbar visibilityHandler={modalsVisibilityHandler} />

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

        <Route
          path="/donate"
          render={() => (
            <DonationPage
              visibilityHandler={modalsVisibilityHandler}
              show={modalsVisibility.confirmationModal}
            />
          )}
        />

        <Route path="/" exact render={() => <Redirect to="/login" />} />
      </Switch>
    </div>
  );
}

export default App;

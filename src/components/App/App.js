

import DonationPage from '../DonatePage/DonationPage'
import React, { useState } from "react";
import { Navbar, SideDrawerMenu, AuthModal } from "../";
import ProtectedRoute from "../utils/ProtectedRoute";
import LoginPage from "../Pages/LoginPage/LoginPage";

function App() {
  const [modalsVisibility, setModalVisibility] = useState({
    authModal: false,
    sideDrawerMenu: false
  });

  const modalsVisibilityHandler = event => {
    console.log('clicked by', event.target);
    const classListContainsSideDrawer = event.target.classList.value
      .split(' ')
      .filter(value => value.length > 0)
      .map(value => value.split('-'))
      .some(value => value.includes('SideDrawer'));
    if (classListContainsSideDrawer) {
      const newModalVisibilityState = {
        ...modalsVisibility,
        sideDrawerMenu: !modalsVisibility.sideDrawerMenu
      };
      setModalVisibility(newModalVisibilityState);
    }
  };

  return (
    <div className='App'>
      <AuthModal
        visibilityHandler={modalsVisibilityHandler}
        show={modalsVisibility.authModal}
      />
      <SideDrawerMenu
        visibilityHandler={modalsVisibilityHandler}
        show={modalsVisibility.sideDrawerMenu}
      />
      <Navbar visibilityHandler={modalsVisibilityHandler} />

      <ProtectedRoute path='/' component={DonationPage} />

    </div>
  );
}

export default App;

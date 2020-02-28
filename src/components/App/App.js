<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1ce780204247e6353fff223f4d0e7a6c3f34c6ee
import React, { useState } from 'react';
import { Navbar, SideDrawerMenu, AuthModal } from '../';
import ProtectedRoute from '../utils/ProtectedRoute';
import LoginPage from '../Pages/LoginPage/LoginPage';
<<<<<<< HEAD
=======
import DonationPage from '../DonatePage/DonationPage'
=======
import React, { useState } from "react";
import { Navbar, SideDrawerMenu, AuthModal } from "../";
import ProtectedRoute from "../utils/ProtectedRoute";
import LoginPage from "../Pages/LoginPage/LoginPage";
>>>>>>> 6e03e2ea6ed31968f6d19417b7694accde1baec2
>>>>>>> 1ce780204247e6353fff223f4d0e7a6c3f34c6ee
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
<<<<<<< HEAD
      <ProtectedRoute path='/' component={LoginPage} />
=======
<<<<<<< HEAD
      <ProtectedRoute path='/' component={DonationPage} />
=======
      <ProtectedRoute path="/" component={LoginPage} />
>>>>>>> 6e03e2ea6ed31968f6d19417b7694accde1baec2
>>>>>>> 1ce780204247e6353fff223f4d0e7a6c3f34c6ee
    </div>
  );
}

export default App;

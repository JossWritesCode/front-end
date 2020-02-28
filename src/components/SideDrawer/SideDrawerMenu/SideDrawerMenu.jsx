import React from "react";
import { Backdrop, Modal } from "../../";
const SideDrawerMenu = ({ className = "", show, visibilityHandler }) => {
  return (
    <div
      className={`${className} SideDrawer-Menu ModalContainer ${
        show ? "" : "hide"
      }`}
    >
      <Backdrop className="SideDrawer" onClickHandler={visibilityHandler} />
      <Modal>
        <div className="SideDrawer-Menu-link auth-link">Create an Account</div>
        <div className="SideDrawer-Menu-link auth-link">Login</div>
        <div className="SideDrawer-Menu-link">Events</div>
        <div className="SideDrawer-Menu-link">About Us</div>
        <div className="SideDrawer-Menu-link">Our Story</div>
        <div className="SideDrawer-Menu-link">How To Donate</div>
        <div className="SideDrawer-Menu-link">Supporters</div>
        <div className="SideDrawer-Menu-link">Creators</div>
        <div className="SideDrawer-Menu-link">Contact Us</div>
      </Modal>
    </div>
  );
};

export default SideDrawerMenu;

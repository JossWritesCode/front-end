import React from "react";
import { Backdrop, Modal, SideDrawerLink } from "../../";
const SideDrawerMenu = ({ className = "", show, visibilityHandler }) => {
  return (
    <div
      className={`${className} SideDrawer-Menu ModalContainer ${
        show ? "" : "hide"
      }`}
    >
      <Backdrop
        className="SideDrawer"
        onClickHandler={visibilityHandler}
        modalType="sideDrawerMenu"
      />
      <Modal>
        <SideDrawerLink
          className="auth-link"
          text="Create an Account"
          to="/register"
          onClickHandler={visibilityHandler}
        />
        <SideDrawerLink
          className="auth-link"
          text="Login"
          to="/login"
          onClickHandler={visibilityHandler}
        />
        <SideDrawerLink text="Events" />
        <SideDrawerLink text="About Us" />
        <SideDrawerLink text="Our Story" />
        <SideDrawerLink text="How to Donate" to="/donate" />
        <SideDrawerLink text="Supporters" />
        <SideDrawerLink text="Creators" />
        <SideDrawerLink text="Contact Us" />
      </Modal>
    </div>
  );
};

export default SideDrawerMenu;

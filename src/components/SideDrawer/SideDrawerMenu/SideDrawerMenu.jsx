import React from "react";
import { Backdrop, Modal, SideDrawerLink } from "../../";
import { connect } from "react-redux";
const SideDrawerMenu = ({ className = "", show }) => {
  return (
    <div
      className={`${className} SideDrawer-Menu ModalContainer ${
        show ? "" : "hide"
      }`}
    >
      <Backdrop className="SideDrawer" modalType="sideMenuModal" />
      <Modal>
        <SideDrawerLink
          className="auth-link"
          text="Create an Account"
          to="/register"
        />
        <SideDrawerLink className="auth-link" text="Login" to="/login" />
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

const mapStateToProps = ({
  modal: {
    sideMenuModal: { show }
  }
}) => ({ show });

export default connect(mapStateToProps)(SideDrawerMenu);

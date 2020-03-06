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
        <SideDrawerLink text="Events" to="https://sixr.tv/events/" />
        <SideDrawerLink
          text="About Us"
          to="http://crestdr.com/virtual-reality-funding-platform-1/UI/aboutus.html"
        />
        <SideDrawerLink text="Our Story" to="https://sixr.tv/about-us/" />
        <SideDrawerLink text="How to Donate" to="/donate" />
        <SideDrawerLink text="Supporters" to="https://sixr.tv/network/" />
        <SideDrawerLink text="Contact Us" to="https://sixr.tv/contact-us/" />
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

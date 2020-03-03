import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { hideModal } from "../../../redux/actionCreators/modalVisibilityCreators";
const SideDrawerLink = ({ text, className = "", to = "#", hideModal }) => {
  return (
    <div
      className={`${className} SideDrawer-Menu-link`}
      onClick={() => {
        hideModal("sideMenuModal");
      }}
    >
      <Link to={to} className="link">
        {text}
      </Link>
    </div>
  );
};

export default connect(null, { hideModal })(SideDrawerLink);

import React from "react";
import { connect } from "react-redux";
import { showModal } from "../../../redux/actionCreators/modalVisibilityCreators";

const SideDrawerButton = ({ className = "", showModal }) => {
  return (
    <div
      className={`${className} SideDrawer-Button`}
      onClick={() => showModal("sideMenuModal")}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default connect(null, { showModal })(SideDrawerButton);

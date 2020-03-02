import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../../redux/actionCreators/modalVisibilityCreators";
const Backdrop = ({ className = "", modalType, hideModal }) => {
  return (
    <div
      className={`${className} Backdrop`}
      onClick={() => hideModal(modalType)}
    ></div>
  );
};

export default connect(null, { hideModal })(Backdrop);

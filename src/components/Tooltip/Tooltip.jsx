import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { clearErrorStatus } from "../../redux/actionCreators/errorCreator";

const Tooltip = ({ className, status, errorResponse, clearErrorStatus }) => {
  return (
    <div className={`${className} Tooltip ${status ? "" : "hide"}`}>
      <div onClick={() => clearErrorStatus()}>
        <CloseIcon fontSize="small" color="error" />
      </div>
      {errorResponse[status]}
    </div>
  );
};

const mapStateToProps = ({
  auth: {
    error: { status },
    errorResponse
  }
}) => {
  return {
    status,
    errorResponse
  };
};

export default connect(mapStateToProps, { clearErrorStatus })(Tooltip);

import React from "react";
import { Loader, Backdrop, Modal } from "../../";
import { connect } from "react-redux";

const LoadingModal = ({ phase, active }) => {
  return (
    <div className={`ModalContainer Loader ${active ? "" : "hide"}`}>
      <Backdrop />
      <Modal>
        <Loader />
        <p>{phase}</p>
      </Modal>
    </div>
  );
};

const mapStateToProps = ({ loading: { phase, active } }) => ({ phase, active });

export default connect(mapStateToProps)(LoadingModal);

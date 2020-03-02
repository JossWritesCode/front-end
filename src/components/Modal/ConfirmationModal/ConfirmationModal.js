import React from "react";
import { AuthOptionsModal, Backdrop } from "..";

const ConfirmationModal = ({ className = "" }) => {
  return (
    <div className={`${className} ConfirmationModal ModalContainer hide`}>
      <Backdrop />
      <AuthOptionsModal />
    </div>
  );
};

export default AuthModal;

import React from "react";
import { AuthOptionsModal, Backdrop } from "..";

const AuthModal = ({ className = "" }) => {
  return (
    <div className={`${className} AuthModal ModalContainer hide`}>
      <Backdrop />
      <AuthOptionsModal />
    </div>
  );
};

export default AuthModal;

import React from "react";
import { AuthOptionsModal, Backdrop } from "..";

const AuthModal = ({ className = "" }) => {
  return (
    <div className={`${className} AuthModal`}>
      <Backdrop />
      <AuthOptionsModal />
    </div>
  );
};

export default AuthModal;

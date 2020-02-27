import React from "react";
import { Modal } from "../../";

const AuthOptionsModal = () => {
  return (
    <Modal>
      <div className="auth-options">Sign In</div>
      <div className="auth-options">Proceed as guest</div>
      <div className="auth-options">Sign up</div>
    </Modal>
  );
};

export default AuthOptionsModal;

import React from "react";
import { connect } from "react-redux";
import { Modal, Backdrop, DonateButton } from "../../";

const AuthModal = ({
  className = "",
  name,
  method,
  account,
  amount,
  show,
  visibilityHandler
}) => {
  const handleSubmit = event => {
    event.stopPropagation();
    event.preventDefault();

    /**
     * Requires some redux action to send data payload
     * {
     *  name,
     *  method,
     *  account,
     *  amount
     * }
     */

    visibilityHandler(null, "confirmationModal");
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div
        className={`${className} ConfirmationModalContainer ModalContainer ${
          show ? "" : "hide"
        }`}
      >
        <Backdrop
          onClickHandler={visibilityHandler}
          modalType="confirmationModal"
        />
        <Modal className="ConfirmationModal">
          <header>Confirmation</header>
          <div className="ConfirmationModal-information">
            <div className="ConfirmationModal-information-flex-container">
              <div>Name:</div>
              <div>{name}</div>
            </div>
            <div className="ConfirmationModal-information-flex-container">
              <div>Method:</div>
              <div>{method}</div>
            </div>
            <div className="ConfirmationModal-information-flex-container">
              <div>Account</div>
              <div>{account}</div>
            </div>
            <div className="ConfirmationModal-information-flex-container">
              <div>Amount:</div>
              <div>${amount}</div>
            </div>
          </div>
          <DonateButton type="submit" />
        </Modal>
      </div>
    </form>
  );
};

const mapStateToProps = ({
  user: {
    name,
    donation: { amount },
    payment: { method, account }
  }
}) => ({ name, amount, account, method });

export default connect(mapStateToProps, null)(AuthModal);

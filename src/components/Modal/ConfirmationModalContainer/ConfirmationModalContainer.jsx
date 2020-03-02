import React from "react";
import { connect } from "react-redux";
import { Modal, Backdrop, DonateButton } from "../../";
import { hideModal } from "../../../redux/actionCreators";

const ConfirmationModal = ({
  className = "",
  name,
  method,
  account,
  amount,
  show
}) => {
  const handleSubmit = event => {
    event.stopPropagation();
    event.preventDefault();
    hideModal("confirmationModal");
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div
        className={`${className} ConfirmationModalContainer ModalContainer ${
          show ? "" : "hide"
        }`}
      >
        <Backdrop modalType="confirmationModal" />
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
  },
  modal: {
    confirmationModal: { show }
  }
}) => ({ name, amount, account, method, show });

const mapDispatchToProps = { hideModal };

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationModal);

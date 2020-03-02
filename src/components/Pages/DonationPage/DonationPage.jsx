import React, { useState, useEffect } from "react";
import { Header, DonateButton } from "../../";
import { DonateForm } from "../../";
import { connect } from "react-redux";
import { updateAmount } from "../../../redux/actionCreators/donationCreators";

const initialState = {
  1: { amount: 5, active: false },
  2: { amount: 10, active: false },
  3: { amount: 20, active: false },
  4: { amount: 50, active: false },
  5: { amount: 100, active: false },
  6: { amount: 200, active: false }
};

const DonationPage = ({ updateAmount }) => {
  const [buttons, setButtons] = useState({ ...initialState });

  const resetButtons = () => {
    setButtons({ ...initialState });
  };
  const clickHandler = ({ target: { id } }) => {
    const button = { ...buttons[id] };
    updateAmount(button.amount);
    // amount is now updated

    // now to update the buttons to all false
    const allFalseButtons = initialState;

    // once all buttons are false, pick the button with that amount to be true

    setButtons({
      ...allFalseButtons,
      [id]: { ...button, active: true }
    });
  };

  return (
    <div className="DonationPage Page">
      <Header title="Donate Now" />
      <DonateForm
        buttons={buttons}
        clickHandler={clickHandler}
        resetButtons={resetButtons}
      />
    </div>
  );
};

const mapStateToProps = ({
  user: {
    donation: { amount }
  }
}) => ({ amount });

export default connect(mapStateToProps, { updateAmount })(DonationPage);

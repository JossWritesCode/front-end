import React, { useState, useEffect } from "react";
import { Header, DonateButton } from "../../";
import { DonateForm } from "../../";

const initialState = {
  1: { amount: 5, active: false },
  2: { amount: 10, active: false },
  3: { amount: 20, active: false },
  4: { amount: 50, active: false },
  5: { amount: 100, active: false },
  6: { amount: 200, active: false }
};

const DonationPage = ({ show, visibilityHandler }) => {
  const [buttons, setButtons] = useState({ ...initialState });

  const resetButtons = () => {
    setButtons({ ...initialState });
  };
  const clickHandler = ({ target: { id } }) => {
    const button = { ...buttons[id], active: true };

    const allFalseButtons = Object.keys(buttons).reduce((prev, next) => {
      return { ...prev, [next]: { ...buttons[next], active: false } };
    }, {});

    setButtons({
      ...allFalseButtons,
      [id]: { ...button }
    });
  };

  return (
    <div className="DonationPage Page">
      <Header title="Donate Now" />
      <DonateForm
        show={show}
        visibilityHandler={visibilityHandler}
        buttons={buttons}
        clickHandler={clickHandler}
        resetButtons={resetButtons}
      />
    </div>
  );
};

export default DonationPage;

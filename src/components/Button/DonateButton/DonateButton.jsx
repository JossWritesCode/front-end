import React from "react";
import { Button } from "../../";
const DonateButton = ({ className = "PrimaryButton" }) => {
  return <Button text="Donate" className={className} />;
};

export default DonateButton;

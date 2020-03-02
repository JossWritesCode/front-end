import React from "react";
import { Button } from "../../";
const DonateButton = ({ className = "PrimaryButton", type = "submit" }) => {
  return <Button text="Donate" className={className} type={type} />;
};

export default DonateButton;

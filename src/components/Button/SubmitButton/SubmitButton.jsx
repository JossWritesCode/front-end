import React from "react";
import { Button } from "../..";

const SubmitButton = ({ className = "PrimaryButton", disabled = false }) => {
  return <Button text="Submit" className={className} disabled={disabled} />;
};

export default SubmitButton;

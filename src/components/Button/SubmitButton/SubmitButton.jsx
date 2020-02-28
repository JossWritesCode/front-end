import React from "react";
import { Button } from "../..";

const SubmitButton = ({ className = "PrimaryButton" }) => {
  return <Button text="Submit" className={className} />;
};

export default SubmitButton;

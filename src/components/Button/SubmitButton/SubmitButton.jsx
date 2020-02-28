import React from "react";
import { Button } from "../..";

<<<<<<< HEAD
const SubmitButton = ({ className = "PrimaryButton" }) => {
  return <Button text="Submit" className={className} />;
=======
const SubmitButton = ({ className = "PrimaryButton", disabled = false }) => {
  return <Button text="Submit" className={className} disabled={disabled} />;
>>>>>>> 32a3b58d16bd5d29b9c779922ba30fb7e308dd48
};

export default SubmitButton;

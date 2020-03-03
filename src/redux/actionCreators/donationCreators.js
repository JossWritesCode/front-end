import { UPDATE_DONATION_AMOUNT } from "../actions/action";

export const updateAmount = amount => {
  return {
    type: UPDATE_DONATION_AMOUNT,
    payload: amount
  };
};

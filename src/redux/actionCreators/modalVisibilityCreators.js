import { SHOW_MODAL, HIDE_MODAL } from "../actions/action";

export const showModal = modalName => {
  return {
    type: SHOW_MODAL,
    payload: modalName
  };
};

export const hideModal = modalName => {
  return {
    type: HIDE_MODAL,
    payload: modalName
  };
};

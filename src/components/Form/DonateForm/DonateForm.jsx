import React, { useEffect } from "react";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";
import { Button, DonateButton, ConfirmationModalContainer } from "../../";

const DonateForm = ({
  buttons,
  clickHandler,
  touched,
  errors,
  values,
  resetButtons,
  show,
  visibilityHandler
}) => {
  useEffect(() => {
    resetButtons();
  }, [values.amount]);
  
  const amountButtons = Object.keys(buttons).map(key => {
    const object = buttons[key];
    return (
      <Button
        type="button"
        text={`$${object.amount}`}
        className={`DonationAmountButton ${
          object.active ? "PrimaryButton" : ""
        }`}
        key={key}
        clickHandler={clickHandler}
        id={key}
      />
    );
  });

  return (
    <div className="FormContainer Donation">
      <Form className="Form Donation">
        <p>Choose an amount:</p>
        <div>{amountButtons}</div>
        <label>
          Other Amount
          <Field name="amount" type="tel" placeholder="$ Other amount" />
          <p>{touched.amount && errors.amount}</p>
        </label>
        <label className="box">
          <Field type="checkbox" name="monthly" />
          <p>Make this a reoccuring monthly payment</p>
        </label>
        <DonateButton />
      </Form>
    </div>
  );
};

const enhanceForm = withFormik({
  mapPropsToValues({ amount = "", monthly = false }) {
    return { amount, monthly };
  },
  validationSchema: Yup.object().shape({
    amount: Yup.string().matches(/^[\d]*$/gi, "Only numbers go here")
  }),
  handleSubmit(
    { amount, monthly },
    { props: { buttons, resetButtons, visibilityHandler }, resetForm }
  ) {
    // so this is what's going to happen, donation form simply passes data back into redux store to store the amount. The confirmation modal is another form
    visibilityHandler(null, "confirmationModal");
    resetForm();
    // resetButtons(); will be used inside the modal or not reset at all
  }
});

export default enhanceForm(DonateForm);

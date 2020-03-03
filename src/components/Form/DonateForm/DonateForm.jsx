import React, { useEffect } from "react";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { Button, DonateButton } from "../../";
import { showModal, updateAmount } from "../../../redux/actionCreators/";

const DonateForm = ({
  buttons,
  clickHandler,
  touched,
  errors,
  values,
  resetButtons
}) => {
  useEffect(() => {
    if (values.amount !== "" || values.amount.toString().length > 0) {
      resetButtons();
    }
  }, [values.amount]);

  const updatedClickHandler = e => {
    if (values.amount !== "" || values.amount.toString().length > 0) {
      values.amount = "";
    }
    clickHandler(e);
  };
  const amountButtons = Object.keys(buttons).map(key => {
    const object = buttons[key];
    return (
      <Button
        type="button"
        text={`$${object.amount}`}
        className={`DonationAmountButton ${
          object.active || object.amount === values.amount
            ? "PrimaryButton"
            : ""
        }`}
        key={key}
        clickHandler={e => updatedClickHandler(e)}
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
          {/* clicking on a button should clear state */}
          <Field
            name="amount"
            type="tel"
            placeholder="$ Other amount"
            value={
              values.amount === 0 ||
              Object.keys(buttons).some(button => buttons[button].active)
                ? ""
                : values.amount
            }
          />
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
    amount: Yup.string()
  }),
  handleSubmit(
    { amount, monthly },
    { props: { updateAmount, showModal, amount: reduxAmount } }
  ) {
    // so this is what's going to happen, donation form simply passes data back into redux store to store the amount. The confirmation modal is another form
    const donationAmount = amount ? amount : reduxAmount;
    updateAmount(donationAmount);
    showModal("confirmationModal");
  }
});
const mapStateToProps = ({
  user: {
    donation: { amount, monthly }
  }
}) => ({ amount, monthly });

const mapDispatchToProps = { updateAmount, showModal };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(enhanceForm(DonateForm));

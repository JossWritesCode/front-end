import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { SubmitButton, Tooltip } from "../..";
import { connect } from "react-redux";
import { register } from "../../../redux/actionCreators";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

const SignUpForm = ({ className = "", touched, errors }) => {
  return (
    <div className={`${className} FormContainer`}>
      <Form className="Form Register">
        <Tooltip className="error" />
        <label>
          Email
          <Field type="email" name="email" />
          <p>{touched.email && errors.email}</p>
        </label>
        <label>
          Password
          <Field type="password" name="password" />
          <p>{touched.password && errors.password}</p>
        </label>

        <label>
          Confirm password
          <Field type="password" name="verify" />
          <p>{touched.verify && errors.verify}</p>
        </label>

        <label>
          <Field type="checkbox" name="isDonor" />
          <p>Are you a donator?</p>
        </label>

        <SubmitButton
          disabled={
            Object.keys(touched).length === 0 || Object.keys(errors).length > 0
          }
        />
      </Form>
    </div>
  );
};

const enhanceForm = compose(
  withRouter,
  withFormik({
    mapPropsToValues({
      email = "",
      password = "",
      verify = "",
      isDonor = false
    }) {
      return {
        email,
        password,
        verify,
        isDonor
      };
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(8)
        .matches(/[a-z]+/, "at least one lowercase char")
        .matches(/[A-Z]+/, "at least one uppercase char")
        .matches(/\d+/, "at least one number")
        .matches(
          /[^a-zA-Z\s\d]+/,
          "at least 1 number or special char (@,!,#, etc)."
        ),
      verify: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      )
    }),
    handleSubmit(
      { email, password, verify, isDonor },
      { resetForm, props: { register, history } }
    ) {
      const credentials = { username: email, password, isDonater: isDonor };
      register(credentials)
        .then(() => {
          history.push("/login");
        })
        .catch(err => console.log(err));
      resetForm();
    }
  })
);

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { register })(enhanceForm(SignUpForm));

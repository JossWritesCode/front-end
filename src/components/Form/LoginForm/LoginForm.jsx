import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { SubmitButton } from "../../";
import { login } from "../../../redux/actionCreators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

const LoginForm = ({ className = "", touched, errors, authError }) => {
  return (
    <div className={`${className} FormContainer`}>
      <Form className="Form">
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
    mapPropsToValues({ email = "", password = "" }) {
      return { email, password };
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Please enter valid email"),
      password: Yup.string()
        .required("Please enter the required field")
        .min(8, null)
    }),
    async handleSubmit(
      { email, password },
      { resetForm, props: { login, history } }
    ) {
      const credentials = { username: email, password };
      login(credentials)
        .then(() => {
          resetForm();
          history.push("/donate");
        })
        .catch(err => console.log(err));
    }
  })
);

const mapStateToProps = ({ auth }) => ({ authError: auth.errors });

export default connect(mapStateToProps, { login })(enhanceForm(LoginForm));

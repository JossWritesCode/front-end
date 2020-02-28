import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { SubmitButton } from "../../";
const LoginForm = ({ className = "", touched, errors }) => {
  return (
    <div className={`${className} FormContainer`}>
      <Form className="LoginForm">
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
        </label>

        <SubmitButton />
      </Form>
    </div>
  );
};

const enhanceForm = withFormik({
  mapPropsToValues(props) {
    return {};
  },
  validationSchema: Yup.object().validate({})
});

export default enhanceForm(LoginForm);

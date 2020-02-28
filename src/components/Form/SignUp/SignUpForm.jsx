import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { SubmitButton } from "../../";

const SignUpForm = ({ className = "", touched, errors }) => {
<<<<<<< HEAD
=======
  console.log(errors);
>>>>>>> 32a3b58d16bd5d29b9c779922ba30fb7e308dd48
  return (
    <div className={`${className} FormContainer`}>
      <Form className="LoginForm">
        <label>
          Email
          <Field type="email" name="email" />
<<<<<<< HEAD
=======
          <p>{touched.email && errors.email}</p>
>>>>>>> 32a3b58d16bd5d29b9c779922ba30fb7e308dd48
        </label>
        <label>
          Password
          <Field type="password" name="password" />
<<<<<<< HEAD
=======
          <p>{touched.password && errors.password}</p>
>>>>>>> 32a3b58d16bd5d29b9c779922ba30fb7e308dd48
        </label>

        <label>
          Confirm password
<<<<<<< HEAD
          <Field type="password" name="password" />
        </label>
=======
          <Field type="password" name="verify" />
          <p>{touched.verify && errors.verify}</p>
        </label>

        <SubmitButton disabled={Object.keys(errors).length === 0} />
>>>>>>> 32a3b58d16bd5d29b9c779922ba30fb7e308dd48
      </Form>
    </div>
  );
};

<<<<<<< HEAD
export default SignUpForm;
=======
const enhanceForm = withFormik({
  mapPropsToValues({ email = "", password = "", verify = "" }) {
    return {
      email,
      password,
      verify
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
  handleSubmit({ email, password, verify, ...rest }, { resetForm }) {
    // axios call goes here
    resetForm();
  }
});

export default enhanceForm(SignUpForm);
>>>>>>> 32a3b58d16bd5d29b9c779922ba30fb7e308dd48

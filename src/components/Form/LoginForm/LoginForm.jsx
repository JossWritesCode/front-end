import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { SubmitButton } from "../../";
import { login } from "../../../redux/actionCreators";
import { connect } from "react-redux";

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

const enhanceForm = withFormik({
  mapPropsToValues({ email = "", password = "" }) {
    return { email, password };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email("Please enter valid email"),
    password: Yup.string()
      .required("Please enter the required field")
      .min(8, null)
  }),
  handleSubmit({ email, password }, { resetForm, props: { login, history } }) {
    // dispatch({ type: LOGIN_START });
    // axiosWithAuth()
    //   .post("")
    //   .then(res => {
    //     localStorage.setItem("token");
    //     dispatch({ type: LOGIN_SUCCESS, payload: res });
    //     history.push("/donate");
    //   })
    //   .catch(err => dispatch({ LOGIN_FAILURE, payload: err }));

    // axios call here
    const credentials = { email, password };
    login(credentials);
    resetForm();
  }
});

const mapStateToProps = ({ auth }) => ({ authError: auth.errors });

export default connect(mapStateToProps, { login })(enhanceForm(LoginForm));

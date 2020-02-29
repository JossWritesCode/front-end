import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { SubmitButton } from '../../';
import axiosWithAuth from '../../utils/axiosWithAuth';
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../../../redux/actions';

const LoginForm = ({ className = '', touched, errors }) => {
  return (
    <div className={`${className} FormContainer`}>
      <Form className='LoginForm'>
        <label>
          Email
          <Field type='email' name='email' />
          <p>{touched.email && errors.email}</p>
        </label>
        <label>
          Password
          <Field type='password' name='password' />
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
  mapPropsToValues({ email = '', password = '' }) {
    return { email, password };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Please enter valid email'),
    password: Yup.string()
      .required('Please enter the required field')
      .min(8, null)
  }),
  handleSubmit({ email, password }, { resetForm }) {
    dispatch({ type: LOGIN_START });
    axiosWithAuth()
      .post('')
      .then(res => {
        localStorage.setItem('token');
        dispatch({ type: LOGIN_SUCCESS, payload: res });
        props.history.push('/DonationPage');
      })
      .catch(err => dispatch({ LOGIN_FAILURE, payload: err }));
    // axios call here
    resetForm();
  }
});

export default enhanceForm(LoginForm);

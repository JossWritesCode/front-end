import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { SubmitButton } from '../../';

const SignUpForm = ({ classname = '', touched, errors }) => {
  return (
    <div className={`${className} FormContainer`}>
      <Form className='LoginForm'>
        <label>
          Email
          <Field type='email' name='email' />
        </label>
        <label>
          Password
          <Field type='password' name='password' />
        </label>

        <label>
          Confirm password
          <Field type='password' name='password' />
        </label>
      </Form>
    </div>
  );
};

export default SignUpForm;

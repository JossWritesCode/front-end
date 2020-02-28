import React from 'react';
import { Header, SignUpForm } from '../';

const SignUp = ({ className }) => {
  return (
    <div className={`${className} SignUpPage Page`}>
      <Header title='Sign Up' />

      <SignUpForm />

      <div className='SignUp'>
        <p>Sign Up</p>
        <p>with your Social Media Account</p>
        <p className='SignUpPage-OAuth-icons'></p>
      </div>
    </div>
  );
};

export default SignUp;

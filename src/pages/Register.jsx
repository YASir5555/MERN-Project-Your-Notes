/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';

import Section from '../components/Section';
import { Form, Button } from 'react-bootstrap';
import InputBox from '../components/InputBox';
import Arrow from '../components/Arrow';
import LeftBox from '../components/LeftBox';
import classes from '../assets/css/Register.module.css';
import Alert from '../components/Alert';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
  password2: '',
  username: '',
  phone: '',
  birthdayYear: '',
  isMember: false,
  isComplete: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  const { user, isLoading, showAlert, displayAlert, setupUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const completeSign = () => {
    const { password, password2 } = values;
    setValues({ ...values, isComplete: !values.isComplete });

    if (password !== password2) {
      displayAlert('Passwords must be same');
      setValues({ ...values, isComplete: false });
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const {
      email,
      password,
      password2,
      username,
      phone,
      birthdayYear,
      isMember,
    } = values;

    if (!username && !phone && !birthdayYear) {
    }

    const currentUser = {
      email,
      password,
      password2,
      username,
      phone,
      birthdayYear,
    };

    if (isMember) {
      setupUser({
        currentUser,
        endPoint: 'login',
        alertText: 'Login Successful! Redirecting...',
      });
    } else {
      setupUser({
        currentUser,
        endPoint: 'register',
        alertText: 'User Created! Redirecting...',
      });
    }
    console.log(values);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Section>
      <div className={classes.checkout}>
        <LeftBox />
        <div className={classes.rightBox}>
          <div className={classes.head}>
            <h1> {values.isMember ? 'Login' : 'Signup'}</h1>
            {showAlert && <Alert />}
          </div>
          <Form onSubmit={onSubmit}>
            {values.isMember || !values.isComplete ? (
              <>
                {/* email input */}
                <InputBox
                  lable="Email"
                  type="email"
                  id="email"
                  value={values.email}
                  handleChange={handleChange}
                />
                {/* password input */}
                <InputBox
                  lable="Password"
                  type="password"
                  id="password"
                  value={values.password}
                  handleChange={handleChange}
                />
              </>
            ) : (
              <>
                {/* username input */}

                <InputBox
                  lable="Username"
                  type="text"
                  id="username"
                  value={values.username}
                  handleChange={handleChange}
                />
                <InputBox
                  lable="Phone"
                  type="tel"
                  id="phone"
                  value={values.phone}
                  handleChange={handleChange}
                />
                <InputBox
                  lable="Birthday Year"
                  type="month"
                  id="birthdayYear"
                  value={values.birthdayYear}
                  handleChange={handleChange}
                />
              </>
            )}
            {!values.isMember && !values.isComplete && (
              <InputBox
                lable="Confirm Password"
                type="password"
                id="password2"
                value={values.password2}
                handleChange={handleChange}
              />
            )}

            {/* Btns 3 propapilties */}
            {!values.isComplete && !values.isMember ? (
              <Button
                onClick={
                  values.email && values.password && values.password2
                    ? completeSign
                    : () => displayAlert('Please provide all values!')
                }
                className={classes.registerBtn}
                disabled={isLoading}
              >
                Complete Signup
                <Arrow />
              </Button>
            ) : (
              <Button
                type="submit"
                onClick={
                  (values.email && values.password) ||
                  (values.username && values.phone && values.birthdayYear)
                    ? onSubmit
                    : () => displayAlert('Please provide all values!')
                }
                className={classes.registerBtn}
                disabled={isLoading}
              >
                {values.isMember ? 'Login' : 'Complete Signup'}
                {!values.isMember ? <Arrow /> : ''}
              </Button>
            )}

            {values.isComplete && !values.isMember ? (
              <Button onClick={completeSign} className={classes.backBtn}>
                Back
              </Button>
            ) : (
              ''
            )}
          </Form>
          <div className={`${classes.text} ${values.isComplete && 'flex-row'}`}>
            <p>
              {values.isMember
                ? 'Don’t have an account!'
                : 'Already have an account!'}
            </p>
            <button className={classes.link} onClick={toggleMember}>
              {values.isMember ? 'Signup' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Register;

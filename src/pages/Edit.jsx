import React, { useState } from 'react';

import Nav from '../components/Nav';
import MainBg from '../components/MainBg';

import classes from '../assets/css/Edit.module.css';
import { Button, Form } from 'react-bootstrap';
import InputBox from '../components/InputBox';
import { useAppContext } from '../context/appContext';
import Alert from '../components/Alert';

const Edit = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();

  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState(user?.password);
  const [username, setUsername] = useState(user?.username);
  const [phone, setPhone] = useState(user?.phone);
  const [birthdayYear, setBirthdayYear] = useState(user?.birthdayYear);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !username || !phone || !birthdayYear) {
      displayAlert('hu');
      return;
    }
    updateUser({ email, password, username, phone, birthdayYear });
  };

  return (
    <>
      <Nav />
      <MainBg>
        <section className={classes.mainSection}>
          <div className={classes.app}>
            <div className={classes.createtask}>
              <h4>Modify User Information</h4>
            </div>

            <Form className="mt-3" onSubmit={onSubmit}>
              <InputBox
                id="email"
                lable="Email"
                type="email"
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
              />
              <InputBox
                id="password"
                lable="Password"
                type="password"
                value={password}
                handleChange={(e) => setPassword(e.target.value)}
              />
              <InputBox
                id="username"
                lable="Username"
                type="text"
                value={username}
                handleChange={(e) => setUsername(e.target.value)}
              />
              <InputBox
                id="phone"
                lable="Phone"
                type="tel"
                value={phone}
                handleChange={(e) => setPhone(e.target.value)}
              />
              <InputBox
                id="birthdayYear"
                lable="Birthday Year"
                type="month"
                value={birthdayYear}
                handleChange={(e) => setBirthdayYear(e.target.value)}
              />

              <Button className={classes.registerBtn} type="submit">
                {isLoading ? 'Please Wait...' : ' Save Changes'}
              </Button>
              {showAlert && <Alert />}
            </Form>
          </div>
        </section>
      </MainBg>
    </>
  );
};

export default Edit;

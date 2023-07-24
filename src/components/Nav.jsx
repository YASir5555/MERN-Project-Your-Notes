import React from 'react';
import { Button, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Logo from './Logo';
import Dark from './Dark';
import User from './User';

import classes from '../assets/css/BasicPage.module.css';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';
import LangBtn from './LangBtn';

const BasicPage = () => {
  const { user, logoutUser } = useAppContext();
  const navigate = useNavigate();

  const redirectF = () => {
    navigate('/register');
    logoutUser();
  };

  const editInfo = () => {
    navigate('/edit');
  };

  return (
    <>
      <Navbar className={` ${classes.nav}`}>
        <Navbar.Brand href="#" className={classes.brand}>
          <Logo className={classes.mainLogo} />
          <h2 className={classes.mainTitle}>Your Notes</h2>
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end ">
          <Nav className={classes.rNav}>
            <LangBtn className={classes.langBtn} />
            <Dark />

            <NavDropdown
              title={<User />}
              id="basic-nav-dropdown"
              className={classes.usercontroll}
              dir="auto"
            >
              <menu className={classes.userMenu}>
                <h3>Hi {user?.username}</h3>
                <Button className={classes.btn1} onClick={editInfo}>
                  Modify User info
                </Button>
                <Button className={classes.btn2} onClick={redirectF}>
                  Logout
                </Button>
              </menu>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default BasicPage;

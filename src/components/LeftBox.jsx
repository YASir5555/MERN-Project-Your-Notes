import React from 'react';

import classes from '../assets/css/LeftBox.module.css';
import Logo from './Logo';
import LangBtn from './LangBtn';

const LeftBox = () => {
  return (
    <div className={classes.leftBox}>
      <div className={classes.lightBox}>
        <Logo />
        <h1 className={classes.title}>Your Notes</h1>
      </div>
      <LangBtn className={classes.langBtn} />
    </div>
  );
};

export default LeftBox;

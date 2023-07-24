import React from 'react';

import classes from '../assets/css/MainBg.module.css';

const MainBg = (props) => {
  return <div className={classes.mainBg}>{props.children}</div>;
};

export default MainBg;

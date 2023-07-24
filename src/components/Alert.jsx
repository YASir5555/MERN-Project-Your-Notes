import React from 'react';

import classes from '../assets/css/Alert.module.css';
import { useAppContext } from '../context/appContext';

const Alert = () => {
  const { alertText } = useAppContext();

  return <div className={classes.message}>{alertText}</div>;
};

export default Alert;

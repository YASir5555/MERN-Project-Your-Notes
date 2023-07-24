import React from 'react';

import classes from '../assets/css/Section.module.css';

const Section = (props) => {
  return <section className={classes.startSection}>{props.children}</section>;
};

export default Section;

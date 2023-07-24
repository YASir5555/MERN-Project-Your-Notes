import React, { useState } from 'react';
import DeleteIcon from './DeleteIcon';
import CheckIcon from './CheckIcon';
import UncheckIcon from '../components/UncheckIcon';

import classes from '../assets/css/Main.module.css';
const NoteBody = (props) => {
  return (
    <div className={`${classes.taskArea}`}>
      {props.completed ? (
        <CheckIcon
          className={classes.checked}
          onClick={() => props.completeNote(props.id)}
        />
      ) : (
        <UncheckIcon
          className={classes.unchecked}
          onClick={() => props.completeNote(props.id)}
        />
      )}

      <p className={classes.taskText}>{props.value}</p>
      <button
        className={classes.deleteBtn}
        onClick={() => props.removeNote(props.id)}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default NoteBody;

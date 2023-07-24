import React from 'react';

const UncheckIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      style={{ cursor: 'pointer' }}
      className={props.className}
      onClick={props.onClick}
    >
      <circle cx="13" cy="12" r="12" fill="transparent" stroke="#C8CBE7" />
    </svg>
  );
};

export default UncheckIcon;

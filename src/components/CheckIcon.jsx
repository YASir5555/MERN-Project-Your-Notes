import React from 'react';

const CompleteIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={props.className}
      style={{ cursor: 'pointer' }}
      onClick={props.onClick}
    >
      <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E3E4F1" />
      <circle cx="12" cy="12" r="12" fill="#D375B9" />
      <path
        d="M8 12.3041L10.6959 15L16.6959 9"
        stroke="white"
        stroke-width="2"
      />
    </svg>
  );
};

export default CompleteIcon;

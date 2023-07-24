import React from 'react';

import Form from 'react-bootstrap/Form';

const InputBox = (props) => {
  return (
    <Form.Group className="mb-3" controlId={props.id}>
      <Form.Label>{props.lable}</Form.Label>
      <Form.Control
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
      />
    </Form.Group>
  );
};

export default InputBox;

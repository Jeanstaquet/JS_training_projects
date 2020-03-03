import React from 'react';

const Output = (props) => (
  <ul>
    {
      props.items.map((item, index) => <li key={index} onClick={props.click}>{item}</li>)
    }
  </ul>
);

export default Output;
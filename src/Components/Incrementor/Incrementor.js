import React, { useState } from 'react';
import './Incrementor.css';

const Incrementor = () => {

  // let counter = 0;
  let [counter, setCounter] = useState(0);

  return <>
    <div>Counter: { counter }</div>
    <button onClick={() => { setCounter(counter + 1) }}>ADD +1</button>
  </>;
  
};

export default Incrementor;

import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }


  return (
    <div>
      <h1>{count}</h1>
      <button id="decrement" type="button" onClick={decrement}>
        Decrement
      </button>
      <button id="increment" type="button" onClick={increment}>
        Increment
      </button>
    </div>
  )
}
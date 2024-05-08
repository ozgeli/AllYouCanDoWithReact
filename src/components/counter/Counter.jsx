import React from 'react';
import { useState } from 'react';
import "./counter.scss";

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrease =() => (
        setCount(count+1)
    )
    const handleDecrease =() => (
        setCount(count-1)
    )
    const handleReset = () => (
      setCount(0)
    )

  return (
    <div className="counter">
        <div className="counter-container">
         <h1 className="header">Counter</h1>
         <p className="count">{count}</p>
         <div className="buttons">
            <button className="btn-up" onClick={handleIncrease}>Increase</button>
            <button className="btn-down" onClick={handleDecrease}>Decrease</button>
            <button className="btn-reset" onClick={handleReset}>Reset</button>
         </div>
        </div>
    </div>
  )
}

export default Counter;
import React, { useEffect, useState } from 'react';
import '../Counter/counter.css';

const CountBox = ({ iconClass, endValue, title, boxClass }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // duration in milliseconds
    const incrementTime = 20; // update interval in milliseconds
    const totalSteps = duration / incrementTime;
    const incrementValue = endValue / totalSteps;

    const counterInterval = setInterval(() => {
      start += incrementValue;
      if (start >= endValue) {
        start = endValue;
        clearInterval(counterInterval);
      }
      setCount(Math.ceil(start));
    }, incrementTime);

    return () => clearInterval(counterInterval); // cleanup on unmount
  }, [endValue]);

  return (
    <div className="col-lg-3 col-md-6 col-6 d-md-flex align-items-md-stretch">
      <div className={`count-box ${boxClass}`}>
        <i className={iconClass}></i>
        <span className="purecounter">{count} + </span>
        <p>
          <strong>{title}</strong>
        </p>
      </div>
    </div>
  );
};

const Counter = () => {
  return (
    <section id="counts" className="counts">
    <div className="container">
      <div className="row">
        <CountBox
          iconclassName="bi bi-emoji-smile"
          endValue={5395}
          title="Satisfied Customers"
          boxclassName="count-box-1"
        />
        <CountBox
          iconclassName="bi bi-journal-richtext"
          endValue={16746}
          title="Projects Done"
          boxclassName="count-box-2"
        />
        <CountBox
          iconclassName="bi bi-headset"
          endValue={6}
          title="Year Experience"
          boxclassName="count-box-3"
        />
        <CountBox
          iconclassName="bi bi-people"
          endValue={24}
          title="Team Members"
          boxclassName="count-box-4"
        />
      </div>
    </div>
  </section>
  
  );
};

export default Counter;

import React, { useState, useEffect } from 'react';

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  console.log(hasStarted)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1500) {
        setHasStarted(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) ;

    let start = 0;
    const incrementTime = duration / end;
    const timer = setInterval(() => {
      start += 5;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration, hasStarted]);

  return <span>{count}</span>;
};

export default Counter;

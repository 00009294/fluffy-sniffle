// gaseratureDisplay.js
import '../gas/gas.css'
import React, { useState, useEffect } from 'react';

const Gas = () => {
  const [gas, setGas] = useState(12); 

  useEffect(() => {
    const interval = setInterval(() => {
      const newGas = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
      setGas(newGas);
    }, 5000);

    return () => clearInterval(interval);
  }, []); 

  const handleSpeakButtonClick = () => {
    console.log(`Gas level is ${gas}%`);
  };

  return (
    <div className="gas">
      <button onClick={handleSpeakButtonClick}><i className="fa fa-play"></i></button>
      <div className="bar">
      </div>
      <h1>Gas: {gas}%</h1>
    </div>
  );
};

export default Gas;

// TemperatureDisplay.js
import '../temp/temp.css'
import React, { useState, useEffect } from 'react';

const Temperature = () => {
  const [temperature, setTemperature] = useState(31); 

  useEffect(() => {
    const interval = setInterval(() => {
      const newTemperature = Math.floor(Math.random() * (40 - 25 + 1)) + 25;
      setTemperature(newTemperature);
    }, 3000); 

    return () => clearInterval(interval);
  }, []); 
  const handleSpeakButtonClick = () => {
    // Implement speak functionality here
    console.log(`Temperature is ${temperature}°C`);
  };

  return (
    <div className="temperature">
      <button onClick={handleSpeakButtonClick}><i className="fa fa-play"></i></button>
      <div className="bar">
      </div>
      <h1>Temperature: {temperature}°C</h1>
    </div>
  );
};

export default Temperature;

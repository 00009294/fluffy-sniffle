// TemperatureDisplay.js
import '../hum/hum.css'
import React, { useState, useEffect } from 'react';

const Humidity = () => {
  const [humidity, setHumidity] = useState(23); // Initial humidity value

  useEffect(() => {
    const interval = setInterval(() => {
      const newHumidity = Math.floor(Math.random() * (35 - 20 + 1)) + 20;
      setHumidity(newHumidity);
    }, 3000); 

    return () => clearInterval(interval);
  }, []); 

  const handleSpeakButtonClick = () => {
    // Implement speak functionality here
    console.log(`Humidity is ${humidity}%`);
  };

  return (
    <div className="humidity">
      <button onClick={handleSpeakButtonClick}><i className="fa fa-play"></i></button>
      <div className="bar">
      </div>
      <h1>Humidity: {humidity}%</h1>
    </div>
  );
};

export default Humidity;

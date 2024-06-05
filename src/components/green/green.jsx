// greenLederatureDisplay.js
import '../green/green.css'
import React, { useState, useEffect } from 'react';


const GreenLed = () => {
  const [greenLed, setgreenLed] = useState(null);

  useEffect(() => {

    const handleGreenLed =  (snapshot) => {
      const greenLedValue = snapshot.val();
      setgreenLed(greenLedValue);
    }

    return()=>{
    }
  },[]);

  const handleSpeakButtonClick = ()=>{
    if(greenLed === 1){
    } else{
    }
  }

  const toggleChangerClick = () => {
    // Toggle the value of redLed
  };

  return (
    <div className="greenLed">
    <button onClick={handleSpeakButtonClick}><i class="fa fa-play"></i></button>
    <button onClick={toggleChangerClick}><i class="fa fa-refresh"></i></button>
      <h1>GreenLed: {greenLed === 1 ? "ON" : 'OFF'}</h1>
    </div>
  );
};

export default GreenLed;
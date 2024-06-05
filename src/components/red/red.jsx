// redLederatureDisplay.js
import '../red/red.css'
import React, { useState, useEffect } from 'react';


const RedLed = () => {
  const [redLed, setredLed] = useState(null);

  useEffect(() => {

    const handleRedLed = (snapshot) => {
      const redLedValue = snapshot.val();
      setredLed(redLedValue);
    }

    return()=>{
    } 
    }, []);

    const handleSpeakButtonClick = ()=>{
      if(redLed === 1){
      } else {
      }
    }

    const toggleChangerClick = () => {
      // Toggle the value of redLed
    };
  return (
    <div className="redLed">
      <button onClick={handleSpeakButtonClick}><i class="fa fa-play"></i></button>
      <button onClick={toggleChangerClick}><i class="fa fa-refresh"></i></button>
      <h1>RedLed: {redLed === 1 ? 'OFF' : 'ON'}</h1>
    </div>
  );
};

export default RedLed;
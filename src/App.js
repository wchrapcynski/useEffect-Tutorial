import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [day, setDay] = useState(0);
  const [flower, setFlower] = useState(false);

  function nextDayHandle() {
    if(day < 10) {
      setDay(day + 1);
    }
  }

  // This side effect only happens when the component mounts. 
  // The empty bracket is needed at the end.
  useEffect(() => {
    document.querySelector(".message").innerHTML = "The seed is planted"
  },[]);

  // This effect will take place when flower changes. 
  // The if state is needed because flower is considered change when set to false
  // when the flower state is created.
  useEffect(() => {
    if(day === 10) {
      document.querySelector(".message").innerHTML = "The plant has flowered";
    }
  }, [flower]);

  useEffect(() => {
    // If the day is equal to 10, flower is set to true.
    if(day === 10) {
      setFlower(true);
    }
    
    // This will happen every time the page updates.
    return function waterPlant() {
      document.querySelector(".message").innerHTML = "The plant has been watered";
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <h2>Plant Growth</h2>
        <h3>Day: {day}</h3>
        <h3>Message: <span className="message"></span></h3>
        <button onClick={nextDayHandle}>Next Day</button>
      </header>
    </div>
  );
}

export default App;

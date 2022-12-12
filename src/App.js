import React, { useState } from 'react';
import './App.css';

function App() {
  //const [buttonRed, setButtonRed] = useState(true);
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div className="App">
      <button 
        onClick={()=>setButtonColor(newButtonColor)}
        style={{
          backgroundColor: buttonColor, 
          color: 'white', 
          padding: '10px 20px', 
          border: 'none', 
          borderRadius: '5px', 
          fontSize: '1.2rem'
        }} 
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;

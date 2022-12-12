import React, { useState } from 'react';
import './App.css';

function App() {
  const [buttonRed, setButtonRed] = useState(true);

  return (
    <div className="App">
      <button 
      style={ buttonRed ? { backgroundColor: 'red' } : { backgroundColor: 'blue' }} 
      onClick={()=>setButtonRed(!buttonRed)}
      >
        {buttonRed ? 'Change to blue' : 'Change to red'}
      </button>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div className="App">
      <button 
        onClick={()=>setButtonColor(newButtonColor)}
        style={{
          backgroundColor: checkboxChecked ? 'gray' : buttonColor, 
          color: 'white', 
          padding: '10px 20px', 
          border: 'none', 
          borderRadius: '5px', 
          fontSize: '1.2rem'
        }}
        disabled={checkboxChecked} 
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>

      <input 
        type="checkbox" 
        id ='disable-button-checkbox'
        checked={checkboxChecked} 
        onChange = {(e)=>setCheckboxChecked(e.target.checked)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;

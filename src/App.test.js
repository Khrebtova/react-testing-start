import { render, screen , fireEvent } from '@testing-library/react';

import App from './App';

test('button has a correct initial color: red', () => {
  render(<App />);
  
  //find an element with role of a button and text of 'Change to blue'
  let button = screen.getByRole('button', { name: 'Change to blue' });
  
  //expect the background color to be red
  expect(button).toHaveStyle({ backgroundColor: 'red' });
});



test('button turns blue when clicked and have new text: change to red', () => {
  render(<App />);
  
  //find an element with role of a button and text of 'Change to blue'
  let button = screen.getByRole('button', { name: 'Change to blue' });
  
  //click the button
 
  fireEvent.click(button); 
  
  //expect the background color to be blue
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
  
  //expect the button text to be 'Change to red'
  //expect(button.textContent).toBe('Change to red');
  expect(button).toHaveTextContent('Change to red');
});


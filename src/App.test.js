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

test('initial conditions', () => {
  render(<App />);
  
  //check that the button starts out enabled
  let button = screen.getByRole('button', { name: 'Change to blue' });
  expect(button).toBeEnabled();
  
  //check that the checkbox starts out unchecked
  let checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  
  let button = screen.getByRole('button', { name: 'Change to blue' });
  let checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: 'gray' });
  
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: 'red' });
});

test('Clicked disabled button has gray background and reverts to blue', () => { 
  render(<App />);
  
  let button = screen.getByRole('button', { name: 'Change to blue' });
  let checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
  expect(button).toBeEnabled();
});
import { render, screen , fireEvent } from '@testing-library/react';
import { replaceCamelWithSpaces } from './App';

import App from './App';

//MediumVioletRed
//MidnightBlue
test('button has a correct initial color: red', () => {
  render(<App />);
  
  //find an element with role of a button and text of 'Change to blue'
  let button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  
  //expect the background color to be red
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('button turns blue when clicked and have new text: change to red', () => {
  render(<App />);
  
  //find an element with role of a button and text of 'Change to blue'
  let button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  
  //click the button
 
  fireEvent.click(button); 
  
  //expect the background color to be blue
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  
  //expect the button text to be 'Change to red'
  //expect(button.textContent).toBe('Change to red');
  expect(button).toHaveTextContent('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);
  
  //check that the button starts out enabled
  let button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(button).toBeEnabled();
  
  //check that the checkbox starts out unchecked
  let checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  
  let button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  let checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: 'gray' });
  
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('Clicked disabled button has gray background and reverts to blue', () => { 
  render(<App />);
  
  let button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  let checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  expect(button).toBeEnabled();
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
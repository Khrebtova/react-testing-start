import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// expect is global method from jest - 
//expect  start the assertion
//expect(argument) it is a subject of assertion

// toBeInTheDocument is global method from @testing-library/jest-dom
//it is a custom matcher from @testing-library/jest-dom
// matcher is a function that takes the subject of assertion and returns a boolean
//it can take an argument

// toHaveLength(1)
// toBe('hello')

//DOM matchers:
// toBeInTheDocument
// toBeVisible
// toBeDisabled
// toBeEmpty
// toBeChecked
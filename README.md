expect is global method from jest - 
expect  start the assertion
expect(argument) it is a subject of assertion

toBeInTheDocument is global method from @testing-library/jest-dom
it is a custom matcher from @testing-library/jest-dom
matcher is a function that takes the subject of assertion and returns a boolean
it can take an argument

toHaveLength(1)
toBe('hello')

DOM matchers:
toBeInTheDocument
toBeVisible
toBeDisabled
toBeEmpty
toBeChecked

React testing library helps with:
- rendering components into virtual DOM
- searching virtual DOM
- interacting with virtual DOM

React testing Library needs test runner to find tests, run them. make assertions.

Jest is recommended by Testing Library. and it comes with create-react-app.
`npm test` runs an npm script that runs Jest in watch mode( watches for changes since last commit)



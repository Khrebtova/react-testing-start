# Helpful LINKS:
https://www.w3.org/TR/wai-aria/#role_definitions
https://testing-library.com/docs/queries/about/#priority

# React testing library and Jest

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

# How jest works

`test(test('renders learn react link', () => {})`
Test - global method with 2 arguments:
1. string description
2. test function , anonymous 

Test fails if any error is thrown when running the function. assertions trow errors when expectation fails

No errors- test pass
- empty test -passes

# TTD test driven development
1. write shell function
2. write test
3. write code 
-part of the coding process from the beginning
-more efficient - re-run test for free after changes , no need to open app 

# ESLint 
`npm install eslint-plugin-testing-library eslint-plugin-jest-dom `

delete ESLint config from package.json and 

add separate file : `.eslintrc.json ` with :

`{
    "plugins": [
        "testing-library",
        "jest-dom"
    ],
    "extends": [
        "react-app",
        "react-app/jest",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended"
    ]
}`

create folder `.vscode` inside create file `settings.json `:

`{
    "editor.codeActionsOnSave": { "source.fixAll.eslint": true }
}`

add to the `.gitignore`: 

`
.vscode
.eslintcache
`

# add to global settings: 

Settings file locations
Depending on your platform, the user settings file is located here:

Windows %APPDATA%\Code\User\settings.json
macOS $HOME/Library/Application\ Support/Code/User/settings.json
Linux $HOME/.config/Code/User/settings.json
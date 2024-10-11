# Zustand App

This repository demonstrates state management in React using [Zustand](https://github.com/pmndrs/zustand). The app implements the slice pattern with two slices: `courseSlice` and `productSlice`. These slices are combined into a single store in `centralStore.js` to form a global state.

## Features

- **State Management with Zustand**: Zustand is used to manage global state across the app.
- **Slice Pattern**: The app follows the slice pattern, separating concerns into `courseSlice` and `productSlice`.
  - `courseSlice`: Manages course-related state.
  - `productSlice`: Manages product-related state, including asynchronous API calls to fetch product data.
- **Asynchronous API Call**: Demonstrates async data fetching within `productSlice` using a sample API.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

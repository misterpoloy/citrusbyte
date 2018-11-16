![](http://jpsierens.com/wp-content/uploads/2016/06/react-eco-wp.gif)

# CitrusByte project by JP

Live site: https://easy-feedback.firebaseapp.com

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information about the structure and information of this demo.<br>
You can find the most recent version of *create-react-app* [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

# About the project

The app allows a company to define a list of questions, and then assign a team memberto answer that set of questions for other team members. The answers to thosequestions then get shared automatically with those team members.

## Screenshots
![Screenshots](https://image.ibb.co/gCm2aL/Give-Feedback-Landing.png)

### Tech stack:
- Jest with Enzyme for unit testing, already setup
- Redux using redux-thunk is setup
- Redux developer tools middleware is already setup
- And firebase for the backend

# Run the demo
## Install dependencies 
To run the project first you need to install the dependencies:

    npm install

Then you can run the project with:

    npm start


## Compile for production

*Warning: This is necesary in order to generate the bundle, should be run each time you make changes in the project*

This will build the application in the "dist" directory at the root of the project. It contains the index.html along with the minified assets, ready for production.

For more information on how to run the production version you can access the official documentation of [Facebook] (https://github.com/facebook/create-react-app)
This generates executable versions for production.

To create a production version with the files:

    npm run build

## DB structure (firebase)
![Screenshots](https://image.ibb.co/g3fqUf/Screen-Shot-2018-11-15-at-3-35-12-AM.png)

## About unit testing

Unit testing is the practice of testing the smallest possible _units_ of our
code, functions. We run our tests and automatically verify that our functions
do the thing we expect them to do. We assert that, given a set of inputs, our
functions return the proper values and handle problems.

This project uses the [Jest](https://github.com/facebook/jest) test
framework to run tests and make assertions. This library makes writing tests as easy as speaking - you
`describe` a unit of your code and `expect` `it` to do the correct thing.

## Resources:

For future modifications if you want to understand more about how the project works, you can consult:

-   [configuring webpack](http://jpsierens.com/tutorial-react-redux-webpack/)
-   [understanding the app, part 1 (index.js, store, reducers)](http://jpsierens.com/simple-react-redux-application/)
-   [understanding the app, part 2 ( Root.js, router and the rest of the app)](http://jpsierens.com/simple-react-redux-application-2/)


## TODO
- Amdin dashboard
  - Manage questions
  - Manage users
  - Manage teams
  - Assign questions to users/teams
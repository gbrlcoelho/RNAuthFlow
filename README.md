# React Native Authentication App with Firebase, Context, Async Storage, React Navigation, and Styled Components

This is a React Native application that I created to learn user authentication with Firebase, using Context and Async Storage to store the logged user even when they close the app, and implementing a dark and light theme based on the device theme using Styled Components. It also uses React Navigation for navigating between screens.

## Features

- User authentication with email and password using Firebase Authentication
- Sign up and log in screens with validation
- Protected screens that require authentication to access
- Sign out functionality
- Dark and light theme based on device theme
- React Navigation for navigation between screens
- Styled Components for styling the app
- Context and Async Storage to store the logged user even when the app is closed

## Installation

To run this app on your local machine, follow these steps:

1. Clone this repository
2. Navigate to the cloned directory 
3. Install the dependencies using the command `yarn`.
4. Run the app on an Android or iOS device using the command `npx react-native run-android` or `npx react-native run-ios`.

## Usage

When you launch the app, you will see a welcome screen with a sign in and sign up button. You can navigate to the sign up screen by clicking the sign up button, or you can sign in using an existing account.

On the sign up screen, enter your email and password and click the sign up button. The app will validate the input and show an error message if the input is invalid. If the input is valid, the app will create a new user account using Firebase Authentication and redirect you to the home screen.

On the home screen, you will see a welcome message with your email address and a sign out button. You can sign out by clicking the sign out button, which will redirect you back to the sign in screen.

The app also includes protected screens that require authentication to access. If you try to access a protected screen without being signed in, the app will redirect you back to the sign in screen.

The app uses Context and Async Storage to store the logged user even when the app is closed. This means that when you close and reopen the app, you will still be logged in.

The app theme is based on the device theme, so it will switch between a light and dark theme automatically based on the device theme.

## Credits

This app was created using the following technologies and libraries:

- React Native
- Firebase Authentication
- Context API
- Async Storage
- React Navigation
- Styled Components

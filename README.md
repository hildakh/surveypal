# SurveyPal

A survey app that addresses methodological shortcomings of population data collection, focusing on the delivery of Vancouver's Annual Homeless Count. 

We replace currently outdated and inefficient processes with a simple and inuitive interface for surveyors to interview subjects and collect data, and for administrators to manage teams and surveys, and immediately access and analyze collected data.

The app contains two separate user interfaces: 
   - interviewer interface for survey delivery and data collection
   - admin interface for survey and team management, and access to collected data and data analysis

## Implementation

This project was build by [Bahareh Ghadimi](https://github.com/Baharghadimii), [Hilda Kh](https://github.com/hildakh), and [Vanessa Kroeker](https://github.com/vkro) on a React + Rails Boilerplate from [Nima Boscarino](https://github.com/NimaBoscarino/react-rails-boilerplate).

## Getting Started

Fork this repository, then clone your fork of this repository.

The React project has `proxy` set to `localhost:3001` in the `package.json` file.

You need **TWO** terminals to run this project.

In one terminal, run `bundle` to install the dependencies. Run `bin/rake db:setup` to create the databases (called surveycan_development by default). Run `bin/rails s` to run the server.

In the other terminal, `cd` into `client`. Run `npm install`. Rename the `.env.example` file to be called `.env`. Then run `npm start` and go to `localhost:3000` in your browser.

Seed user credentials are located in the databae seeds for surveyor and admin login.

## Built With:
  - React
  - Ruby on Rails
  - Axios
  - Material-UI React
  - Framer Motion library
  - Google Charts
  
## Dependencies
 - material-ui
 - popmotion/popcorn
 - types/jest
 - aos
 - axios
 - framesync
 - hey-listen
 - popmotion
 - raf
 - react
 - react-dom
 - react-animate-on-scroll
 - react-expand-animated
 - react-load-script
 - react-reveal
 - react-scripts
 - react-swipeable
 - react-google-charts
 - react-typing-animation
 - shortid
 - style-value-types
 - styled-components
 - stylefire
 - tslib
 - tslint-react
 - animate-components
 - framer-motion
 - storybook

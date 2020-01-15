import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import "../index.css";

import NextButton from '../components/questions/Button_Next.js';
import BeforeButton from '../components/questions/Button_Before.js';
import BackToSurveyButton from '../components/questions/Back_To_Survey_Button';
// import { BeforeButton } from '../components/questions/Button_Before';
import SubmitButton from '../components/questions/Submit_Button';

export default {
  title: 'Message Nav Button',
};

// stories for next button module
storiesOf('Message Nav Buttons', module)
  // .addParameters({
  //   backgrounds: [{ name: "white", value: "#fff", default: true }]
  // })
  .add('Next', () => <NextButton onClick={action('button-clicked')}/>)
  .add('Previous', () => <BeforeButton onClick={action('button-clicked')}/>)


storiesOf('Back To Survey Button')
  .add('Back to Survey', () =>  <BackToSurveyButton onClick={action('button-clicked')}/>)

storiesOf('Submit Button')
  .add('Submit', () =>  <SubmitButton onClick={action('Survey Submitted!')}/>)



import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import "../index.css";

import Show from '../components/questions/Show.js';
// import { BeforeButton } from '../components/questions/Button_Before';

export default {
  title: 'Show question',
};

// stories for next button module
storiesOf('Question', module)
  .add('Question', () =>  <Show />)



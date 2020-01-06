import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import "../index.css";

import Show from '../components/questions/Show.js';
import QuestionText from '../components/questions/Question_Text';
import QuestionOptionsList from '../components/questions/Question_Options_List';
import QuestionOptionsListItem from '../components/questions/Question_Options_List_Item';

export default {
  title: 'Show question',
};


// stories for question options list items
storiesOf('Question Options List Items', module)
  .add('Unselected', () => <QuestionOptionsListItem option_text='Days' serial_order="1"/>)
  .add('Selected', () => <QuestionOptionsListItem option_text='Job loss' serial_order="2" selected/>)
  .add('Clickable', () => <QuestionOptionsListItem option_text='Unable to pay rent or mortgage' serial_order="3" onClick={action('button-clicked')}/>)

// stories for question options list
storiesOf('Question Options List', module)
  .add('List', () => <QuestionOptionsList />)

// stories for Question component
storiesOf('Question', module)
  .add('Question', () =>  <Show />)
  .add('Question Text', () => <QuestionText description="Do you currently have a place to stay where you pay
  monthly rent?"/>)
  .add('Question Options List', () => <QuestionOptionsList />)
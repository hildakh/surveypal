import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import "../index.css";

import Index from '../components/questions/Index.js';
import Show from '../components/questions/Show.js';
import QuestionText from '../components/questions/Question_Text';
import QuestionOptionsList from '../components/questions/Question_Options_List';
import QuestionOptionsListItem from '../components/questions/Question_Options_List_Item';

export default {
  title: 'Show question',
};


// stories for question options list items
storiesOf('Question Options List Items', module)
  .add('Clickable', () => <QuestionOptionsListItem option_text='Unable to pay rent or mortgage' serial_order="3" onClick={action('button-clicked')}/>)

// stories for question options list
storiesOf('Question Options List', module)
  .add('Lists question options', () => <QuestionOptionsList questionOptions={testQuestionOptionsList}/>)


const testQuestionOptionsList = [
  {question_id: 6,
    option_text: "Job loss",
    serial_order: 1
  },
  {question_id: 6,
    option_text: "Unable to pay rent or mortgage",
    serial_order: 2
  },
  {question_id: 6,
    option_text: "Illness or medical condition",
    serial_order: 3
  },
  {question_id: 6,
    option_text: "Addiction or substance use",
    serial_order: 4
  },
  {question_id: 6,
    option_text: "Unsafe housing conditions",
    serial_order: 5
  },
  {question_id: 6,
    option_text: "Experienced abuse by: parent/guardian",
    serial_order: 6
  },
  {question_id: 6,
    option_text: "Experienced abuse by: spouse/partner",
    serial_order: 7
  },
]


const testQuestionText = <QuestionText description="What happened that caused you to lose your housing most recently?"/>

// stories for Question component
storiesOf('Question', module)
  .add('Question with options list', () =>  <Show question_text={testQuestionText} question_options_list={<QuestionOptionsList questionOptions={testQuestionOptionsList}/>}/>)
  .add('Question Text', () => testQuestionText)
  .add('Index', () => <Index />)
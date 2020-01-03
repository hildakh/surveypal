import React from 'react';

import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import { Button } from 'components/questions/button_next';
import { Button } from 'components/questions/button_prev';

export default {
  title: 'Button',
};

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

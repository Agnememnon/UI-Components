import React from 'react';
import { action } from '@storybook/addon-actions';
import StandardButton from '../src/atoms/button/standard-button';

export default {
  title: 'Standard Button',
  component: StandardButton,
};

export const Text = () => <StandardButton clickHandler={action('clicked')} bgColor='black'/>

export const Emoji = () => (
  <StandardButton clickHandler={action('clicked')} value='😀 😎 👍 💯'/> 
);

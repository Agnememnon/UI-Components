import React from 'react';
import { action } from '@storybook/addon-actions';
import Textbox from '../src/atoms/textbox/textbox';

export default {
  title: 'Textbox',
  component: Textbox,
};

export const Text = () => <Textbox changeHandler={action('clicked')}/>

export const Emoji = () => (
  <Textbox changeHandler={action('😀 😎 👍 💯')} hint='😀 😎 👍 💯'/> 
);

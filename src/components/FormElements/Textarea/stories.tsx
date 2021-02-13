import React from 'react';
import { Meta, Story } from 'types/StoryBookCustomTypes';
import Textarea from '.';
import ITextareaProps from './types';

export default {
  title: 'Textarea',
  component: Textarea,
} as Meta;

export const Template: Story<ITextareaProps> = (args) => <Textarea {...args} />;

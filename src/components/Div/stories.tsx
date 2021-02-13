import { Meta, Story } from 'types/StoryBookCustomTypes';
import Div from '.';
import IDivProps from './types';

export default {
  title: 'Div',
  component: Div,
} as Meta;

export const Template: Story<IDivProps> = (args) => <Div {...args} />;

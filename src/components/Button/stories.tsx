import { Meta, Story } from 'types/StoryBookCustomTypes';
import Button from '.';
import IButtonProps from './types';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const Template: Story<IButtonProps> = (args) => <Button {...args} />;

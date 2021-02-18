import { Meta, Story } from 'types/StoryBookCustomTypes';
import LeftMenu from '.';
import LeftMenuPropsType from './types';

export default {
  title: 'LeftMenu',
  component: LeftMenu,
} as Meta;

export const Template: Story<LeftMenuPropsType> = (args) => <LeftMenu {...args} />;

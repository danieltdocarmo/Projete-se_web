import { Meta, Story } from 'types/StoryBookCustomTypes';
import Footer from '.';
import IFooterProps from './types';

export default {
  title: 'Footer',
  component: Footer,
} as Meta;

export const Template: Story<IFooterProps> = (args) => <Footer {...args} />;

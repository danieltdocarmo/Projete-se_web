import { Meta, Story } from 'types/StoryBookCustomTypes';
import ProjeteseSimpleNameFooter from '.';
import ProjeteseSimpleNameFooterPropsType from './types';

export default {
  title: 'ProjeteseSimpleNameFooter',
  component: ProjeteseSimpleNameFooter,
} as Meta;

export const Template: Story<ProjeteseSimpleNameFooterPropsType> = (args) => <ProjeteseSimpleNameFooter {...args} />;

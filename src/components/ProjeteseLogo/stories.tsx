import { Meta, Story } from 'types/StoryBookCustomTypes';
import ProjeteseLogo from '.';
import IProjeteseLogoProps from './types';

export default {
  title: 'ProjeteseLogo',
  component: ProjeteseLogo,
} as Meta;

export const Template: Story<IProjeteseLogoProps> = (args) => <ProjeteseLogo {...args} />;

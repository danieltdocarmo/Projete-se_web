import React from 'react';
import ITextProps from './types';
import { Container } from './styles';

const Text: React.FC<ITextProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Text;

import React from 'react';
import ITextareaProps from './types';
import FormElementBasic from '../FormElementBasic';

const Select: React.FC<ITextareaProps> = ({ children, ...rest }) => {
  return (
    <FormElementBasic {...rest}>
      {(thisProps) => <select {...thisProps}>{children}</select>}
    </FormElementBasic>
  );
};

export default Select;

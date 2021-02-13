import React from 'react';
import ITextareaProps from './types';
import FormElementBasic from '../FormElementBasic';

const Textarea: React.FC<ITextareaProps> = (props) => {
  return (
    <FormElementBasic {...props}>
      {(thisProps) => (
        <>
          <textarea {...thisProps} />
        </>
      )}
    </FormElementBasic>
  );
};

export default Textarea;

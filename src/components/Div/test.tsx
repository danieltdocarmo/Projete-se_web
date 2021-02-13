import { render } from '@testing-library/react';
import Div from './index';

describe('<Div />', () => {
  const thisRender = render(
    <Div themes="common">
      Component
      <h1>Title</h1>
      <div>
        <p>Paragraph</p>
      </div>
    </Div>
  );

  it('children must be allowed', () => {
    expect(thisRender.getByText('Title')).toBeInTheDocument();
    expect(thisRender.getByText('Paragraph')).toBeInTheDocument();
  });
});

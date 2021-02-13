import { render, screen } from '@testing-library/react';

import Div from './index';

describe('<Div />', () => {
  it('should render the heading', () => {
    const { container } = render(<Div />);
  });
});

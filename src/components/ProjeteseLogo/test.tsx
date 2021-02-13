import { render } from '@testing-library/react';
import ProjeteseLogo from './index';

describe('<ProjeteseLogo />', () => {
  const thisRender = render(<ProjeteseLogo />);

  it('must contain specific childrens', () => {
    expect(thisRender.getByText('Text1')).toBeInTheDocument();
    expect(thisRender.getByText('Text2')).toBeInTheDocument();
  });
});

import IDivProps from './types';
import { Container } from './styles';

const Div: React.FC<IDivProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Div;

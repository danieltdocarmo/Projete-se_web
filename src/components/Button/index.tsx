import IButtonProps from './types';

import { Container } from './styles';

const Button: React.FC<IButtonProps> = ({
  children,
  type = 'button',
  istype = 'filled',
  size = 'small',
  ...rest
}) => {
  return <Container {...{ ...rest, type, istype, size }}>{children}</Container>;
};

export default Button;

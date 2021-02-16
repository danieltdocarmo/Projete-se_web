import ProjeteseSimpleNameFooterPropsType from './types';
import { Container } from './styles';

const ProjeteseSimpleNameFooter: React.FC<ProjeteseSimpleNameFooterPropsType> = ({
  style,
  className,
}) => {
  return <Container {...{ style, className }}>© 2020 Projete-se</Container>;
};

export default ProjeteseSimpleNameFooter;

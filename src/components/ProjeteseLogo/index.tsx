import IProjeteseLogoProps from './types';
import { Container, FirstText, SecondText } from './styles';

const ProjeteseLogo: React.FC<IProjeteseLogoProps> = ({ style, className }) => {
  return (
    <Container {...{ style, className }}>
      <FirstText>P</FirstText>
      <SecondText>ROJETE-SE</SecondText>
    </Container>
  );
};

export default ProjeteseLogo;

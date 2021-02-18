import LeftMenuPropsType from './types';
import { AiFillFolderAdd, AiOutlineSearch, AiFillFolderOpen } from 'react-icons/ai'
import { Container, ButtonMenu ,ContainerButton } from './styles';
import ProjeteseLogo from 'components/ProjeteseLogo';

const LeftMenu: React.FC<LeftMenuPropsType> = ({
  children,
  style,
  className,
}) => {
  return <Container {...{ style, className }}>
    <ProjeteseLogo />
      <ContainerButton>
        <ButtonMenu><AiFillFolderOpen size="18px" style={{marginRight:"8px"}}/>Seus Projetos</ButtonMenu>
        <ButtonMenu><AiOutlineSearch size="18px" style={{marginRight:"8px"}}/>Buscar Projetos</ButtonMenu>
        <ButtonMenu><AiFillFolderAdd size="18px" style={{marginRight:"8px"}}/>Adicionar Anúncios</ButtonMenu>      
      </ContainerButton>
  </Container>;
};

export default LeftMenu;

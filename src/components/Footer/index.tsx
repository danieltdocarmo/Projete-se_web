import IFooterProps from './types';
import { Container, Content } from './styles';
import {ImTwitter, ImFacebook} from 'react-icons/im';
import {FiInstagram} from 'react-icons/fi';

const Footer: React.FC<IFooterProps> = ({ children, style, className }) => {
  return <Container {...{ style, className }}>
    
    {children}
      <Content className="footer-contents footer-contents-logo">Testando</Content>
      <Content className="footer-contents footer-contents-text">
        <div>
          <h3>Fortaleza - CE</h3>  
          <p>CNPJ:53.074.363/0001-38</p>
       </div>
       </Content>

      <Content className="footer-contents footer-contents-text">
        <div>
          <h3>contato@projetese.com.br</h3> 
          <p>+55 85 9999 9999</p>
        </div>
      </Content>
      <Content className="footer-contents footer-contents-icons">
        <FiInstagram size={30}/>
        <ImFacebook className='footer-content-icon' size={30} color={'#2F2E41'}/>
        <ImTwitter className='footer-content-icon' size={30} color={'#2F2E41'} />
      </Content>
    
    </Container>;
};

export default Footer;

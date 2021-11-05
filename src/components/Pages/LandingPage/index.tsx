import { LogoLight } from '../../LogoLight';
import { Container, Content, HomeMenu, MenuBtn } from './styles';
import { useHistory } from 'react-router-dom';

export function LandingPage() {
  const history = useHistory();

  return (
    <Container>
      <Content>
        <LogoLight />
        <HomeMenu>
          <MenuBtn type="button" onClick={() => history.push('/login')}>
            Login
          </MenuBtn>
          <MenuBtn
            type="button"
            onClick={() => history.push('/registrationPage')}
          >
            Cadastrar-se
          </MenuBtn>
        </HomeMenu>
      </Content>
    </Container>
  );
}

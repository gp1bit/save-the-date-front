import { LogoLight } from '../../LogoLight';
import { PreviousImg } from '../../Previous';
import {
  Container,
  ContainerButton,
  Content,
  Footer,
  PreviousButton,
  HomeMenu,
  LoginInput,
} from './styles';
import { useHistory } from 'react-router-dom';
import { ConcludedButton } from '../LoginPage/styles';

export function LoginPage() {
  const history = useHistory();

  return (
    <Container>
      <Content>
        <LogoLight />
        <HomeMenu>
          <LoginInput type="text" placeholder="E-mail" />
          <LoginInput type="text" placeholder="Senha" />
        </HomeMenu>
        <ContainerButton>
          <ConcludedButton
            type="button"
            onClick={() => history.push('/homePage')}
          >
            Entrar
          </ConcludedButton>
        </ContainerButton>
        <Footer>
          <PreviousButton
            type="button"
            onClick={() => history.push('/landingPage')}
          >
            <PreviousImg />
          </PreviousButton>
        </Footer>
      </Content>
    </Container>
  );
}

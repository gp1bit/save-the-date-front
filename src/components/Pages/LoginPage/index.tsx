import { LogoLight } from '../../LogoLight';
import { PreviousWhite } from '../../PreviousWhite';
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
import { ResetPassword } from '../LandingPage/styles';

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
        <ResetPassword
          type="button"
          onClick={() => history.push('/resetPassword')}
        >
          <p>Esqueceu sua senha? Clique aqui!</p>
        </ResetPassword>
        <ContainerButton>
          <ConcludedButton
            type="button"
            onClick={() => history.push('/homePage')}
          >
            Entrar
          </ConcludedButton>
        </ContainerButton>
        <Footer>
          <PreviousButton type="button" onClick={() => history.push('/')}>
            <PreviousWhite />
          </PreviousButton>
        </Footer>
      </Content>
    </Container>
  );
}

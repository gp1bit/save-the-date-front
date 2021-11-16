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

export function LoginPage(props: any) {
  const history = useHistory();

  return (
    <Container>
      <Content>
        <LogoLight />
        <HomeMenu>
          <LoginInput
            type="text"
            placeholder="E-mail"
            name="email"
            value={props.data.email}
            onChange={(event: any) => {
              props.onDataChange({
                ...props.data,
                email: event.target.value,
              });
            }}
          />
          <LoginInput
            type="text"
            placeholder="Senha"
            name="password"
            value={props?.data?.password || ''}
            onChange={(event: any) => {
              props.onDataChange({
                ...props.data,
                password: event.target.value,
              });
            }}
          />
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
      </Content>
      <Footer>
        <PreviousButton type="button" onClick={() => history.push('/')}>
          <PreviousWhite />
        </PreviousButton>
      </Footer>
    </Container>
  );
}

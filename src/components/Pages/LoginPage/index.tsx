import { LogoLight } from '../../Icons/LogoLight';
import { PreviousWhite } from '../../Icons/PreviousWhite';
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
import { Login } from '../../../services/api/user';
import { ILoginRequest } from '../../../services/interfaces/request/login';
import Swal from 'sweetalert2';

export function LoginPage(props: any) {
  const history = useHistory();

  const login = async () => {
    try {
      const { email, password } = props.data;
      const credentials: ILoginRequest = {
        email,
        password,
      };
      console.log('login');

      const user = await Login(credentials);
      console.log(user);
      props.onDataChange({ email: '', password: '' });
      history.push('/homePage');
    } catch (err) {
      return Swal.fire({
        icon: 'error',
        text: 'Usuario invalido',
      });
    }
  };

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
          <ConcludedButton type="button" onClick={login}>
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

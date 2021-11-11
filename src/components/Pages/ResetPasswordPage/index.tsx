import {
  Container,
  Content,
  MenuLogin,
  Header,
  Title,
  ConcludedButton,
  Footer,
  InputForm,
  PreviousButton,
} from './styles';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PreviousWhite } from '../../PreviousWhite';
import { ProfileIcon } from '../../ProfileIcon';

export function ResetPasswordPage() {
  const history = useHistory();

  const submitResetPassword = () => {
    Swal.fire({
      icon: 'success',
      text: 'Verifique a caixa de entrada do seu e-mail para redefinir sua senha',
    });

    history.push('/login');
  };

  return (
    <Container>
      <Content>
        <Header>
          <ProfileIcon />
          <Title>
            <h1 className="title">Esqueceu sua senha?</h1>
            <p className="description">
              Nos informe seu e-mail de cadastro abaixo
            </p>
            <p className="description">
              para que possamos enviar um link para{' '}
            </p>
            <p className="description">redefinição</p>
          </Title>
        </Header>
        <MenuLogin>
          <InputForm type="text" placeholder="E-mail"></InputForm>
        </MenuLogin>
        <ConcludedButton type="button" onClick={() => submitResetPassword()}>
          Enviar
        </ConcludedButton>
      </Content>
      <Footer>
        <PreviousButton type="button" onClick={() => history.push('/')}>
          <PreviousWhite />
        </PreviousButton>
      </Footer>
    </Container>
  );
}

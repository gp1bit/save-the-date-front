import {
  Container,
  Content,
  InputContainer,
  Header,
  Title,
  ConcludedButton,
  Footer,
  LoginButton,
  InputForm,
} from './styles';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ProfileIcon } from '../../ProfileIcon';

export function RegistrationPage() {
  const history = useHistory();

  const submitRegistration = () => {
    Swal.fire({
      icon: 'success',
      text: 'Cadastro concluído',
    });

    history.push('/login');
  };

  return (
    <Container>
      <Content>
        <Header>
          <ProfileIcon />
          <Title>
            <h1 className="title">Crie sua conta</h1>
            <p className="description">
              Para poder gerenciar seu evento precisamos{' '}
            </p>
            <p className="description">de apenas algumas informações ;)</p>
          </Title>
        </Header>
        <InputContainer>
          <InputForm type="text" placeholder="Nome completo"></InputForm>
          <InputForm type="text" placeholder="E-mail"></InputForm>
          <InputForm type="text" placeholder="Data de nascimento"></InputForm>
          <InputForm type="text" placeholder="Telefone"></InputForm>
          <InputForm type="text" placeholder="Senha"></InputForm>
          <InputForm type="text" placeholder="Confirme sua senha"></InputForm>
        </InputContainer>
        <Footer>
          <ConcludedButton type="button" onClick={() => submitRegistration()}>
            Concluído
          </ConcludedButton>
          <LoginButton type="button" onClick={() => history.push('/login')}>
            Já possui uma conta? Faça o login
          </LoginButton>
        </Footer>
      </Content>
    </Container>
  );
}

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

export function RegistrationPage(props: any) {
  const history = useHistory();

  const submitRegistration = () => {
    Swal.fire({
      icon: 'success',
      text: 'Cadastro concluído',
    });

    history.push('/login');

    console.log(props.data);
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
          <InputForm
            type="text"
            placeholder="Nome completo"
            name="name"
            value={props?.data?.name || ''}
            onChange={(event: any) => {
              props.onDataChange({
                ...props.data,
                name: event.target.value,
              });
            }}
          ></InputForm>
          <InputForm
            type="text"
            placeholder="E-mail"
            name="email"
            value={props?.data?.email || ''}
            onChange={(event: any) => {
              props.onDataChange({
                ...props.data,
                email: event.target.value,
              });
            }}
          ></InputForm>
          <InputForm
            type="text"
            placeholder="Data nascimento (DD/MM/AA)"
            name="birthDate"
            value={props?.data?.birthDate || ''}
            onChange={(event: any) => {
              props.onDataChange({
                ...props.data,
                birthDate: event.target.value,
              });
            }}
          ></InputForm>
          <InputForm
            type="text"
            placeholder="Telefone"
            name="phone"
            value={props?.data?.phone || ''}
            onChange={(event: any) => {
              props.onDataChange({
                ...props.data,
                phone: event.target.value,
              });
            }}
          ></InputForm>
          <InputForm
            type="password"
            placeholder="Senha"
            name="password"
            value={props?.data?.password || ''}
            onChange={(event: any) => {
              props.onDataChange({
                ...props.data,
                password: event.target.value,
              });
            }}
          ></InputForm>
          <InputForm
            type="password"
            placeholder="Confirme sua senha"
            name="checkPassword"
            value={props?.data?.checkPassword || ''}
            onChange={(event: any) => {
              props.onDataChange({
                ...props.data,
                checkPassword: event.target.value,
              });
            }}
          ></InputForm>
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

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
import { ProfileIcon } from '../../Icons/ProfileIcon';
import { userValidator } from '../../../services/validations/userValidator';

export const RegistrationPage: React.FC<any> = ({ data, onDataChange }) => {
  const history = useHistory();

  const submitRegistration = () => {
    if (!userValidator(data, onDataChange)) {
      return Swal.fire({
        icon: 'success',
        text: 'Cadastro concluído',
      });
    }
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
            value={data?.name || ''}
            onChange={(event: any) => {
              onDataChange({
                ...data,
                name: event.target.value,
              });
            }}
          ></InputForm>
          <InputForm
            type="text"
            placeholder="E-mail"
            name="email"
            value={data?.email || ''}
            onChange={(event: any) => {
              onDataChange({
                ...data,
                email: event.target.value,
              });
            }}
          ></InputForm>
          <InputForm
            type="text"
            placeholder="Data nascimento (DD/MM/AA)"
            name="birthDate"
            value={data?.birthDate || ''}
            onChange={(event: any) => {
              onDataChange({
                ...data,
                birthDate: event.target.value,
              });
            }}
          ></InputForm>
          <InputForm
            type="text"
            placeholder="Telefone"
            name="phone"
            value={data?.phone || ''}
            onChange={(event: any) => {
              onDataChange({
                ...data,
                phone: event.target.value,
              });
            }}
          ></InputForm>
          <InputForm
            type="password"
            placeholder="Senha"
            name="password"
            value={data?.password || ''}
            onChange={(event: any) => {
              onDataChange({
                ...data,
                password: event.target.value,
              });
            }}
          ></InputForm>
          <InputForm
            type="password"
            placeholder="Confirme sua senha"
            name="checkPassword"
            value={data?.checkPassword || ''}
            onChange={(event: any) => {
              onDataChange({
                ...data,
                checkPassword: event.target.value,
              });
            }}
          ></InputForm>
        </InputContainer>
        <Footer>
          <ConcludedButton
            type="button"
            onClick={() => {
              submitRegistration();
            }}
          >
            Concluído
          </ConcludedButton>
          <LoginButton type="button" onClick={() => history.push('/login')}>
            Já possui uma conta? Faça o login
          </LoginButton>
        </Footer>
      </Content>
    </Container>
  );
};

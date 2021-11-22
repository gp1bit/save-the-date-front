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
import ProfileLight from '../../../assets/profileLight.svg';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PreviousWhite } from '../../Icons/PreviousWhite';

export function NewPasswordPage() {
  const history = useHistory();

  const submitPassword = () => {
    Swal.fire({
      icon: 'success',
      text: 'Senha redefinida com sucesso!',
    });

    history.push('/login');
  };

  return (
    <Container>
      <Content>
        <Header>
          <img src={ProfileLight} alt="Ícone de perfil" />
          <Title>
            <h1 className="title">Esqueceu sua senha?</h1>
            <p className="description">Nos informe uma nova senha abaixo</p>
          </Title>
        </Header>
        <MenuLogin>
          <InputForm type="text" placeholder="Nova senha"></InputForm>
        </MenuLogin>
        <ConcludedButton type="button" onClick={() => submitPassword()}>
          Salvar
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

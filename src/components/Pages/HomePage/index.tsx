import {
  Container,
  Content,
  Header,
  HomeMenu,
  MenuBtn,
  ProfileButton,
} from './styles';
import { useHistory } from 'react-router-dom';
import { LogoBlue } from '../../LogoBlue';
import { ProfileIconBlue } from '../../IconProfileBlue';

export function HomePage() {
  const history = useHistory();

  return (
    <Container>
      <Header>
        <ProfileButton
          type="button"
          onClick={() => history.push('/profilePage')}
        >
          <ProfileIconBlue />
        </ProfileButton>
      </Header>
      <Content>
        <LogoBlue />
        <HomeMenu>
          <MenuBtn type="button" onClick={() => history.push('/myEventsPage')}>
            Meus eventos
          </MenuBtn>
          <MenuBtn
            type="button"
            onClick={() => history.push('/friendsEventsPage')}
          >
            Eventos de amigos
          </MenuBtn>
        </HomeMenu>
      </Content>
    </Container>
  );
}

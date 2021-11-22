import {
  Container,
  Content,
  ContainerEvents,
  ContainerMyEvents,
  ContainerElements,
  Footer,
  PreviousButton,
  DivEvento,
} from './styles';
import { LogoBlue } from '../../Icons/LogoBlue';
import { useHistory } from 'react-router';
import { PreviousBlack } from '../../Icons/PreviousBlack';
import { IonContent } from '@ionic/react';
import { CalendarIcon } from '../../Icons/CalendarIcon';

export function FriendsEventsPage() {
  const history = useHistory();

  return (
    <IonContent>
      <Container>
        <Content>
          <LogoBlue />
          <ContainerMyEvents>
            <div className="Title">
              <h1>Eventos de amigos</h1>
            </div>
            <ContainerEvents>
              <ContainerElements>
                <CalendarIcon />
                <DivEvento
                  type="button"
                  onClick={() => history.push('/detailsFriendsEventPage')}
                >
                  <h4>Churrasco</h4>
                  <p>José Silva</p>
                  <p>02/12/2021 ás 10h</p>
                </DivEvento>
              </ContainerElements>
            </ContainerEvents>
          </ContainerMyEvents>
        </Content>
        <Footer>
          <PreviousButton
            type="button"
            onClick={() => history.push('/homePage')}
          >
            <PreviousBlack />
          </PreviousButton>
        </Footer>
      </Container>
    </IonContent>
  );
}

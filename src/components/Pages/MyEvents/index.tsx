import {
  Container,
  Content,
  ContainerEvents,
  ContainerMyEvents,
  Footer,
  PreviousButton,
  CreateButton,
  ContainerButton,
} from './styles';
import { LogoBlue } from '../../Icons/LogoBlue';
import { useHistory } from 'react-router';
import { PreviousBlack } from '../../Icons/PreviousBlack';
import { IonContent } from '@ionic/react';
import { PreviewMyEvents } from '../../PreviewMyEvents';

export function MyEventsPage() {
  const history = useHistory();

  return (
    <IonContent>
      <Container>
        <Content>
          <LogoBlue />
          <ContainerMyEvents>
            <div className="Title">
              <h1>Meus eventos</h1>
            </div>
            <ContainerEvents>
              <PreviewMyEvents />
              <ContainerButton>
                <CreateButton
                  type="button"
                  onClick={() => history.push('/createEventPage')}
                >
                  Criar evento
                </CreateButton>
              </ContainerButton>
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

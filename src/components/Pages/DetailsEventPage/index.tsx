import {
  Container,
  Content,
  ContainerEvents,
  ContainerMyEvents,
  ContainerElements,
  Footer,
  PreviousButton,
  DivEvento,
  ShareButton,
  ContainerButton,
  CreateButton,
} from './styles';
import { LogoBlue } from '../../LogoBlue';
import { useHistory } from 'react-router';
import { PreviousBlack } from '../../PreviousBlack';
import { IonContent } from '@ionic/react';
import { CalendarIcon } from '../../CalendarIcon';
import { ShareIcon } from '../../ShareIcon';

export function DetailsEventPage() {
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
              <ContainerElements>
                <CalendarIcon />
                <DivEvento
                  type="button"
                  onClick={() => history.push('/sharePage')}
                >
                  <h4>Happy Hour</h4>
                  <p>02/12/2021 ás 10h</p>
                </DivEvento>
                <ShareButton
                  type="button"
                  onClick={() => history.push('/sharePage')}
                >
                  <ShareIcon />
                </ShareButton>
              </ContainerElements>
              <ContainerButton>
                <CreateButton
                  type="button"
                  onClick={() => history.push('/homePage')}
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

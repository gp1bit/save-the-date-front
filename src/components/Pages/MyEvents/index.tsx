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
import Swal from 'sweetalert2';

export function MyEventsPage() {
  const history = useHistory();

  const submit = () => {
    return Swal.fire({
      icon: 'success',
      text: 'Compartilhe seu evento através do link abaixo!',
      html: '<a href="">Link</a>',
    });
  };

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
                  onClick={() => history.push('/detailsEventPage')}
                >
                  <h4>Happy Hour</h4>
                  <p>02/12/2021 ás 10h</p>
                </DivEvento>
                <ShareButton type="button" onClick={() => submit()}>
                  <ShareIcon />
                </ShareButton>
              </ContainerElements>
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

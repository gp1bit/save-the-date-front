import {
  Container,
  Content,
  ContainerInputs,
  ContainerProfile,
  Input,
  ContainerElements,
  Footer,
  PreviousButton,
} from './styles';
import { LogoBlue } from '../../LogoBlue';
import { EditItemBlue } from '../../EditItemBlue';
import { useHistory } from 'react-router';
import { PreviousBlack } from '../../PreviousBlack';
import { IonContent } from '@ionic/react';

export function ProfilePage() {
  const history = useHistory();

  return (
    <IonContent>
      <Container>
        <Content>
          <LogoBlue />
          <ContainerProfile>
            <h1>Meu perfil</h1>
            <ContainerInputs>
              <ContainerElements>
                <Input type="text" placeholder="Nome completo" />
                <EditItemBlue />
              </ContainerElements>

              <ContainerElements>
                <Input type="text" placeholder="E-mail" />
                <EditItemBlue />
              </ContainerElements>

              <ContainerElements>
                <Input type="text" placeholder="Senha" />
                <EditItemBlue />
              </ContainerElements>

              <ContainerElements>
                <Input type="text" placeholder="Data de nascimento" />
                <EditItemBlue />
              </ContainerElements>

              <ContainerElements>
                <Input type="text" placeholder="Contato" />
                <EditItemBlue />
              </ContainerElements>
            </ContainerInputs>
          </ContainerProfile>
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

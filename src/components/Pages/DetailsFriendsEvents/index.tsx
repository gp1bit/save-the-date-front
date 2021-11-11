import {
  Container,
  Content,
  ContainerEvents,
  ContainerMyEvents,
  ContainerElements,
  Footer,
  PreviousButton,
  DivEvento,
  InputContainer,
  Input,
  ItemsContainer,
  ItemNameContainer,
  InputItemsContainer,
  InputItem,
  ContainerButton,
  CreateButton,
} from './styles';
import { LogoBlue } from '../../LogoBlue';
import { useHistory } from 'react-router';
import { PreviousBlack } from '../../PreviousBlack';
import { IonContent } from '@ionic/react';
import { CalendarIcon } from '../../CalendarIcon';
import { EditItemBlack } from '../../EditItemBlack';

export function DetailsFriendsEvents() {
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
                <DivEvento>
                  <h3>Churrasco</h3>
                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Mariana Cavalcante"
                      disabled
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Rua Aparecida, 299 - Centro"
                      disabled
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input type="text" placeholder="Sorocaba - SP" disabled />
                  </InputContainer>

                  <InputContainer>
                    <Input type="text" placeholder="02/12/2021" disabled />
                  </InputContainer>

                  <InputContainer>
                    <Input type="text" placeholder="10:00 - 15:00" disabled />
                  </InputContainer>

                  <ItemsContainer>
                    <h3>Itens</h3>
                    <div className="inputs-container">
                      <ItemNameContainer>
                        <h4>Nome</h4>
                        <InputItemsContainer>
                          <InputItem
                            type="text"
                            placeholder="Linguiça"
                            disabled
                          />
                        </InputItemsContainer>

                        <InputItemsContainer>
                          <InputItem
                            type="text"
                            placeholder="Refrigerante"
                            disabled
                          />
                        </InputItemsContainer>
                      </ItemNameContainer>

                      <ItemNameContainer>
                        <h4>Responsável</h4>
                        <InputItemsContainer>
                          <InputItem
                            type="text"
                            placeholder="João Alves"
                            disabled
                          />
                        </InputItemsContainer>

                        <InputItemsContainer>
                          <InputItem
                            type="text"
                            placeholder="Sem responsável"
                            disabled
                          />
                          <EditItemBlack />
                        </InputItemsContainer>
                      </ItemNameContainer>
                    </div>
                    <ContainerButton>
                      <CreateButton
                        type="button"
                        onClick={() => history.push('/')}
                      >
                        Salvar
                      </CreateButton>
                    </ContainerButton>
                  </ItemsContainer>
                </DivEvento>
              </ContainerElements>
            </ContainerEvents>
          </ContainerMyEvents>
          <Footer>
            <PreviousButton
              type="button"
              onClick={() => history.push('/myEventsPage')}
            >
              <PreviousBlack />
            </PreviousButton>
          </Footer>
        </Content>
      </Container>
    </IonContent>
  );
}

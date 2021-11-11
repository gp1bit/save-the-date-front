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
  AddItemButton,
  EventName,
  ContainerButton,
  CreateButton,
} from './styles';
import { LogoBlue } from '../../LogoBlue';
import { useHistory } from 'react-router';
import { PreviousBlack } from '../../PreviousBlack';
import { IonContent } from '@ionic/react';
import { CalendarIcon } from '../../CalendarIcon';
import { AddItem } from '../../AddItem';

export function CreateEventPage() {
  const history = useHistory();

  return (
    <IonContent>
      <Container>
        <Content>
          <LogoBlue />
          <ContainerMyEvents>
            <div className="Title">
              <h1>Criar evento</h1>
            </div>
            <ContainerEvents>
              <ContainerElements>
                <CalendarIcon />
                <DivEvento>
                  <EventName
                    type="text"
                    placeholder="Insira aqui o nome do evento"
                  ></EventName>
                  <InputContainer>
                    <Input type="text" placeholder="Nome" />
                  </InputContainer>

                  <InputContainer>
                    <Input type="text" placeholder="Rua, nº - bairro" />
                  </InputContainer>

                  <InputContainer>
                    <Input type="text" placeholder="Cidade - UF" />
                  </InputContainer>

                  <InputContainer>
                    <Input type="text" placeholder="Dia/Mês/Ano" />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Horário de início e Término"
                      disabled
                    />
                  </InputContainer>

                  <ItemsContainer>
                    <h4>Itens</h4>
                    <div className="inputs-container">
                      <ItemNameContainer>
                        <h3>Nome</h3>
                        <InputItemsContainer>
                          <InputItem
                            type="text"
                            placeholder="Coca-cola"
                            disabled
                          />
                        </InputItemsContainer>

                        <InputItemsContainer>
                          <InputItem type="text" placeholder="Bolo" disabled />
                        </InputItemsContainer>

                        <InputItemsContainer>
                          <AddItemButton
                            type="button"
                            onClick={() => history.push('/myEventsPage')}
                          >
                            <AddItem />
                          </AddItemButton>
                        </InputItemsContainer>
                      </ItemNameContainer>
                    </div>
                    <ContainerButton>
                      <CreateButton
                        type="button"
                        onClick={() => history.push('/')}
                      >
                        Concluído
                      </CreateButton>
                    </ContainerButton>
                  </ItemsContainer>
                </DivEvento>
              </ContainerElements>
            </ContainerEvents>
          </ContainerMyEvents>
        </Content>
        <Footer>
          <PreviousButton
            type="button"
            onClick={() => history.push('/myEventsPage')}
          >
            <PreviousBlack />
          </PreviousButton>
        </Footer>
      </Container>
    </IonContent>
  );
}

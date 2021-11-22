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
  ContainerButton,
  CreateButton,
} from './styles';
import { LogoBlue } from '../../Icons/LogoBlue';
import { useHistory } from 'react-router';
import { PreviousBlack } from '../../Icons/PreviousBlack';
import { IonContent } from '@ionic/react';
import { CalendarIcon } from '../../Icons/CalendarIcon';
import { EditItemBlack } from '../../Icons/EditItemBlack';
import { TrashIcon } from '../../Icons/TrashIcon';
import { AddItem } from '../../Icons/AddItem';

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
                <DivEvento>
                  <h3>Happy Hour</h3>
                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Mariana Cavalcante"
                      disabled
                    />
                    <EditItemBlack />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Rua Aparecida, 299 - Centro"
                      disabled
                    />
                    <EditItemBlack />
                  </InputContainer>

                  <InputContainer>
                    <Input type="text" placeholder="Sorocaba - SP" disabled />
                    <EditItemBlack />
                  </InputContainer>

                  <InputContainer>
                    <Input type="text" placeholder="02/12/2021" disabled />
                    <EditItemBlack />
                  </InputContainer>

                  <InputContainer>
                    <Input type="text" placeholder="10:00 - 15:00" disabled />
                    <EditItemBlack />
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

                      <ItemNameContainer>
                        <h3>Responsável</h3>
                        <InputItemsContainer>
                          <InputItem type="text" placeholder="Huddy" disabled />
                          <TrashIcon />
                        </InputItemsContainer>

                        <InputItemsContainer>
                          <InputItem
                            type="text"
                            placeholder="Mariana C"
                            disabled
                          />
                          <TrashIcon />
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

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
} from './styles';
import { LogoBlue } from '../../LogoBlue';
import { useHistory } from 'react-router';
import { PreviousBlack } from '../../PreviousBlack';
import { IonContent } from '@ionic/react';
import { CalendarIcon } from '../../CalendarIcon';
import { EditItemBlack } from '../../EditItemBlack';
import { TrashIcon } from '../../TrashIcon';
import { AddItem } from '../../AddItem';

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
                    <h3>Itens</h3>
                    <div className="inputs-container">
                      <ItemNameContainer>
                        <h4>Nome</h4>
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
                          <AddItem />
                        </InputItemsContainer>
                      </ItemNameContainer>

                      <ItemNameContainer>
                        <h4>Responsável</h4>
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

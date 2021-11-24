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
  ContainerButton,
  CreateButton,
  AddItemButton,
} from './styles';
import { LogoBlue } from '../../Icons/LogoBlue';
import { useHistory } from 'react-router';
import { PreviousBlack } from '../../Icons/PreviousBlack';
import { IonContent } from '@ionic/react';
import { CalendarIcon } from '../../Icons/CalendarIcon';
import NewItemFriendsEvents from '../../NewItemFriendsEvents';
import { AddItem } from '../../Icons/AddItem';
import Swal from 'sweetalert2';

export function DetailsFriendsEvents(props: any) {
  const history = useHistory();

  const submitChanges = () => {
    try {
      Swal.fire({
        icon: 'success',
        text: 'Dados alterados!',
      });

      props.setDisabled({
        userName: true,
        itemName: true,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: 'Tente novamente!',
      });
    }
  };

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
                  <h3>{props.partyName}</h3>
                  <InputContainer>
                    <Input
                      type="text"
                      value={props.hostName}
                      placeholder="Nome do anfitrião"
                      disabled
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Rua, nº - Bairro"
                      value={props.adress}
                      disabled
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      value={props.city}
                      placeholder="Cidade-UF"
                      disabled
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      value={props.date}
                      placeholder="DD/MM/AAAA"
                      disabled
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      value={props.schedule}
                      placeholder="00:00 - 00:00"
                      disabled
                    />
                  </InputContainer>

                  <ItemsContainer>
                    <h3>Itens</h3>
                    <div className="inputs-container">
                      <ItemNameContainer>
                        <h3>Nome</h3>
                        <h3>Responsável</h3>
                      </ItemNameContainer>
                      <InputItemsContainer>
                        {props.items.map((item: any, index: number) => (
                          <NewItemFriendsEvents
                            item={item}
                            index={index}
                            removeUserFromItem={props.removeUserFromItem}
                            editItemName={props.editItemName}
                            editUserFromItem={props.editUserFromItem}
                            setDisabled={props.setDisabled}
                            disabled={props.disabled}
                          />
                        ))}
                      </InputItemsContainer>
                      <InputItemsContainer>
                        <AddItemButton
                          type="button"
                          onClick={() => props.addItem()}
                        >
                          <AddItem />
                        </AddItemButton>
                      </InputItemsContainer>
                    </div>
                    <ContainerButton>
                      <CreateButton
                        type="button"
                        onClick={() => submitChanges()}
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

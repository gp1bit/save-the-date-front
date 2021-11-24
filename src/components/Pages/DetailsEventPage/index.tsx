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
  AddItemButton,
  ContainerButton,
  CreateButton,
  InputItemsContainer,
} from './styles';
import { LogoBlue } from '../../Icons/LogoBlue';
import { useHistory } from 'react-router';
import { PreviousBlack } from '../../Icons/PreviousBlack';
import { IonContent } from '@ionic/react';
import { CalendarIcon } from '../../Icons/CalendarIcon';
import { EditItemBlack } from '../../Icons/EditItemBlack';
import { AddItem } from '../../Icons/AddItem';
import Swal from 'sweetalert2';
import { EditButton } from '../ProfilePage/styles';
import NewItemEventPage from '../../NewItemEventPage';

export function DetailsEventPage(props: any) {
  const history = useHistory();

  const editEvent = () => {
    try {
      Swal.fire({
        icon: 'success',
        text: 'Dados alterados!',
      });

      props.setDisabled({
        hostName: true,
        adress: true,
        city: true,
        date: true,
        scheduleEvent: true,
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
              <h1>Meus eventos</h1>
            </div>
            <ContainerEvents>
              <ContainerElements>
                <CalendarIcon />
                <DivEvento>
                  <h3>Happy Hour</h3>
                  <InputContainer>
                    <Input
                      id="changeName"
                      type="text"
                      disabled={props.disabled.hostName}
                      placeholder="Nome completo"
                      name="hostName"
                      value={props?.data?.hostName || ''}
                      onChange={(event: any) => {
                        props.onDataChange({
                          ...props.data,
                          hostName: event.target.value,
                        });
                      }}
                    />
                    <EditButton
                      onClick={() =>
                        props.setDisabled({
                          ...props.disabled,
                          hostName: false,
                        })
                      }
                    >
                      <label htmlFor="changeName">
                        <EditItemBlack />
                      </label>
                    </EditButton>
                  </InputContainer>

                  <InputContainer>
                    <Input
                      id="changeAdress"
                      type="text"
                      disabled={props.disabled.adress}
                      placeholder="Rua, nº - Bairro"
                      name="adress"
                      value={props?.data?.adress || ''}
                      onChange={(event: any) => {
                        props.onDataChange({
                          ...props.data,
                          adress: event.target.value,
                        });
                      }}
                    />
                    <EditButton
                      onClick={() =>
                        props.setDisabled({
                          ...props.disabled,
                          adress: false,
                        })
                      }
                    >
                      <label htmlFor="changeAdress">
                        <EditItemBlack />
                      </label>
                    </EditButton>
                  </InputContainer>

                  <InputContainer>
                    <Input
                      id="changeCity"
                      type="text"
                      disabled={props.disabled.city}
                      placeholder="Cidade/UF"
                      name="city"
                      value={props?.data?.city || ''}
                      onChange={(event: any) => {
                        props.onDataChange({
                          ...props.data,
                          city: event.target.value,
                        });
                      }}
                    />
                    <EditButton
                      onClick={() =>
                        props.setDisabled({
                          ...props.disabled,
                          city: false,
                        })
                      }
                    >
                      <label htmlFor="changeCity">
                        <EditItemBlack />
                      </label>
                    </EditButton>
                  </InputContainer>

                  <InputContainer>
                    <Input
                      id="changeDate"
                      type="text"
                      disabled={props.disabled.date}
                      placeholder="DD/MM/AA"
                      name="date"
                      value={props?.data?.date || ''}
                      onChange={(event: any) => {
                        props.onDataChange({
                          ...props.data,
                          date: event.target.value,
                        });
                      }}
                    />
                    <EditButton
                      onClick={() =>
                        props.setDisabled({
                          ...props.disabled,
                          date: false,
                        })
                      }
                    >
                      <label htmlFor="changeDate">
                        <EditItemBlack />
                      </label>
                    </EditButton>
                  </InputContainer>

                  <InputContainer>
                    <Input
                      id="changeSchedule"
                      type="text"
                      disabled={props.disabled.schedule}
                      placeholder="Horário de início/término"
                      name="schedule"
                      value={props?.data?.schedule || ''}
                      onChange={(event: any) => {
                        props.onDataChange({
                          ...props.data,
                          schedule: event.target.value,
                        });
                      }}
                    />
                    <EditButton
                      onClick={() =>
                        props.setDisabled({
                          ...props.disabled,
                          schedule: false,
                        })
                      }
                    >
                      <label htmlFor="changeSchedule">
                        <EditItemBlack />
                      </label>
                    </EditButton>
                  </InputContainer>

                  <ItemsContainer>
                    <h4>Itens</h4>
                    <div className="inputs-container">
                      <ItemNameContainer>
                        <h3>Nome</h3>
                        <h3>Responsável</h3>
                      </ItemNameContainer>
                      <InputItemsContainer>
                        {props.items.map((item: any, index: number) => (
                          <NewItemEventPage
                            item={item}
                            index={index}
                            removeUserFromItem={props.removeUserFromItem}
                            editItemName={props.editItemName}
                            editUserFromItem={props.editUserFromItem}
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
                      <CreateButton type="button" onClick={() => editEvent()}>
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

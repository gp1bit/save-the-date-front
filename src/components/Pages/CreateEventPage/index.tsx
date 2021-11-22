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
  EventName,
  ContainerButton,
  CreateButton,
} from './styles';
import { LogoBlue } from '../../Icons/LogoBlue';
import { useHistory } from 'react-router';
import { PreviousBlack } from '../../Icons/PreviousBlack';
import { IonContent } from '@ionic/react';
import { AddItem } from '../../Icons/AddItem';
import { eventValidator } from '../../../services/validations/eventValidator';
import Swal from 'sweetalert2';
import { CalendarIcon } from '../../Icons/CalendarIcon';
import { NewItem } from '../../NewItem';
import { InputItemsContainer } from '../../NewItem/styles';

export const CreateEventPage: React.FC<any> = (props) => {
  const history = useHistory();

  const submitNewEvent = () => {
    if (!eventValidator(props.data, props.onDataChange)) {
      return Swal.fire({
        icon: 'success',
        text: 'Evento criado com sucesso!',
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
              <h1>Criar evento</h1>
            </div>
            <ContainerEvents>
              <ContainerElements>
                <CalendarIcon />
                <DivEvento>
                  <EventName
                    type="text"
                    placeholder="Insira aqui o nome do evento"
                    name="eventName"
                    value={props.data?.partyName || ''}
                    onChange={(event: any) => {
                      props.onDataChange({
                        ...props.data,
                        partyName: event.target.value,
                      });
                    }}
                  ></EventName>
                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Nome"
                      name="hostName"
                      value={props.data?.hostName || ''}
                      onChange={(event: any) => {
                        props.onDataChange({
                          ...props.data,
                          hostName: event.target.value,
                        });
                      }}
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Rua, nº - bairro"
                      name="adress"
                      value={props.data?.adress || ''}
                      onChange={(event: any) => {
                        props.onDataChange({
                          ...props.data,
                          adress: event.target.value,
                        });
                      }}
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Cidade - UF"
                      name="city"
                      value={props.data?.city || ''}
                      onChange={(event: any) => {
                        props.onDataChange({
                          ...props.data,
                          city: event.target.value,
                        });
                      }}
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Dia/Mês/Ano"
                      name="date"
                      value={props.data?.date || ''}
                      onChange={(event: any) => {
                        props.onDataChange({
                          ...props.data,
                          date: event.target.value,
                        });
                      }}
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Horário de início e Término"
                      name="scheduleEvent"
                      value={props.data?.scheduleEvent || ''}
                      onChange={(event: any) => {
                        props.onDataChange({
                          ...props.data,
                          scheduleEvent: event.target.value,
                        });
                      }}
                    />
                  </InputContainer>

                  <ItemsContainer>
                    <h4>Itens</h4>
                    <div className="inputs-container">
                      <ItemNameContainer>
                        <h3>Nome</h3>

                        {props.items.map((item: any, index: number) => (
                          <NewItem
                            item={item}
                            index={index}
                            removeItem={props.removeItem}
                            editItem={props.editItem}
                          />
                        ))}
                        <InputItemsContainer>
                          <AddItemButton
                            type="button"
                            onClick={() => props.addItem()}
                          >
                            <AddItem />
                          </AddItemButton>
                        </InputItemsContainer>
                      </ItemNameContainer>
                    </div>
                    <ContainerButton>
                      <CreateButton
                        type="button"
                        onClick={() => submitNewEvent()}
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
};

import {
  Container,
  Content,
  ContainerInputs,
  ContainerProfile,
  Input,
  ContainerElements,
  Footer,
  PreviousButton,
  EditButton,
  ContainerButton,
  CreateButton,
} from './styles';
import { LogoBlue } from '../../Icons/LogoBlue';
import { EditItemBlue } from '../../Icons/EditItemBlue';
import { useHistory } from 'react-router';
import { PreviousBlack } from '../../Icons/PreviousBlack';
import { IonContent } from '@ionic/react';
import Swal from 'sweetalert2';

export function ProfilePage(props: any) {
  const history = useHistory();

  const submitDataProfile = () => {
    try {
      Swal.fire({
        icon: 'success',
        text: 'Dados alterados!',
      });

      props.setDisabled({
        name: true,
        email: true,
        birthDate: true,
        phone: true,
        password: true,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: 'Deu ruim!',
      });
    }
  };

  return (
    <IonContent>
      <Container>
        <Content>
          <LogoBlue />
          <ContainerProfile>
            <h1>Meu perfil</h1>
            <ContainerInputs>
              <ContainerElements>
                <Input
                  id="changeName"
                  type="text"
                  disabled={props.disabled.name}
                  placeholder="Nome completo"
                  name="name"
                  value={props?.data?.name || ''}
                  onChange={(event: any) => {
                    props.onDataChange({
                      ...props.data,
                      name: event.target.value,
                    });
                  }}
                />

                <EditButton
                  onClick={() =>
                    props.setDisabled({ ...props.disabled, name: false })
                  }
                >
                  <label htmlFor="changeName">
                    <EditItemBlue />
                  </label>
                </EditButton>
              </ContainerElements>

              <ContainerElements>
                <Input
                  id="changeEmail"
                  type="text"
                  disabled={props.disabled.email}
                  placeholder="E-mail"
                  name="email"
                  value={props?.data?.email || ''}
                  onChange={(event: any) => {
                    props.onDataChange({
                      ...props.data,
                      email: event.target.value,
                    });
                  }}
                />
                <EditButton
                  onClick={() =>
                    props.setDisabled({ ...props.disabled, email: false })
                  }
                >
                  <label htmlFor="changeEmail">
                    <EditItemBlue />
                  </label>
                </EditButton>
              </ContainerElements>

              <ContainerElements>
                <Input
                  id="changePassword"
                  type="password"
                  disabled={props.disabled.password}
                  placeholder="Senha"
                  value={props?.data?.password || ''}
                  onChange={(event: any) => {
                    props.onDataChange({
                      ...props.data,
                      password: event.target.value,
                    });
                  }}
                />
                <EditButton
                  onClick={() =>
                    props.setDisabled({ ...props.disabled, password: false })
                  }
                >
                  <label htmlFor="changePassword">
                    <EditItemBlue />
                  </label>
                </EditButton>
              </ContainerElements>

              <ContainerElements>
                <Input
                  id="changeBirthDate"
                  type="text"
                  disabled={props.disabled.birthDate}
                  placeholder="Data de nascimento"
                  name="birthDate"
                  value={props?.data?.birthDate || ''}
                  onChange={(event: any) => {
                    props.onDataChange({
                      ...props.data,
                      birthDate: event.target.value,
                    });
                  }}
                />
                <EditButton
                  onClick={() =>
                    props.setDisabled({ ...props.disabled, birthDate: false })
                  }
                >
                  <label htmlFor="changeBirthDate">
                    <EditItemBlue />
                  </label>
                </EditButton>
              </ContainerElements>

              <ContainerElements>
                <Input
                  id="changePhone"
                  type="text"
                  disabled={props.disabled.phone}
                  placeholder="Contato"
                  name="phone"
                  value={props?.data?.phone || ''}
                  onChange={(event: any) => {
                    props.onDataChange({
                      ...props.data,
                      phone: event.target.value,
                    });
                  }}
                />
                <EditButton
                  onClick={() =>
                    props.setDisabled({ ...props.disabled, phone: false })
                  }
                >
                  <label htmlFor="changePhone">
                    <EditItemBlue />
                  </label>
                </EditButton>
              </ContainerElements>
            </ContainerInputs>
            <ContainerButton>
              <CreateButton type="button" onClick={() => submitDataProfile()}>
                Salvar
              </CreateButton>
            </ContainerButton>
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

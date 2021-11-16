/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Save the date imports */

import { GlobalStyle } from './styles/global';
// import { Routes } from './routes';
import '@ionic/react/css/core.css';
import { IonApp, IonContent, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router';
import { HomePage } from './components/Pages/HomePage';
import { LandingPage } from './components/Pages/LandingPage';
import { LoginPage } from './components/Pages/LoginPage';
import { ProfilePage } from './components/Pages/ProfilePage';
import { RegistrationPage } from './components/Pages/RegistrationPage';
import { MyEventsPage } from './components/Pages/MyEvents';
import { CreateEventPage } from './components/Pages/CreateEventPage';
import { DetailsEventPage } from './components/Pages/DetailsEventPage';
import { FriendsEventsPage } from './components/Pages/FriendsEventsPage';
import { DetailsFriendsEvents } from './components/Pages/DetailsFriendsEvents';
import { ResetPasswordPage } from './components/Pages/ResetPasswordPage';
import { NewPasswordPage } from './components/Pages/NewPasswordPage';
import { useState } from 'react';

export function App() {
  const [data, setData] = useState<any>({
    adress: '',
    birthDate: '',
    city: '',
    closingTime: '',
    date: '',
    email: '',
    id: '',
    itemName: '',
    name: '',
    startTime: '',
    state: '',
    userId: '',
    userName: '',
    phone: '',
    password: '',
    checkPassword: '',
  });

  const [disabled, setDisabled] = useState({
    name: true,
    email: true,
    senha: true,
    birthDate: true,
    phone: true,
    password: true,
  });

  const [items, setItems] = useState<any[]>([]);

  // const newItem = () => {
  //   setItems([...items, data]);
  //   setData({
  //     ...data,
  //     itemName: '',
  //   });
  // };

  // const removeItem = (index: number) => {
  //   const copyItem = [...items];
  //   copyItem.splice(index, 1);
  //   setItems(copyItem);
  // };

  return (
    <IonApp>
      <IonContent>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/registrationPage">
              <RegistrationPage
                /* @ts-ignore */
                data={data}
                onDataChange={setData}
              />
            </Route>
            <Route exact path="/profilePage">
              <ProfilePage
                /* @ts-ignore */
                data={data}
                onDataChange={setData}
                disabled={disabled}
                setDisabled={setDisabled}
              />
            </Route>
            <Route exact path="/detailsFriendsEventPage">
              <DetailsFriendsEvents />
            </Route>
            <Route exact path="/friendsEventsPage">
              <FriendsEventsPage />
            </Route>
            <Route exact path="/detailsEventPage">
              <DetailsEventPage />
            </Route>
            <Route exact path="/createEventPage">
              <CreateEventPage />
            </Route>
            <Route exact path="/myEventsPage">
              <MyEventsPage />
            </Route>
            <Route exact path="/homePage">
              <HomePage />
            </Route>
            <Route exact path="/newPassword">
              <NewPasswordPage
                /* @ts-ignore */
                data={data}
                onDataChange={setData}
              />
            </Route>
            <Route exact path="/resetPassword">
              <ResetPasswordPage
                /* @ts-ignore */
                data={data}
                onDataChange={setData}
              />
            </Route>
            <Route exact path="/login">
              <LoginPage
                /* @ts-ignore */
                data={data}
                onDataChange={setData}
              />
            </Route>
            <Route exact path="/">
              <LandingPage />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonContent>

      <GlobalStyle />
    </IonApp>
  );
}

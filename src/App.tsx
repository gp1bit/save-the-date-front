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

export function App() {
  return (
    <IonApp>
      <IonContent>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/registrationPage">
              <RegistrationPage />
            </Route>
            <Route exact path="/profilePage">
              <ProfilePage />
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
            <Route exact path="/login">
              <LoginPage />
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

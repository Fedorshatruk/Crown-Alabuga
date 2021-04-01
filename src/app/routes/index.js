// components
import { BrokersPage } from '../components';
import AuthPageContainer from "../components/AuthPage/AuthPageContainer";
import LoginPageContainer from "../components/LoginPage/LoginPageContainer";
import SessionPageContainer from "../components/SessionsPage/SessionPageContainer";
import StartPreloaderContainer from "../components/StartPreloader/StartPreloaderContainer";
import ProducerPageContainer from "../components/UsersGamePage/ProducersPage/ProducerPageContainer";

// instruments
import { Route, Switch } from 'react-router-dom';




export const Routes = () => {
  return (
    <Switch>
        <Route path="/login" render={() => <LoginPageContainer />} />
        <Route path="/auth" render={() => <AuthPageContainer />} />
        <Route path="/sessions" render={() => <SessionPageContainer />} />
        <Route path="/broker" render={() => <BrokersPage />} />
        <Route path="/producer" render={() => <ProducerPageContainer />} />
        <Route path="/start" render={() => <StartPreloaderContainer/>} />
    </Switch>
  );
};

// components
import { BrokersPage, ProducersPage } from '../components';
import AuthPageContainer from "../components/AuthPage/AuthPageContainer";
import LoginPageContainer from "../components/LoginPage/LoginPageContainer";
import SessionPageContainer from "../components/SessionsPage/SessionPageContainer";

// instruments
import { Route, Switch } from 'react-router-dom';


export const Routes = () => {
  return (
    <Switch>
        <Route path="/login" render={() => <LoginPageContainer />} />
        <Route path="/auth" render={() => <AuthPageContainer />} />
        <Route path="/sessions" render={() => <SessionPageContainer />} />
        <Route path="/broker" render={() => <BrokersPage />} />
        <Route path="/producer" render={() => <ProducersPage />} />
    </Switch>
  );
};

// components
import { SessionsPage, BrokersPage, ProducersPage } from '../components';

// instruments
import { Route, Switch } from 'react-router-dom';
import AuthPageContainer from "../components/AuthPage/AuthPageContainer";
import LoginPageContainer from "../components/LoginPage/LoginPageContainer";

export const Routes = () => {
  return (
    <Switch>
        <Route path="/login" render={() => <LoginPageContainer />} />
        <Route path="/auth" render={() => <AuthPageContainer />} />
        <Route path="/sessions" render={() => <SessionsPage />} />
        <Route path="/broker" render={() => <BrokersPage />} />
        <Route path="/producer" render={() => <ProducersPage />} />
    </Switch>
  );
};

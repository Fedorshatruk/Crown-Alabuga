// components
import { LoginPage, AuthPage, SessionsPage, BrokersPage, ProducersPage } from '../components';

// instruments
import { Route, Switch } from 'react-router-dom';

export const Routes = () => {
  return (
    <Switch>
        <Route path="/login" render={() => <LoginPage />} />
        <Route path="/auth" render={() => <AuthPage />} />
        <Route path="/sessions" render={() => <SessionsPage />} />
        <Route path="/broker" render={() => <BrokersPage />} />
        <Route path="/producer" render={() => <ProducersPage />} />
    </Switch>
  );
};

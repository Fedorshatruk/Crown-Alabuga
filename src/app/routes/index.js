// components
import { LoginPage, AuthPage, BrokersPage, ProducersPage } from '../components';

// instruments
import { Route, Switch } from 'react-router-dom';

export const Routes = () => {
  return (
    <Switch>
        <Route path="/login" render={() => <LoginPage />} />
        <Route path="/auth" render={() => <AuthPage />} />
        <Route path="/broker" render={() => <BrokersPage />} />
        <Route path="/producer" render={() => <ProducersPage />} />
    </Switch>
  );
};

// css modules
import m from './App.module.css';

// components
import { LoginPage, BrokersPage, ProducersPage } from './components';

// instruments
import { Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className={m.wrapper}>
      <Route path="/loginPage" render={() => <LoginPage />} />
      <Route path="/brokerPage" render={() => <BrokersPage />} />
      <Route path="/producerPage" render={() => <ProducersPage />} />
    </div>
  )
}

export default App;
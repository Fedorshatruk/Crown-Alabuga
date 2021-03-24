// css modules
import m from './App.module.css';

// components
import { LoginPage, BrokersPage, ProducersPage } from './components';

// instruments
import { Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className={m.wrapper}>
      <Route path="/Login" render={() => <LoginPage />} />
      <Route path="/broker" render={() => <BrokersPage />} />
      <Route path="/producer" render={() => <ProducersPage />} />
    </div>
  )
}

export default App;
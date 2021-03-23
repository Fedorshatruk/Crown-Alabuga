// css modules
import m from './App.module.css';

// components
import { BrokersPage, ProducersPage } from './components';

// instruments
import { Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className={m.wrapper}>
      <Route path="/BrokerPage" render={() => <BrokersPage />} />
      <Route path="/ProducerPage" render={() => <ProducersPage />} />
    </div>
  )
}

export default App;
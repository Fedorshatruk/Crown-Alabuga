import m from './BrokersPage.module.css';
import { Header } from './Header';
import { Main } from './Main';

export const BrokersPage = (props) => {
  return (
    <div className={m.wrapperBG}>
      <Header />
      <Main />
    </div>
  );
};

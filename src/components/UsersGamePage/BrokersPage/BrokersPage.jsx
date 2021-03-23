import m from './BrokersPage.module.css';
import { Header } from './Header';
import { Main } from './Main';

export const BrokersPage = (props) => {
  return (
    <div>
      <div>
        <div className={m.wrapperBG}>
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
};

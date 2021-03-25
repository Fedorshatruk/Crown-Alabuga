import m from './Header.module.css'
import { AmountOfPeso, SessionStage, Timer } from './index';

export const Header = (props) => {
  return (
    <div className={m.wrapper}>
      <AmountOfPeso />
      <SessionStage />
      <Timer />
    </div>
  );
};

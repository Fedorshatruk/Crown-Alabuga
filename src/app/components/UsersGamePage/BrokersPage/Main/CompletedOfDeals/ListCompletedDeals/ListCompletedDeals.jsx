import m from './ListCompletedDeals.module.css';
import { ListOfDeals } from './ListOfDeals/ListOfDeals';

export const ListCompletedDeals = (props) => {
  return (
    <div className={m.wrapper}>
      <div className={m.titleContainer}>
        <div className={m.titleText}>ИГРОК</div>
        <div className={m.titleText}>ЗАГОТОВКИ</div>
        <div className={m.titleText}>ПРОДАНО ПО</div>
      </div>
      <ListOfDeals />
    </div>
  );
};

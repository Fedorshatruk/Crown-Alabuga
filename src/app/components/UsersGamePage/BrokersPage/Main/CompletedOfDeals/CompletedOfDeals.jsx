import m from './CompletedOfDeals.module.css';
import { ListCompletedDeals } from './ListCompletedDeals/ListCompletedDeals';

export const CompletedOfDeals = (props) => {
  return (
    <div className={m.wrapper}>
      <div className={m.titleText}>СДЕЛКИ СОСТОЯЛИСЬ</div>
      <ListCompletedDeals />
      <div className={m.planContainer}>
        <div className={m.planText}>ИТОГО</div>
        <div className={m.planText}>55</div>
        <div className={m.priceWrapper}>
          <div className={m.iconPeso} />
          <div className={m.planText}>5000</div>
        </div>
      </div>
    </div>
  );
};

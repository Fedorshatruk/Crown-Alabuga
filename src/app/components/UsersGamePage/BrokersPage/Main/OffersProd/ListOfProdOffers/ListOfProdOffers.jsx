import m from './ListOfProdOffers.module.css';
import { InboxOffers } from './InboxOffers/InboxOffers';

export const ListOfProdOffers = (props) => {
  return (
    <div className={m.wrapper}>
      <div className={m.titleContainer}>
        <div className={m.titleText}>ИГРОК</div>
        <div className={m.titleText}>ЗАГОТОВКИ</div>
        <div className={m.titleText}>ЦЕНА</div>
      </div>
      <InboxOffers />
    </div>
  );
};

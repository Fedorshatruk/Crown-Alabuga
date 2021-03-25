import m from './OffersProd.module.css';
import { ListOfProdOffers } from './ListOfProdOffers/ListOfProdOffers';

export const OffersProd = (props) => {
  return (
    <div className={m.wrapper}>
      <div className={m.titleText}>ПРЕДЛОЖЕНИЯ ПРОИЗВОДИТЕЛЕЙ</div>
      <ListOfProdOffers />
      <div className={m.planContainer}>
        <div className={m.planText}>ПЛАН</div>
        <div className={m.planText}>55</div>
        <div className={m.priceWrapper}>
          <div className={m.iconPeso} />
          <div className={m.planText}>5000</div>
        </div>
      </div>
    </div>
  );
};

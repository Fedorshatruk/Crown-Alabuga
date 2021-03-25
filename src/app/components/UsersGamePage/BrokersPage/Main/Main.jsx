import m from './Main.module.css'
import { SendOfRequest, OffersProd, CompletedOfDeals } from './index';

export const Main = (props) => {
  return (
    <div className={m.wrapper}>
      <SendOfRequest />
      <OffersProd />
      <CompletedOfDeals />
    </div>
  );
};

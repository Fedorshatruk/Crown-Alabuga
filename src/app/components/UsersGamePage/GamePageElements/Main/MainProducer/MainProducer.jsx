// global components
import { FlexWrapper, GridWrapper } from '../../../../../globalComponents';
// elements
import {
  SendOfDeals,
  OffersOfDeals,
  CompletedOfDeals,
  SendOfDealsProd,
} from './index';

export const MainProducer = () => {
  return (
    <FlexWrapper width="100%" jContent="space-between" aItems="flex-start">
      <FlexWrapper height="100%" fDirection="column" jContent="space-between">
        <SendOfDeals />
        <SendOfDealsProd />
      </FlexWrapper>
      <OffersOfDeals />
      <CompletedOfDeals />
    </FlexWrapper>
  );
};

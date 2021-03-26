// global components
import { FlexWrapper, GridWrapper } from '../../../../globalComponents';
// elements
import {
  SendOfDeals,
  OffersOfDeals,
  CompletedOfDeals,
  SendOfDealsProd,
} from './index';

export const Main = () => {
  return (
    <FlexWrapper width="100%" jContent="space-between" aItems="flex-start">
      <FlexWrapper fDirection="column">
        <SendOfDeals />
        <SendOfDealsProd />
      </FlexWrapper>
      <OffersOfDeals />
      <CompletedOfDeals />
    </FlexWrapper>
  );
};

// global components
import { FlexWrapper } from '../../../../../globalComponents';
// elements
import {
  SendOfDeals,
  OffersOfDeals,
  CompletedOfDeals,
  SendOfDealsProd,
} from './index';

export const MainProducer = () => {
  return (
    <FlexWrapper
      width="100%"
      height="45vh"
      jContent="space-between"
      aItems="flex-start"
    >
      <FlexWrapper
        height="100%"
        fDirection="column"
        jContent="space-between"
        margin="0 var(--margin-l)"
      >
        <SendOfDeals />
        <SendOfDealsProd />
      </FlexWrapper>
      <OffersOfDeals />
      <CompletedOfDeals />
    </FlexWrapper>
  );
};

import {
  Card,
  FlexWrapper,
  Icon,
  Subtitle,
  Title,
} from '../../../../../../globalComponents';
import iconImage from '../../../../../../../assets/PesoIcon.png';

const ListDealsItems = () => {
  return <div>list of deals</div>;
};

const DealsResultItem = () => {
  return (
    <FlexWrapper width="90%" jContent="space-between">
      <Title fSize="var(--title-fz-game)">ПЛАН</Title>
      <Subtitle>55</Subtitle>
      <FlexWrapper width="var(--width-main-icon)" jContent="space-between">
        <Icon
          bg={iconImage}
          width="var(--width-mini-icon)"
          height="var(--height-mini-icon)"
        />
        <Subtitle fSize="var(--subtitle-fz-game)">65</Subtitle>
      </FlexWrapper>
      <FlexWrapper width="var(--width-main-icon)" jContent="space-between">
        <Icon
          bg={iconImage}
          width="var(--width-mini-icon)"
          height="var(--height-mini-icon)"
        />
        <Subtitle fSize="var(--subtitle-fz-game)">80</Subtitle>
      </FlexWrapper>
    </FlexWrapper>
  );
};

const ItemsOfOffers = () => {
  return (
    <FlexWrapper height="100%" fDirection="column" jContent="space-between">
      <Title fSize="var(--title-fz-game)" lSpasing="2px">
        Мои предложения маклерам
      </Title>
      <ListDealsItems />
      <DealsResultItem />
    </FlexWrapper>
  );
};

export const OffersOfDeals = () => {
  return (
    <Card height="100%" margin="0 var(--margin-l)" padding="var(--padding-l)">
      <ItemsOfOffers />
    </Card>
  );
};

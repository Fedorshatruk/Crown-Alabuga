import { Card, FlexWrapper, PesoIcon, Subtitle, Title } from '../../../../../../globalComponents';
import iconImage from '../../../../../../../assets/PesoIcon.png';

const ListDealsItems = () => {
  return (
    <div>list of deals</div>
  )
}

const DealsResultItem = () => {
  return (
    <FlexWrapper width="90%" jContent="space-between">
      <Title>ПЛАН</Title>
      <Subtitle>55</Subtitle>
      <FlexWrapper width="50px" jContent="space-between">
        <PesoIcon 
          bg={iconImage} 
          width="15px"
          height="15px" 
        />
        <Subtitle>65</Subtitle>
      </FlexWrapper>
      <FlexWrapper width="50px" jContent="space-between">
        <PesoIcon 
          bg={iconImage}
          width="15px"
          height="15px" 
        />
        <Subtitle>80</Subtitle>
      </FlexWrapper>
    </FlexWrapper>
  )
}

const ItemsOfOffers = () => {
  return (
    <FlexWrapper
      height="95%"
      fDirection="column"
      jContent="space-between"
      margin="15px"
    >
      <Subtitle>МОИ ПРЕДЛОЖЕНИЯ МАКЛЕРАМ</Subtitle>
      <ListDealsItems />
      <DealsResultItem />
    </FlexWrapper>
  )
}

export const OffersOfDeals = () => {
  return (
    <Card
      bg="var(--color-bg-main)"
      width="var(--width-main-game-card)"
      height="var(--height-main-game-card)"
      margin="var(--margin-xl)"
      bRadius="var(--radius-m)"
      bShadow="var(--shadow-normal)"
    >
      <ItemsOfOffers />
    </Card>
  );
};

import { Card, FlexWrapper } from '../../../../../globalComponents';

export const SendOfDealsProd = () => {
  return (
    <FlexWrapper>
      <Card
        bg="var(--color-bg-main)"
        // width="230px"
        width="calc(160px + (360 - 160) * var(--res))"
        height="120px"
        margin="90px var(--margin-m) var(--margin-m)"
        bRadius="var(--radius-m)"
        bShadow="var(--shadow-normal)"
      >
        SendOfDealsProd
      </Card>
      <Card
        bg="var(--color-bg-main)"
        // width="230px"
        width="calc(160px + (360 - 160) * var(--res))"
        height="120px"
        margin="90px var(--margin-m) var(--margin-m)"
        bRadius="var(--radius-m)"
        bShadow="var(--shadow-normal)"
      >
        SendOfDealsProd
      </Card>
    </FlexWrapper>
  );
};

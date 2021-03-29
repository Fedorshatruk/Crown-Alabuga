import { Card, Subtitle } from '../../../globalComponents';
import { FlexWrapper } from '../../../globalComponents/FlexWrapper';

export const ItemSession = () => {
  return (
    <Card width="100%" height="100%" padding="var(--padding-l)">
      <Subtitle
        margin="0 0 var(--margin-l) 0"
        color="var(--color-typo-default)"
      >
        Название игры
      </Subtitle>
      <FlexWrapper
        height="var(--height-main-flex)"
        fDirection="column"
        jContent="space-around"
        aItems="flex-start"
      >
        <Subtitle fSize="var(--subtitle-fz-game)" lSpasing="1px">
          Режим: нормал
        </Subtitle>
        <Subtitle fSize="var(--subtitle-fz-game)" lSpasing="1px">
          Количество игроков: 12/36
        </Subtitle>
      </FlexWrapper>
    </Card>
  );
};

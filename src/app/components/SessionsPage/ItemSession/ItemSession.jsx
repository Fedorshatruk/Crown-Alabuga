import { Card, Subtitle, Title } from '../../../globalComponents';
import { FlexWrapper } from '../../../globalComponents/FlexWrapper';

export const ItemSession = () => {
  return (
    <Card
      bg="var(--color-bg-main)"
      width="100%"
      height="100%"
      bShadow="var(--shadow-normal)"
      bRadius="var(--radius-xl)"
    >
      <Title
        lSpasing="1px"
        margin="var(--margin-l) 0 0 0"
        color="var(--color-typo-default)"
      >
        Название игры
      </Title>
      <FlexWrapper
        height="var(--height-main-flex)"
        fDirection="column"
        jContent="space-around"
        aItems="flex-start"
        margin="var(--margin-s) var(--margin-xl)"
      >
        <Subtitle lSpasing="1px">Режим: нормал</Subtitle>
        <Subtitle lSpasing="1px">Количество игроков: 12/36</Subtitle>
      </FlexWrapper>
    </Card>
  );
};

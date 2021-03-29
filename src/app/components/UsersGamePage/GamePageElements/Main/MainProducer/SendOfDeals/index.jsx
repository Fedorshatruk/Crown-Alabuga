import { Card, Subtitle } from '../../../../../../globalComponents';
import { ItemsOfSend } from './ItemsOfSend';

export const SendOfDeals = () => {
  return (
      <Card
        color="white"
        bg="var(--color-bg-main)"
        width="var(--width-mini-game-card)"
        height="var(--height-mini-game-card)"
        margin="var(--margin-xl) 50px var(--margin-xl) 50px"
        // bRadius="var(--radius-m)"
        bShadow="var(--shadow-normal)"
      >
        <ItemsOfSend />
      </Card>
  );
};

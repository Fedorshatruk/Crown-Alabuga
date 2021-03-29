import { Card } from '../../../../../../globalComponents';
import { ItemsOfSend } from './ItemsOfSend';

export const SendOfDeals = () => {
  return (
    <Card
      width="var(--width-mini-game-card)"
      height="70%"
      margin="0 0 var(--margin-l) 0"
    >
      <ItemsOfSend />
    </Card>
  );
};

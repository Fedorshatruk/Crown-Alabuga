// components body
import { BodyOfProducerGame } from './BodyOfProducerGame/BodyOfProducerGame';
// global components
import { WrapperBG } from '../../../globalComponents';
// assets
import bgImage from '../../../../assets/bg-reg.jpg';

export const ProducersPage = () => {
  return (
    <WrapperBG bg={bgImage}>
      <BodyOfProducerGame />
    </WrapperBG>
  );
};

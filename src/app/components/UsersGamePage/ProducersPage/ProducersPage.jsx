// components body
import { BodyOfProducerGame } from './BodyOfProducerGame/BodyOfProducerGame';
// global components
import { WrapperBG } from '../../../globalComponents';
// assets
import bgImage from '../../../../assets/bg-reg.jpg';
// import bgImage from '../../../../assets/background.png';

export const ProducersPage = () => {
  return (
    <WrapperBG bg={bgImage}>
      <BodyOfProducerGame />
    </WrapperBG>
  );
};

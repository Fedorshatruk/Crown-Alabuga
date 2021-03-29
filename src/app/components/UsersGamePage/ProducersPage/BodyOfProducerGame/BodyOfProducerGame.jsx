// global components
import { FlexWrapper, GridWrapper } from '../../../../globalComponents';
// components
import { Header, MainProducer, Footer } from '../../GamePageElements';

export const BodyOfProducerGame = () => {
  return (
    <FlexWrapper
      width="100vw"
      height="100vh"
      padding="var(--padding-xxl)"
      fDirection="column"
      jContent="space-between"
    >
      <Header />
      <MainProducer />
      <Footer />
    </FlexWrapper>
  );
};

// export const BodyOfProducerGame = () => {
//   return (
//     <GridWrapper
//       gTRows="50px 1fr 50px"
//       aItems="none"
//       padding="var(--padding-xl)"
//       gGap="var(--grid-gap)"
//     >
//       <Header />
//       <MainProducer />
//       <Footer />
//     </GridWrapper>
//   );
// };

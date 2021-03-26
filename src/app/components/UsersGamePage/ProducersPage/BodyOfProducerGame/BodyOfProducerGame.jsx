// global components
import { FlexWrapper } from '../../../../globalComponents';
// components
import { Header, Main, Footer } from '../../GamePageElements';

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
      <Main />
      <Footer />
    </FlexWrapper>
  );
};

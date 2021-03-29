// components
import { AuthForm } from './AuthForm/AuthForm';
// global components
import {
  WrapperBG,
  UniversalWrapper,
  Title,
  FlexWrapper,
} from '../../globalComponents';
// assets
import bgImage from '../../../assets/bg-auth.jpg';
// instruments
import { reduxForm } from 'redux-form';

export const AuthPage = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <WrapperBG bg={bgImage}>
      <UniversalWrapper
        width="var(--main-width)"
        background="var(--color-bg-main)"
        bShadow="var(--shadow-normal)"
        height="100vh"
        margin="0 auto"
        padding="var(--padding-xl)"
      >
        <FlexWrapper fDirection="column" height="100vh">
          <Title bold margin="var(--margin-m) 0">
            Вход в профиль
          </Title>
          <LoginReduxFrom onSubmit={onSubmit} />
        </FlexWrapper>
      </UniversalWrapper>
    </WrapperBG>
  );
};

const LoginReduxFrom = reduxForm({ form: 'login' })(AuthForm);

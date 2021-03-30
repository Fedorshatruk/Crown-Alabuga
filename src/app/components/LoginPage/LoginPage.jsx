// components
import { LoginForm } from './LoginForm/LoginForm';
// global components
import {
  WrapperBG,
  UniversalWrapper,
  FlexWrapper,
  Title,
} from '../../globalComponents';
// assets
import bgImage from '../../../assets/bg-auth.jpg';
// instruments
import { reduxForm } from 'redux-form';

export const LoginPage = (props) => {

  const onSubmit = (formData) => {
    props.userRegister(formData.username, formData.password)
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
            Создайте свой профиль
          </Title>
          <LoginReduxFrom onSubmit={onSubmit} />
        </FlexWrapper>
      </UniversalWrapper>
    </WrapperBG>
  );
};

const LoginReduxFrom = reduxForm({ form: 'login' })(LoginForm);

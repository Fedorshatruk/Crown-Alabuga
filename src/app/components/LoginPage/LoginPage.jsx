// components
import { LoginForm } from './LoginForm/LoginForm';
// global components
import { WrapperBG, UniversalWrapper, Title } from '../../globalComponents';
// assets
import bgImage from '../../../assets/bg-index.jpg';
// instruments
import { reduxForm } from 'redux-form';

export const LoginPage = (props) => {
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
        <UniversalWrapper
          display="flex"
          fDirection="column"
          height="100vh"
        >
          <Title 
            lSpasing="1px"
            fWeight="bold"
            margin="var(--margin-m) 0"
          >
            Создайте свой профиль
          </Title>
          <LoginReduxFrom onSubmit={onSubmit} />
        </UniversalWrapper>
      </UniversalWrapper>
    </WrapperBG>
  );
};

const LoginReduxFrom = reduxForm({ form: 'login' })(LoginForm);

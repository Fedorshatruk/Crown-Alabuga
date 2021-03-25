import m from './AuthPage.module.css';
import { reduxForm } from 'redux-form'
import { AuthForm } from './index';

export const AuthPage = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div className={m.wrapperBG}>
      <div className={m.wrapperLogin}>
        <div className={m.wrapperItems}>
          <h1 className={m.title}>Войдите в свой профиль</h1>
          <AuthReduxFrom onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

const AuthReduxFrom = reduxForm({ form: 'login' })(AuthForm);
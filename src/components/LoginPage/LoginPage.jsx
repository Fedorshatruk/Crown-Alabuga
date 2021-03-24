import m from './LoginPage.module.css';
import { reduxForm } from 'redux-form';

export const LoginForm = (props) => {
  return (
    <form className={m.wrapperItemForm}>
      <div>
        <input className={m.controlledInput} placeholder={'ФИО'} />
      </div>
      <div>
        <input className={m.controlledInput} placeholder={'Пароль'} />
      </div>
      <div>
        <button className={m.containerButton}>Зарегистрироваться</button>
      </div>
    </form>
  );
};

const LoginReduxFrom  = reduxForm({form: 'login'})(LoginForm)

export const LoginPage = (props) => {
  return (
    <div className={m.wrapperBG}>
      <div className={m.wrapperLogin}>
        <div className={m.wrapperItems}>
          <h1 className={m.title}>Создайте свой профиль</h1>
          <LoginReduxFrom />
        </div>
      </div>
    </div>
  );
};

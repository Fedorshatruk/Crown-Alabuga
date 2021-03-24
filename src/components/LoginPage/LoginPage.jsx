import m from './LoginPage.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../components/FormsControl/FormsControl';
import { required } from '../../helpers/validators/validators';
// import * as axios from 'axios';

export const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={m.wrapperItemForm}>
      <div>
        <Field
          className={m.controlledInput}
          placeholder={'ФИО'}
          name={'username'}
          validate={[required]}
          component={Input}
        />

        <Field
          className={m.controlledInput}
          placeholder={'Пароль'}
          name={'password'}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <button className={m.containerButton}>Зарегистрироваться</button>
      </div>
    </form>
  );
};

export const LoginPage = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    // fetch('http://192.168.0.103:8000/auth/users/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(formData)
    // })
    //   .then(responce => responce.json())
    //   .then(json => console.log(json))
    //   .catch(e => console.log(e));
  };
  return (
    <div className={m.wrapperBG}>
      <div className={m.wrapperLogin}>
        <div className={m.wrapperItems}>
          <h1 className={m.title}>Создайте свой профиль</h1>
          <LoginReduxFrom onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

const LoginReduxFrom = reduxForm({ form: 'login' })(LoginForm);

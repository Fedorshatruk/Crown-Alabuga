// CSS modules
import m from './AuthForm.module.css';
// Instruments
import { Field } from 'redux-form'
import { required } from '../../heplers/validators/validators';
import { Input } from '../index'

export const AuthForm = (props) => {
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
        <button className={m.containerButton}>Войти</button>
      </div>
    </form>
  );
};

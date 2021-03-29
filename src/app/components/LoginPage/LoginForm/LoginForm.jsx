// CSS modules
import m from './LoginForm.module.css';
// instruments
import { Field } from 'redux-form'
import { Input, required } from '../../../components';
// global components
import { Button } from '../../../globalComponents';

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
        <Button
          lSpasing="1px"
          margin="var(--margin-m) auto"
        >Зарегистрироваться</Button>
      </div>
    </form>
  );
};

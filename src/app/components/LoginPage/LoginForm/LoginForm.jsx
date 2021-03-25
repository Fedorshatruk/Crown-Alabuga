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
          width="var(--width-button)"
          height="var(--height-button)"
          bg="var(--color-bg-brown)"
          color="var(--color-typo-normal)"
          fWeight="bold"
          lSpasing="1px"
          bShadow="var(--shadow-main)"
          margin="var(--margin-m) auto"
        >Зарегистрироваться</Button>
      </div>
    </form>
  );
};

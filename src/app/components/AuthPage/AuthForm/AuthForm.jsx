// CSS modules
import m from './AuthForm.module.css';
// instruments
import { Field } from 'redux-form'
import { Input, required } from '../../../components';
// global components
import { Button, FlexWrapper } from '../../../globalComponents';

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
        <FlexWrapper fDirection="column">
          <Button
            width="100px"
            lSpasing="1px"
            margin="var(--margin-s) 0 var(--margin-s) 0"
          >Войти</Button>
          <Button>Регистрация</Button>
        </FlexWrapper>
      </div>
    </form>
  );
};

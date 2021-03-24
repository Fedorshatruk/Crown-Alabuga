import m from './LoginPage.module.css';

export const LoginPage = () => {
  return (
    <div className={m.wrapperBG}>
      <div className={m.wrapperLogin}>
        <div className={m.wrapperItems}>
          <h1 className={m.title}>Login Page</h1>
          <form className={m.wrapperItemForm}>
            <div>
              <input className={m.controlledInput} placeholder={'Login'} />
            </div>
            <div>
              <input className={m.controlledInput} placeholder={'Password'} />
            </div>
            <div>
              <button className={m.containerButton}>Log in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

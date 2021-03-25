import m from './Timer.module.css';

export const Timer = (props) => {
  return (
    <div className={m.wrapper}>
      <div className={m.iconTimer}></div>
      <div className={m.textTimer}>30:00</div>
    </div>
  );
};

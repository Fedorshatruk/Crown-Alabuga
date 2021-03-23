import m from './AmountOfPeso.module.css';

export const AmountOfPeso = (props) => {
  return (
    <div className={m.wrapper}>
      <div className={m.iconPeso}></div>
      <div className={m.textPeso}>6000</div>
    </div>
  );
};

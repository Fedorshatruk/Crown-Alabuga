import m from './ListOfDeals.module.css';

export const ListOfDeals = (props) => {
  return (
    <div className={m.listContainer}>
      <div className={m.listText}>Линар</div>
      <div className={m.listText}>10</div>
      <div className={m.listText}>120</div>
    </div>
  );
};

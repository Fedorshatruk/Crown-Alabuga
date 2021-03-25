import m from './InboxOffers.module.css';

export const InboxOffers = (props) => {
  return (
    <div className={m.listContainer}>
      <div className={m.listText}>Линар</div>
      <div className={m.listText}>10</div>
      <div className={m.listText}>120</div>
        <button className={m.offersButton}>Согл.</button>
        <button className={m.offersButton}>Отказ</button>
      </div>
  );
};

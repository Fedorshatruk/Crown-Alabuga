// components body
import { BodyOfProducerGame } from './BodyOfProducerGame/BodyOfProducerGame';
// global components
import { WrapperBG } from '../../../globalComponents';
// assets
import bgImage from '../../../../assets/bg-reg.jpg';

export const ProducersPage = () => {
  return (
    <WrapperBG bg={bgImage}>
      <BodyOfProducerGame />
    </WrapperBG>
  );
};
// import m from './ProducersPage.module.css';
// import { Test } from './test/Test';

// export const ProducersPage = () => {
//   return (
//     <div className={m.wrapperBG}>
//       <div className={m.container}>
//         <div className={m.prod_head}>
//           <div className={m.peso}>
//             <div className={m.peso_img} />
//             <div className={m.peso_amount}>6000</div>
//           </div>
//           <div className={m.role_turn_stage}>
//             <p>{`Producer: stage 1 (1 turn)`}</p>
//           </div>
//           <div className={m.timer}>
//             <div className={m.timer_img} />
//             <div>30:00</div>
//           </div>
//         </div>
//         <div className={m.prod_main}>
//           <Test />
//         </div>
//         <div className={m.prod_foot}>
//           <p>footer</p>
//         </div>
//       </div>
//     </div>
//   );
// };

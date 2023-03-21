import s from './MyButton.module.css';
import { NavLink } from 'react-router-dom';

export const MyButton = ({ navigateTo, textBtn, active, doFunc, funcBody }) => {
  return (
    <NavLink
      className={`${s.btn} ${active ? s.active : ''}`}
      to={navigateTo}
      onClick={() => {
        if (doFunc) {
          doFunc(funcBody);
        }
      }}
    >
      <div className={s.textBtm}>{textBtn}</div>
    </NavLink>
  );
};

import s from './MyButton.module.css';
import { NavLink } from 'react-router-dom';

export const MyButton = ({ navigateTo, textBtn, active }) => {
  console.log(active);

  return (
    <NavLink className={`${s.btn} ${active ? s.active : ''}`} to={navigateTo}>
      <div className={s.textBtm}>{textBtn}</div>
    </NavLink>
  );
};

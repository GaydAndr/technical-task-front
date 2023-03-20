import s from './MyButton.module.css';
import { NavLink } from 'react-router-dom';

export const MyButton = ({ navigateTo, textBtn, type }) => {
  return (
    <NavLink
      className={s.btn}
      onClick={() => {
        // console.log(navigateTo);
      }}
      to={navigateTo}
    >
      <div className={s.textBtm}>{textBtn}</div>
    </NavLink>
  );
};

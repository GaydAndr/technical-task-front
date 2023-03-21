import s from './PatientItem.module.css';
import IconsSVG from '../../../images/symbol-defs.svg';

import { NavLink, useParams } from 'react-router-dom';

export const PatientItem = ({ patientData, showPatient }) => {
  const { patientId } = useParams();
  const { id, age, birthday, firstName, lastName, gender } = patientData;

  if (patientId === id) {
  }

  return (
    <NavLink
      id={id}
      onClick={() => showPatient(id)}
      to={'/info/' + id}
      className={`${s.shortInfo} ${patientId === id ? s.active : ''}`}
    >
      <div className={s.Name}>
        {firstName} {lastName}
      </div>
      <div className={s.Birthday}>Д.н.:{birthday}</div>
      <div className={s.Age}>Вік:{age}</div>
      <div className={s.Gender}>
        <svg
          className={s.svg}
          fill="currentColor"
          stroke="currentColor"
          width="40"
          height="50"
        >
          <use xlinkHref={`${IconsSVG}#${gender}`} />
        </svg>
      </div>
    </NavLink>
  );
};

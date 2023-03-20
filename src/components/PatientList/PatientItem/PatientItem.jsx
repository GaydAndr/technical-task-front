import { Card, Col, Row } from 'react-bootstrap';
import s from './PatientItem.module.css';
import { NavLink } from 'react-router-dom';

export const PatientItem = ({ patientData, showPatient }) => {
  const { id, age, birthday, firstName, lastName, gender } = patientData;
  // console.log(id);

  return (
    <NavLink
      id={id}
      onClick={() => showPatient(id)}
      to={'/info/' + id}
      className={s.shortInfo}
    >
      <div className={s.Name}>
        {firstName} {lastName}
      </div>
      <div className={s.Birthday}>Д.н.:{birthday}</div>
      <div className={s.Age}>Вік:{age}</div>
      <div className={s.Gender}>{gender}</div>
    </NavLink>
  );
};

<div class="container">
  <div class="Name"></div>
  <div class="Birthday"></div>
  <div class="Age"></div>
  <div class="Gender"></div>
</div>;

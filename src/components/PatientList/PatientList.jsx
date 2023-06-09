import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './PatientList.module.css';
import { getAllPatients } from '../../redux/patients/patient-operations';
import {
  filterSelector,
  patientListSelector,
} from '../../redux/patients/patient-selectors';
import { findById, patientID } from '../../redux/patients/patient-slice';
import { MyButton } from '../MyButton/MyButton';
import { Filter } from '../Filter/Filter';
import { PatientItem } from './PatientItem/PatientItem';
import { useParams } from 'react-router-dom';

export const PatientList = () => {
  const patients = useSelector(patientListSelector);
  const { patientId } = useParams();

  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPatients());
  }, [dispatch]);

  const showPatient = (id) => {
    dispatch(patientID(id));
    dispatch(findById(id));
  };

  const items = useMemo(
    () =>
      patients.filter(({ firstName, lastName }) => {
        return (
          firstName.toLowerCase().includes(filter.toLowerCase()) ||
          lastName.toLowerCase().includes(filter.toLowerCase())
        );
      }),
    [patients, filter]
  );

  return (
    <div className={s.listContainer}>
      <div className={s.listForm}>
        <Filter />
        <MyButton
          navigateTo="/technical-task-front/add-patient"
          active={!patientId ? true : false}
          textBtn="Додати пацієната"
        />
      </div>
      <ul className={s.patientList}>
        {items?.map((patient) => {
          return (
            <li className={s.patientItem} key={patient.id} href={patient.id}>
              <PatientItem patientData={patient} showPatient={showPatient} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

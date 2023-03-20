import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './PatientList.module.css';
import { getAllPatients } from '../../redux/patients/patient-operations';
import {
  filterSelector,
  // patientIdSelector,
  patientListSelector,
} from '../../redux/patients/patient-selectors';
import { findById, patientID } from '../../redux/patients/patient-slice';
import { MyButton } from '../MyButton/MyButton';
import { Filter } from '../Filter/Filter';
import { PatientItem } from './PatientItem/PatientItem';

export const PatientList = () => {
  const patients = useSelector(patientListSelector);
  // const stateId = useSelector(patientIdSelector);

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
        <MyButton navigateTo="add-patient" textBtn="Додати пацієната" />
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

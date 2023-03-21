import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import s from './InfoPage.module.css';
import {
  patientIdSelector,
  patientInfoSelector,
  patientListSelector,
} from '../redux/patients/patient-selectors';
import {
  findById,
  patientID,
  setPatientList,
} from '../redux/patients/patient-slice';
import { PatientInfo } from '../components/PatientInfo/PatientInfo';
import { useEffect } from 'react';
import { deletePatient } from '../redux/patients/patient-operations';

export const InfoPage = () => {
  const { patientId } = useParams();
  const stateId = useSelector(patientIdSelector);
  const patientList = useSelector(patientListSelector);
  const patientInfo = useSelector(patientInfoSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (patientList.length !== 0 && !stateId) {
      dispatch(findById(patientList[0].id));
    } else {
      dispatch(findById(patientId));
      dispatch(patientID(patientId));
    }
  }, [dispatch, stateId, patientList, patientId]);

  const handleDelete = (id) => {
    dispatch(deletePatient(id));
    dispatch(patientID(''));
    dispatch(setPatientList(patientList.filter(({ id }) => id !== patientId)));
  };

  return (
    patientInfo && (
      <section className={s.infoContainer}>
        <PatientInfo patientInfo={patientInfo} handleDelete={handleDelete} />
      </section>
    )
  );
};

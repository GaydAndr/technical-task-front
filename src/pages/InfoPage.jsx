import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
import Button from 'react-bootstrap/Button';
import { deletePatient } from '../redux/patients/patient-operations';

export const InfoPage = () => {
  const { patientId } = useParams();
  const stateId = useSelector(patientIdSelector);
  const patientList = useSelector(patientListSelector);
  const patientInfo = useSelector(patientInfoSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (patientList.length !== 0 && !stateId) {
      dispatch(findById(patientList[0].id));
    } else {
      dispatch(findById(patientId));
      dispatch(patientID(patientId));
    }
  }, [dispatch, stateId, patientList, patientId]);

  //

  const hendleDelete = (id) => {
    dispatch(deletePatient(id));
    dispatch(patientID(''));
    dispatch(setPatientList(patientList.filter(({ id }) => id !== patientId)));
    navigate('/info');
  };

  return (
    patientInfo && (
      <>
        <PatientInfo patientInfo={patientInfo} />

        <Button
          variant="primary"
          type="button"
          onClick={() => {
            hendleDelete(patientId);
          }}
        >
          delete
        </Button>
      </>
    )
  );
};

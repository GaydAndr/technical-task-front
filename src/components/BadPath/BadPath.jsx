import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { patientListSelector } from '../../redux/patients/patient-selectors';
import { useSelector } from 'react-redux';

export const BadPath = () => {
  const navigate = useNavigate();
  const patientList = useSelector(patientListSelector);

  useEffect(() => {
    if (patientList.length !== 0) {
      navigate('/technical-task-front/info/' + patientList[0].id);
    }
  }, [navigate, patientList]);

  return;
};

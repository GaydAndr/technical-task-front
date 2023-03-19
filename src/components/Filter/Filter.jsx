import { FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from '../../redux/patients/patient-selectors';
import { filterPatient } from '../../redux/patients/patient-slice';

export const Filter = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  return (
    <label htmlFor="filter">
      <FormControl
        className="mb-2"
        type="text"
        name="filter"
        placeholder="Шукати пацієнта"
        value={filter}
        onChange={(e) => dispatch(filterPatient(e.target.value))}
      />
    </label>
  );
};

import { useEffect, useMemo } from 'react';
import { ListGroup, ListGroupItem, Card, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPatients } from '../../redux/patients/patient-operations';
import {
  filterSelector,
  // patientIdSelector,
  patientListSelector,
} from '../../redux/patients/patient-selectors';
import { findById, patientID } from '../../redux/patients/patient-slice';
import { MyButton } from '../Button/Button';
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
    <Card className="p-2 bg-info">
      <Row>
        <Col className="pl-0">
          <Filter />
        </Col>
        <Col className="p-0">
          <MyButton navigateTo="add-patient" textBtn="Додати пацієнат" />
        </Col>
      </Row>
      <ListGroup as="ul">
        {items?.map((patient) => {
          return (
            <ListGroupItem as="li" action key={patient.id} href={patient.id}>
              <PatientItem patientData={patient} showPatient={showPatient} />
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Card>
  );
};

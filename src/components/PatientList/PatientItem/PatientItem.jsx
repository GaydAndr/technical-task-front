import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const PatientItem = ({ patientData, showPatient }) => {
  const { id, age, birthday, firstName, lastName, gender } = patientData;
  // console.log(id);

  return (
    <NavLink
      id={id}
      onClick={() => showPatient(id)}
      to={'/info/' + id}
      className="d-flex justify-content-between align-items-center"
    >
      <Row className="d-flex">
        <Col>
          <Card.Text className="fw-bold">
            {firstName} {lastName}
          </Card.Text>
          <Card.Text>
            Д.н.:{birthday} Вік:{age}
          </Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Text>{gender}</Card.Text>
        </Col>
      </Row>
    </NavLink>
  );
};

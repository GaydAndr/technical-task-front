import { Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { BadPath } from './components/BadPath/BadPath';
import { EditForm } from './components/EditForm/EditForm';
import { PatientList } from './components/PatientList/PatientList';
import { InfoPage } from './pages/InfoPage';

export const App = () => {
  return (
    <>
      <Container fluid className="p-3">
        <Row xs className="justify-content-md-center">
          <Col xs={5}>
            <PatientList />
          </Col>
          <Col>
            <Routes>
              <Route index path="/info/:patientId" element={<InfoPage />} />
              <Route path="/add-patient" element={<EditForm />} />
              <Route path="*" element={<BadPath />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;

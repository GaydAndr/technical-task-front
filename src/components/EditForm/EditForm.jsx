import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FormInput } from './FormInput/FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { postPatient } from '../../redux/patients/patient-operations';
import { useNavigate } from 'react-router-dom';
import { patientInfoSelector } from '../../redux/patients/patient-selectors';

export const EditForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const prevPatient = useSelector(patientInfoSelector);

  const onChange = (event) => {
    switch (event.target.name) {
      case 'firstName':
        setFirstName(event.target.value);
        break;
      case 'lastName':
        setLastName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'country':
        setCountry(event.target.value);
        break;
      case 'region':
        setRegion(event.target.value);
        break;
      case 'address':
        setAddress(event.target.value);
        break;
      case 'birthday':
        setBirthday(event.target.value);
        break;
      case 'age':
        setAge(event.target.value);
        break;
      case 'gender':
        setGender(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const credentials = {
      firstName,
      lastName,
      email,
      fullAddress: {
        country,
        region,
        address,
      },
      birthday,
      age,
      gender,
    };
    dispatch(postPatient(credentials)).then((data) => {
      if (typeof data.payload !== 'string') {
        navigate('/info/' + data.payload.id);
      }
    });
  };

  const handelCancel = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setCountry('');
    setRegion('');
    setAddress('');
    setBirthday('');
    setBirthday('');
    setGender('');
    navigate('/info/' + prevPatient.id);
  };

  return (
    <Form onSubmit={handleRegister}>
      <Row className="mb-3">
        <FormInput
          controlId="firstName"
          title="Ім'я"
          type="text"
          value={firstName}
          placeholder="Введіть ім'я"
          onChange={onChange}
        />
        <FormInput
          controlId="lastName"
          title="Прізвище"
          type="text"
          value={lastName}
          placeholder="Введіть прізвище"
          onChange={onChange}
        />

        <FormInput
          controlId="email"
          title="Електронна адреса"
          type="email"
          value={email}
          placeholder="Введіть e-mail"
          onChange={onChange}
        />
      </Row>

      <Row className="mb-3">
        <FormInput
          controlId="country"
          title="Область"
          type="text"
          value={country}
          placeholder="Введіть область"
          onChange={onChange}
        />

        <FormInput
          controlId="region"
          title="Місто"
          type="text"
          value={region}
          placeholder="Введіть місто"
          onChange={onChange}
        />

        <FormInput
          controlId="address"
          title="Адрес"
          type="text"
          value={address}
          placeholder="Введіть адрес"
          onChange={onChange}
        />
      </Row>

      <Row className="mb-3">
        <FormInput
          controlId="birthday"
          title="Дата народження"
          type="date"
          value={birthday}
          placeholder=""
          onChange={onChange}
        />

        <FormInput
          controlId="age"
          title="Вік"
          type="number"
          value={age}
          placeholder="Введіть вік"
          onChange={onChange}
        />

        <Form.Group as={Col} controlId="gender">
          <Form.Label as="legend" column sm={2}>
            Стать
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Чоловік"
              name="gender"
              required
              id="gender"
              value="MALE"
              onChange={onChange}
            />
            <Form.Check
              type="radio"
              label="Жінка"
              name="gender"
              id="gender"
              value="FEMALE"
              onChange={onChange}
            />
          </Col>
        </Form.Group>
      </Row>

      {/* <MyButton navigateTo="/info" type="submit" textBtn="sefgf" /> */}

      <Button variant="primary" type="submit">
        Submit
      </Button>

      <Button
        variant="primary"
        type="button"
        onClick={() => {
          handelCancel();
        }}
      >
        Назад
      </Button>
    </Form>
  );
};

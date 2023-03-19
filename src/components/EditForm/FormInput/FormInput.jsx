import { Col, Form } from 'react-bootstrap';

export const FormInput = ({
  controlId,
  title,
  type,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <>
      <Form.Group as={Col} controlId={controlId}>
        <Form.Label>{title}</Form.Label>
        <Form.Control
          name={controlId}
          type={type}
          value={value}
          required
          placeholder={placeholder}
          onChange={onChange}
        />
      </Form.Group>
    </>
  );
};

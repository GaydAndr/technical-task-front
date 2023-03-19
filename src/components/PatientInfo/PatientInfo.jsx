export const PatientInfo = ({ patientInfo }) => {
  const {
    // id,
    firstName,
    lastName,
    email,
    age,
    // birthday,
    gender,
    // address,
    // comments,
  } = patientInfo;

  return (
    <div>
      <ul>
        <li>
          <span>{firstName}</span>
        </li>
        <li>
          <span>{lastName}</span>
        </li>
        <li>
          <span>{email}</span>
        </li>
        <li>
          <span>{age}</span>
        </li>
        <li>
          <span>{gender}</span>
        </li>
      </ul>
    </div>
  );
};

import { MyButton } from 'components/MyButton/MyButton';
import s from './PatientInfo.module.css';

export const PatientInfo = ({ patientInfo, handleDelete }) => {
  const {
    id,
    firstName,
    lastName,
    email,
    age,
    birthday,
    gender,
    fullAddress,
    // comments,
  } = patientInfo;

  const { country, region, address } = fullAddress;

  return (
    <div className={s.infoContainer}>
      <div className={s.header}>
        <div className={s.nameConteiner}>
          <span>{firstName} </span>
          <span>{lastName}</span>
        </div>
        <div className={s.rSide}>
          <span className={s.age}> {age} р.</span>
          <div className={s.btnGroup}>
            <MyButton navigateTo="" active={false} textBtn="Редагувати" />
            <MyButton
              navigateTo="/technical-task-front/info"
              active={false}
              textBtn="Видалити"
              doFunc={handleDelete}
              funcBody={id}
            />
          </div>
        </div>
      </div>

      <div className={s.moreInfo}>
        <ul className={s.personalInfo}>
          <li>{gender}</li>
          <li>{birthday}</li>
          <li>{email}</li>
        </ul>

        <ul className={s.addressInfo}>
          <li>{country}</li>
          <li>{region}</li>
          <li>{address}</li>
        </ul>
      </div>
    </div>
  );
};

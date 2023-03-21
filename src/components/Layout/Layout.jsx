import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';
import { MainContainer } from '../MainContainer/MainContainer';
import { PatientList } from '../PatientList/PatientList';

export const Layout = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.colLeft}>
        <PatientList />
      </div>

      <div className={s.colRight}>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </div>
    </div>
  );
};

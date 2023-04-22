import { Route, Routes } from 'react-router-dom';
import { BadPath } from './components/BadPath/BadPath';
import { EditForm } from './components/EditForm/EditForm';
import { Layout } from './components/Layout/Layout';
import { InfoPage } from './pages/InfoPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/technical-task-front/" element={<Layout />}>
          <Route
            index
            path="/technical-task-front/info/:patientId"
            element={<InfoPage />}
          />
          <Route
            path="/technical-task-front/add-patient"
            element={<EditForm />}
          />
          <Route path="/technical-task-front/*" element={<BadPath />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

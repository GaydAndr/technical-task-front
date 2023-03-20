import { Route, Routes } from 'react-router-dom';
import { BadPath } from './components/BadPath/BadPath';
import { EditForm } from './components/EditForm/EditForm';
import { Layout } from './components/Layout/Layout';
import { InfoPage } from './pages/InfoPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/info/:patientId" element={<InfoPage />} />
          <Route path="/add-patient" element={<EditForm />} />
          <Route path="*" element={<BadPath />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

import { Route, Routes } from 'react-router-dom';
import { Home } from './app/presentation/pages/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </>
  );
};

export default App;
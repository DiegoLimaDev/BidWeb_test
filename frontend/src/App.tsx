import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './app/presentation/pages/Home';
import { Header } from './app/presentation/layout/Header/Header';
import { GlobalStyle } from './styles/globalStyles';
import { Footer } from './app/presentation/layout/Footer/Footer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route element={<Home />} path="/:page" />
        <Route path="/" element={<Navigate to="/1" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

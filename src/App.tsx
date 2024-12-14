import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Header from './components/header';
import FavoritesPage from './pages/favorites';
import Detail from './pages/detail';
import Footer from './components/footer';
import Undefined from './pages/undefined';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Undefined />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

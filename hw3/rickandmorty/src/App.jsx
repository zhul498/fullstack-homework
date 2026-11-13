import {
  NavLink, Navigate, Route, Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Species from './pages/Species';
import Locations from './pages/Locations';

const App = function App() {
  return (
    <>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
        <NavLink to="/species">Species</NavLink>
        <NavLink to="/locations">Locations</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/species" element={<Species />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="*" element={<p>Page not found.</p>} />
        </Routes>
      </main>
    </>
  );
};

export default App;

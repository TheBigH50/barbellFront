import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { CalculatePage, ContactPage, HomePage, InventoryPage } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/inventory'}>Inventory</NavLink>
          </li>
          <li>
            <NavLink to={'/calculate'}>Calculate</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>Contact</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/calculate" element={<CalculatePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

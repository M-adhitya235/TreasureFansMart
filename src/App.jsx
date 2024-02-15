import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/';
import Register from './pages/register/';

export default function App() {
  return (
    <div className="font-serif">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

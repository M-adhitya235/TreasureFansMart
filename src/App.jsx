import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/';
import Dashboard from './pages/dashboard';
import RegisterForm from './pages/register';

export default function App() {
  return (
    <div className="font-serif">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />   
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

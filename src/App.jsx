import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/';
<<<<<<< HEAD
import Dashboard from './pages/dashboard';
import RegisterForm from './pages/register';
=======
// import Register from './pages/register/';
>>>>>>> f3e9945 (tfm progress)

export default function App() {
  return (
    <div className="font-serif">
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Dashboard />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
=======
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
>>>>>>> f3e9945 (tfm progress)
        </Routes>
      </Router>
    </div>
  );
}

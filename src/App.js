import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import UserInfo from './components/pages/UserInfo.js';
import NotFoundPage from './components/pages/NotFoundPage.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
   <>
   <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user-info" element={<UserInfo />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
   </>
  );
}

export default App;

import logo from './logo.svg';
import Container from './Container/Container';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import NoPage from './NoPage/NoPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route index element={<Container />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;

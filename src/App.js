import logo from './logo.svg';
import './App.css';
import Main from './pages/main/main';
import { Routes, Route } from 'react-router'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;

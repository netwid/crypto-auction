import './App.css';
import { Router, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { Web3 } from './pages/Web3/Web3';

function App() {
  return (
    <Routes>
      <div>
        <Route path="/" element={<Main />} />
        <Route path="/web3" element={<Web3 />} />
      </div>
    </Routes>
  );
}

export default App;

import './App.css';
import { Router, Route, Routes, Link } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { Web3 } from './pages/Web3/Web3';
import Header from './components/Header';
import Page from './components/Page';
import Scroll from './components/Scroll';
function App() {
  return (
    
    <>
    <Header />
    <Page />
    <Scroll />
    
    
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/web3">Web3</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/web3" element={<Web3 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

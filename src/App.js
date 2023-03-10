import {useState} from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import ConnectMe from './Pages/ConnectMe';
import HomePage from './Pages/HomePage';
import Skills from './Pages/Skills';

function App() {
  const [page, setPage] = useState(0)
  return (
    <div className="App">
      <HashRouter>
      <NavBar pageNum={page}/>
      <Routes>
        <Route path='/' element={<HomePage setPage={setPage}/>}/>
        <Route path='/connect' element={<ConnectMe setPage={setPage}/>}/>
        <Route path='/skills' element={<Skills setPage={setPage}/>}/>
      </Routes>
      <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;

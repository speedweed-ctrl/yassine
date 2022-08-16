import NavBar from "./components/NavBar";
import Opener from "./components/Opener";
import Pcard from "./components/Pcard";
import SCard from "./components/scard";
import Houses from "./pages/Houses";
import Main from "./pages/Main";
import Specialists from "./pages/Specialists";
import {  Routes,Route } from 'react-router-dom'
import Filter from "./components/Filter";


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='spec' element={<Specialists/>}/>
      <Route path='hs' element={<Houses/>}/>
    </Routes>
    </>
  );
}

export default App;

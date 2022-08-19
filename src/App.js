import NavBar from "./components/NavBar";
import Houses from "./pages/Houses";
import Main from "./pages/Main";
import Specialists from "./pages/Specialists";
import {  Routes,Route } from 'react-router-dom'
import Packs from "./pages/Packs";
import Part from "./pages/Part";


function App() {
  return (
    <div>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='spec' element={<Specialists/>}/>
      <Route path='hs' element={<Houses/>}/>
      <Route path='en' element={<Packs/>}/>
      <Route path='pn' element={<Part/>}/>
    </Routes>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './mycomponents/Create'
import Update from './mycomponents/Update';
import Read from './mycomponents/Read'

function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Create></Create>}></Route>
      <Route  path='/update' element={<Update></Update>}></Route>
      <Route  path='/read' element={<Read></Read>}></Route>
    </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Personal} from  './Personal';
import {Departamento} from  './Departamento';
import {BrowserRouter, Route, Routes , NavLink} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      
      <h3>Crossmotion </h3>
      <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
        <ul class="navbar-nav">
            <li class="nav-item m-1">
                
                <NavLink className='btn btn-light btn-outline-primary' to='/home'>
                  Home
                  </NavLink>
            </li>
            <li class="nav-item m-1">
                
                <NavLink className='btn btn-light btn-outline-primary' to='/personal'>
                  Personal
                  </NavLink>
            </li>
            <li class="nav-item m-1">
               
                <NavLink className='btn btn-light btn-outline-primary' to='/departamento'>
                  Departamentos
                  </NavLink>
            </li>
        </ul>
        </nav>
        <Routes >
          <Route path='/home' element={<Home/>} />
          <Route path='/personal' element={<Personal/>} />
          <Route path='/departamento' element={<Departamento/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

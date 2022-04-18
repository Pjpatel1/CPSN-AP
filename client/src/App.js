import './App.css';
import React from 'react';

import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './components/home.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../src/components/home.css";
import "./components/queries.css";
import "./components/cities.css";
import Home from './components/services';
import Citiesavailable from './components/Cities';
import Datatable from './components/Database';
import Regform from './components/forms/regform';
import Servicepage from '../src/components/Servicespage';
import Admin from '../src/components/Admin/admin';
import Login from './login/login';

function App() {
  return ( 
  <div>
  
     <BrowserRouter>

     
          <Routes>
           
              <Route exact path='/' element={<Home />}>
              </Route>

              <Route exact path='/login' element={<Login/>}>
              </Route>

              <Route exact path='/cities' element={<Citiesavailable />}>
              </Route>
            
              <Route exact path='/table' element={<table/>}>
              </Route>

              <Route exact path='/datatable' element={<Datatable/>}>
              </Route>
              
              <Route exact path='/service' element={<Servicepage/>}>
              </Route>
             
              <Route exact path='/regform' element={<Regform/>}>
              </Route>

              <Route exact path='/admin' element={<Admin/>}>
              </Route>
          </Routes>
     </BrowserRouter>
  </div>

  );
}

export default App;

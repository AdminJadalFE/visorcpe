import React from 'react';
import Routes from './Routes'
import { Switch, BrowserRouter as Router} from 'react-router-dom'
import CpeContextProvider from './context/cpeContext';
import {CLogo} from './components/CLogo';
import {CPie} from './components/CPie';

function App() {
  return ( 
  <Router> 
      <CpeContextProvider>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <CLogo/>  
          </div>
          <div className="d-flex align-items-center">
            <Switch>
              <Routes />
            </Switch>
          </div>
        </div>  
        </div> 
        <CPie/>
      </CpeContextProvider>
  </Router> 
  );
}

export default App;

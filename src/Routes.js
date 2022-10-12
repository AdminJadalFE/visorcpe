import React  from 'react';
import {Route,Redirect} from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute";

import {HomeView} from './view/HomeView';
import {ResultView} from './view/ResultView';

export default function Routes() {  
    return (
        <div className="d-flex flex-column">
            <Redirect from='/' to='/visorcpe' /> 
            <Route exac path="/visorcpe" component={HomeView} />
            <Route exac path="/result" component={ResultView} />
            {/* <ProtectedRoute exact path="/visorcpe/result" component={ResultView} />  */}
        </div>
    )
}

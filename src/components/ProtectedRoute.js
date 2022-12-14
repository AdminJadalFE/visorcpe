import React, { Fragment, useContext } from "react";
import { CpeContext } from "../context/cpeContext";
import { Route, Redirect } from "react-router-dom";
import {ResultView} from '../view/ResultView';

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { cpe } = useContext(CpeContext); 
  
  return (
    <Fragment>
      {cpe !== null ? (
        // <Route {...rest} render={(props) => <Component {...props} />} />
        <Route exac path="/visorcpe/result" component={ResultView} />
      ) : (
        <Redirect to="/visorcpe" />
      )}
    </Fragment>
  );
}
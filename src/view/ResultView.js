import React, { Fragment, useContext } from "react";
import '../components/css/main.css';
import {CResultado} from '../components/CResultado';
import { CpeContext } from "../context/cpeContext";
import { Route, Redirect } from "react-router-dom";

export const ResultView = () => { 
    const { cpe } = useContext(CpeContext); 
  
    return (
        <div>

            {cpe !== null ? (
                <CResultado />
            ) : (
                <Redirect to="/visorcpe" />
            )}
 
        </div>
    )
}

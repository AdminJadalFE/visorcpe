import React, {useState, useEffect, useContext} from 'react';  
import { CpeContext } from '../context/cpeContext'; 
import {Link} from 'react-router-dom';
import './css/main.css';  

export const CResultado = () => {

    const { cpe } = useContext(CpeContext); 


    return (
        <div className="d-flex justify-content-center"> 
        <div style={{width: '600px', marginTop: '3rem', marginBottom: '0.5rem'}}>
                <div className="card mt-3">
                    <div className="card-body pb-0">
                            <h2 className="card-title align-center">
                                Busqueda de CPE
                            </h2>  
                    </div>   
                    <div className="card-body"> 
                        {
                            cpe.codigoRespuesta === '0' 
                            ? 
                            (
                                <div>
                                    <div className="mb-4">
                                        <h5 className="mensaje">{cpe.descripcionRespuesta}</h5> 
                                    </div> 
                                    <div className="d-flex justify-content-center"> 
                                    <a className="btn btn-info mr-2 colorjadal" href={cpe.urlCpe}>Descargar XML</a>
                                    <a className="btn btn-info mr-2 colorjadal" href={cpe.urlPdf}>Descargar PDF</a>
                                    <a className="btn btn-info mr-2 colorjadal" href={cpe.urlCdr}>Descargar CDR</a>
                                    <Link className="btn btn-info colorjadal" to="/visorcpe">Regresar</Link>
                                    </div> 
                                </div>
                            )
                            :
                            (
                                <div>
                                    <div className="mb-4">
                                        <h5 className="rechazado mensaje">{cpe.descripcionRespuesta}</h5> 
                                    </div> 
                            
                                    <Link className="btn btn-info btn-block" to="/visorcpe">Regresar</Link>
                                </div>
                            )
                        } 
                        </div> 
                        
                </div>
                </div>
        </div>
    )
}

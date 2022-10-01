import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import { CpeContext } from '../context/cpeContext';
import '../components/css/main.css';

export const ResultView = () => {
    const { cpe } = useContext(CpeContext); 
  
    return (
        <div className="d-flex justify-content-center">
            <div style={{width: '600px', marginTop: '0.5rem', marginBottom: '0.5rem'}}>

            <div className="card mt-3">
 
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
                                <Link className="btn btn-info colorjadal" to="/visorcpe">Volver a consultar</Link>
                                </div> 
                            </div>
                        )
                        :
                        (
                            <div>
                                <div className="mb-4">
                                    <h5 className="rechazado mensaje">{cpe.descripcionRespuesta}</h5> 
                                </div> 
                        
                                <Link className="btn btn-info btn-block" to="/visorcpe">Volver a consultar</Link>
                            </div>
                        )
                    }

                </div>
            </div> 
        
            </div>
        </div>
    )
}

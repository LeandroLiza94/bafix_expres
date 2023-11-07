import React from 'react';
//import { setIdProfesional } from '../axios_helper';
//import {  Navigate } from 'react-router-dom';
import  {useEffect, useState} from 'react';
//import Salir from './Salir';
//import Navegador from './Navegador';
import { request, getIdCliente } from '../axios_helper';
import Swal from 'sweetalert2';
//import withReactContent from 'sweetalert2-react-content';
import { show_alert } from '../function';

const ServiciosSolicitadosC =()=>{

    const [servicios, setServicios] = React.useState('');
    request(
        "POST",
        "/TareasC",
        {
           id:1,
           estado:"solicitado"
        }
       
    ).then((response) =>{
        console.log(response.data);
        setServicios(response.data) ; 
    }).catch((error) => {
        console.log(error);
    });
    
    return ( 
        
            <div className="row " >
                <h3>Servicios Solicitados</h3>               
                {servicios === ''? <div className="spinner-border text-info" role="status"></div>: null }

              
                
                    {servicios && servicios.map(servicio =>
                        
                        <div>
                            <div className="card "  >
                                
                                <div className="row g-0">
                                    
                                    <div className="col-8">

                                    
                                        
                                        <div className="card-body">
                                            <p className="card-text">
                                            Horario:{servicio.horario} Fecha:{servicio.fecha}
                                            </p>
                                            <p className="card-text">
                                            Estado:{servicio.estado} Dirreccion:{servicio.direccion}
                                            </p>
                                            <p className="card-text">
                                            Descripcion:{servicio.descripcion}
                                            </p>
                                            
                                           
                                        </div>
                                        
                                       
                                    </div>
                                </div>
                            </div>
                        <br />
                        </div>
                            
                    )}      

            </div>


        
    )

    }

export default ServiciosSolicitadosC
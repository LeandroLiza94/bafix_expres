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
import  '../assetss/css/Inicio.css'; 



const ServiciosSolicitadosC =()=>{

    const [servicios, setServicios] = React.useState('');

    const [modal, setModal] = React.useState('');

    let miModal ={idServicio:'',horario:''};
    //setModal(miModal);

    function cambiarModal(servicio) { 
        let array=[];
        array.push(servicio.descripcion); 
        array.push(servicio.direccion);
        array.push(servicio.estado);
        array.push(servicio.fecha);
        array.push(servicio.horario);
        array.push(servicio.idCli);
        array.push(servicio.idPro);
        array.push(servicio.idServicio);
        array.push(servicio.mail);
        array.push(servicio.telefono); 
        array.push(servicio.nombreCli); 
        array.push(servicio.nombrePro); 
        //console.log(servicio);
        setModal(array);
    }
    request(
        "POST",
        "/TareasC",
        {
           id:1,
           estado:"solicitado"
        }
       
    ).then((response) =>{
        //console.log(response.data);
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
                                            Estado:{servicio.estado} Direccion:{servicio.direccion}
                                            </p>
                                            <p className="card-text">
                                            Descripcion:{servicio.descripcion}
                                            </p>
                                            <button  className="btn btn-warning" 
                                            data-bs-toggle='modal' data-bs-target='#mimodal' onClick={() => cambiarModal(servicio)}>
                                                Ver Solicitud
                                            </button>
                                           
                                        </div>
                                        
                                       
                                    </div>
                                </div>
                            </div>


                        
                        

                        
                        <br />
                        </div>
                            
                    )}  


                    <div id='mimodal' className='modal fade' aria-hidden='true'>
                            <div className='row '>
                                <div className='col-2'></div>
                                <div className='col-8 mimodal'>

                                <div className='modal-dialog'>
                                    <div className='modal-content'>
                                        <div className='modal-header'>
                                            
                                            <label className="h5"> {modal[7]}</label>
                                            <button type='button' className='btn-close' data-bs-dismiss='modal' ariel-label='Close'></button>
                                        </div>
                                    </div>
                                </div>
                                <div className='modal-body'>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <input type="hidden" id='id' />
                                            <div className='input-group mb-3'>
                                                <span className='input-group-text'>{modal.horario}</span>
                                                <input type="text" id='nombre' className='form-control' placeholder='Nombre'  />
                                            </div>
                                            <div className='input-group mb-3'>
                                                <span className='input-group-text'></span>
                                                <input type="text" id='apellido' className='form-control' placeholder='Apellido'  />
                                            </div>
                    
                                        </div>

                                        <div className='col-6'>
                                            <div class="form-group">
                                                <label for="exampleFormControlTextarea1">Example textarea</label>
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                            <button  className='btn btn-success'>
                                            <i className='fa-solid fa-floppy-disk'></i> Enviar
                                             </button>
                                                            
                                        </div>
                            
                                    </div>
                                    

                                    <div className='modal-footer'>
                                        <button type='button' id='btnCerrar' className='btn btn-secondary' data-bs-dismiss='modal'>Cerrar</button>
                                    </div>
                                </div>
                                </div>
                                <div className='col-2'></div>
                            </div>
                            
                        </div>    

            </div>


        
    )

    }

export default ServiciosSolicitadosC
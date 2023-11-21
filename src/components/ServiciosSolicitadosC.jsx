import React from 'react';
import { request } from '../axios_helper';
//import Swal from 'sweetalert2';
//import withReactContent from 'sweetalert2-react-content';
//import { show_alert } from '../function';
import  '../assetss/css/Inicio.css'; 
import { FaPaperPlane,FaInfoCircle } from "react-icons/fa";
import { useEffect } from 'react';



const ServiciosSolicitadosC =()=>{

    const [servicios, setServicios] = React.useState('');

    const [modal, setModal] = React.useState('');

    //const [chatsServicio, setchatsServicio] = React.useState('');

    const [michat, setmichat] = React.useState([]);

    const [mensaje, setMensaje] = React.useState('');

    
    function guardarMensaje(idServicio,mensaje) { 
        console.log(mensaje);
        request(
            "POST",
            "/GuardarMensaje",
            {
                idServicio:idServicio,
                tipo:"cliente",
                mensaje:mensaje,
                fecha:"20231101"
            }
           
        ).then((response) =>{
            console.log(response.data);
            setMensaje("")
            cambiarModal(idServicio);
               
            
        }).catch((error) => {
            console.log(error);
        });

    }

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

        request(
            "POST",
            "/Chats",
            {
               id:servicio.idServicio
            }
           
        ).then((response) =>{
            //console.log(response.data);
            setmichat(response.data)
               
            
        }).catch((error) => {
            console.log(error);
        });
    }

    function cambiarEstado(idServicio,estado) {
        
        request(
            "POST",
            "/TareaCambiarEstado",
            {
               id:idServicio,
               estado:estado
            }
           
        ).then((response) =>{
            console.log(response.data);
            //setServicios(response.data) ; 
            //window.location.reload()
            traerListado();
            window.location.reload()
        }).catch((error) => {
            console.log(error);
        });
    
    }
   
    function pedirMotivo(idServicio) {
        let motivo = prompt("Ingrese motivo de la reprogramación:");
        //console.log(motivo);
        if (motivo!=null) {
            guardarMensaje(idServicio,"Se pide reprogramar debido: "+motivo);
            cambiarEstado(idServicio,"Solicitado");
            
        }
        
    }

    useEffect(()=>{

         if (servicios==='') {
            traerListado();
        }
        
    }, [servicios])
    
    function traerListado() {
        request(
            "POST",
            "/TareasC",
            {
               id:1,
               estado:"Solicitado"
            }
           
        ).then((response) =>{
            //console.log(response.data);
            setServicios(response.data) ; 
            
        }).catch((error) => {
            console.log(error);
        });
        
    }
    
    //console.log(chatsServicio); 

    
    
    return ( 
        
            <div className="row " >
                <h3>Servicios Solicitados</h3>               
                {servicios === ''? <div className="spinner-border text-info" role="status"></div>: null }

              
                
                    {servicios && servicios.map(servicio =>
                        
                        <div key={servicio.idServicio}>
                            <div className="card "  >
                                
                                <div className="row g-0">
                                    
                                    <div className="col-12">

                                    
                                        
                                        <div className="card-body">

                                        <div className="row">
                                                <div className="col-8">
                                                    <div className="row">
                                                        <div className="col-6">
                                                        <label className="form-control-label px-3">Fecha: {servicio.fecha}</label> 
                                                        </div> 
                                                        <div className="col-6">
                                                        <label className="form-control-label px-3">Estado: {servicio.estado}</label> 
                                                        </div> 

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-6">
                                                        <label className="form-control-label px-3">Cliente: {servicio.horario}</label> 
                                                        </div> 
                                                        <div className="col-6">
                                                        <label className="form-control-label px-3">Direccion: {servicio.direccion}</label> 
                                                        </div> 

                                                    </div>
                                                </div>
                                                  
                                                <div className="col-4">
                                                    <div className="row">
                                                        <div className="col-12">
                                                        <button  className="btn btn-warning" 
                                                            data-bs-toggle='modal' data-bs-target='#mimodal' onClick={() => cambiarModal(servicio)}>
                                                                <FaInfoCircle className='bx bx-star ms-1' ></FaInfoCircle> Ver Solicitud
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            
                                           
                                        </div>
                                        
                                       
                                    </div>
                                </div>
                            </div>


                        
                        

                        
                        <br />
                        </div>
                            
                    )}  


                    <div id='mimodal' className='modal modal-lg fade ' aria-hidden='true' >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Servicio N°: {modal[7]}</h5>
                                <button type="button" className="close"  data-bs-toggle='modal' data-bs-target='#mimodal' aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="row  text-start">
                                            <div className="form-group col-sm-6 flex-column d-flex"> 
                                                <label className="form-control-label px-3">Profesional:</label> 
                                                <label className="form-control-label px-3">{modal[11]}</label>
                                                
                                            </div>
                                            <div className="form-group col-sm-6 flex-column d-flex"> 
                                            <label className="form-control-label px-3">Cliente:</label> 
                                            <label className="form-control-label px-3">{modal[10]}</label>
                                            
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row text-start">
                                            <div className="form-group col-sm-6 flex-column d-flex">
                                                <label className="form-control-label px-3">Dirección:</label>
                                                <label className="form-control-label px-3">{modal[1]}</label>
                                                </div>
                                            <div className="form-group col-sm-6 flex-column d-flex"> 
                                            <label className="form-control-label px-3">Estado:</label> 
                                            <label className="form-control-label px-3">{modal[2]}</label>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row  text-start">
                                            <div className="form-group col-sm-6 flex-column d-flex">
                                                <label className="form-control-label px-3">Fecha:</label>
                                                <label className="form-control-label px-3">{modal[3]}</label>
                                                </div>
                                            <div className="form-group col-sm-6 flex-column d-flex"> 
                                            <label className="form-control-label px-3">Horario:</label> 
                                            <label className="form-control-label px-3">{modal[4]}</label>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row text-start">
                                            <div className="form-group col-sm-12 flex-column d-flex">
                                                <label className="form-control-label px-3">Descripción:</label>
                                                <label className="form-control-label px-3">{modal[0]}</label>
                                                
                                            </div>
                                            
                                            
                                            
                                        </div>
                                    </div>    
                                    <div className="col-6">
                                        <div className="row justify-content-between text-left">
                                                                                    
                                            <div className="container border" style={{height:"200px"}}>

                                            
                                            {michat=== []? <div className="spinner-border text-info" role="status"></div>: null}    

                                            <ul className="list-group" style={{overflowY:"scroll",height: "200px"}}>
                                            {michat && michat.map(chat =>
                                                
                                                
                                                <span>{chat.tipo=== "cliente"? <li className="list-group-item list-group-item-primary text-end">{chat.mensaje}</li>: <li className="list-group-item list-group-item-info text-start">{chat.mensaje}</li>}   </span>
                                            
                                            )}
                                                

                                            </ul>   
                                            

                                            </div>
                                        </div>   
                                        <br />
                                        <div className="row justify-content-between text-left">
                                        <div className="input-group">
                                        <button className="input-group-text btn btn-success" data-bs-toggle='modal' data-bs-target='#mimodal' onClick={() => guardarMensaje(modal[7],mensaje)}><FaPaperPlane className='bx bx-star ms-1' ></FaPaperPlane>   </button>
                                        <textarea className="form-control" aria-label="With textarea" onChange={(e)=>setMensaje(e.target.value)} value={mensaje}></textarea>
                                        </div>
                                        </div>   
                                                
                                            
                                            
                                    </div>    
                                    
                                </div>
                            </div>
                            <div className="modal-footer">
                                {modal[2]=== "Solicitado"? 
                                <div className="row" style={{width:"100%"}}>
                                    <div className="col-6">
                                        <button type="button" className="btn btn-danger" data-bs-toggle='modal' data-bs-target='#mimodal' onClick={() => { if (window.confirm('Esta seguro que desea cancelar esta solicitud?')) cambiarEstado(modal[7],"Cancelado") } }>Cancelar Solicitud</button>
                                    </div>
                                    <div className="col-6">
                                        <button type="button" className="btn btn-secondary"  data-bs-toggle='modal' data-bs-target='#mimodal'>Cerrar</button>
                                    </div>
                                </div>
                                : null}
                                {modal[2]=== "Propuesto"? 
                                <div className="row" style={{width:"100%"}}>
                                    <div className="col-6">
                                        <button type="button" className="btn btn-danger" data-bs-toggle='modal' data-bs-target='#mimodal' onClick={() => pedirMotivo(modal[7])}>Reprogramar</button>
                                    </div>
                                    <div className="col-6">
                                        <button type="button" className="btn btn-success"  data-bs-toggle='modal' data-bs-target='#mimodal' onClick={() => cambiarEstado(modal[7],"Coordinado")}>Aceptar</button>
                                    </div>
                                </div>
                                : null}     
                                
                                
                            </div>
                            </div>
                        </div>

                        
                            
                    </div>    

            </div>


        
    )

    }


    
export default ServiciosSolicitadosC



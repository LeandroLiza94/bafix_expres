import React from 'react';
//import { setIdProfesional } from '../axios_helper';
//import {  Navigate } from 'react-router-dom';
import  {useEffect, useState} from 'react';
//import Salir from './Salir';
//import Navegador from './Navegador';
import { request } from '../axios_helper';
//import Swal from 'sweetalert2';
//import withReactContent from 'sweetalert2-react-content';
//import { show_alert } from '../function';
import { FaPaperPlane,FaInfoCircle } from "react-icons/fa";
//import { FaStar } from "react-icons/fa";
import { Rating } from 'react-simple-star-rating'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

const ServiciosRealizadosC =()=>{

    const [preferenceId, setPreferenceId] = useState(null);
    initMercadoPago('TEST-63575a0c-acc3-45e5-882a-676f7b43c9e5');

    const [servicios, setServicios] = React.useState('');

    const [modal, setModal] = React.useState('');

    //const [chatsServicio, setchatsServicio] = React.useState('');

    const [michat, setmichat] = React.useState([]);

    const [mensaje, setMensaje] = React.useState('');

    const [rating, setRating] = React.useState(0);

    const [opinion, setOpinion] = React.useState('');
    

    const handleRating = (rate) => {
        setRating(rate)

    }

    
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
    function guardarEncuesta(idServicio,idPro,idCli) {
        request(
            "POST",
            "/GuardarEncuesta",
            {
                idServicio:idServicio,
                idCliente:idCli,
                idProfesional:idPro,
                calificacion:rating,
                comentario:opinion   
           }
        ).then((response) =>{
            console.log(response.data);
            //setServicios(response.data) ; 
            //window.location.reload()
            cambiarEstado(idServicio,"Finalizado")
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
            
            traerListado();
            window.location.reload()
        }).catch((error) => {
            console.log(error);
        });
    
    }

    

    const crearPreferencia = ()=>{

        request(
            "POST",
            "/crearPreferencia",
            {
               description: "Servicio plomeria",
               price:7100,
               quantity:1,
               currency_id: "ARS"
            }
           
        ).then((response) =>{
            //console.log(response.data);
            window.location.href =response.data
            
         
            
        }).catch((error) => {
            console.log(error);
        });
    }

    

    const botonPagar =  () =>{
        const id =  crearPreferencia();
        if(id){
            setPreferenceId(id);
            cambiarEstado(modal[7],'Encuestar');

        }
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
        array.push(servicio.precio); 
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
               estado:"Realizado"
            }
           
        ).then((response) =>{
            //console.log(response.data);
            setServicios(response.data) ; 
            
        }).catch((error) => {
            console.log(error);
        });
        
    }
    return ( 
        
            <div className="row " >
                <h3>Servicios Realizados</h3>              
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
                                                            data-bs-toggle='modal' data-bs-target='#mimodal3' onClick={() => cambiarModal(servicio)}>
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


                    <div id='mimodal3' className='modal modal-lg fade ' aria-hidden='true'>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Servicio N°: {modal[7]}</h5>
                                <button type="button" className="close"  data-bs-toggle='modal' data-bs-target='#mimodal3' aria-label="Close">
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
                                        <button className="input-group-text btn btn-success" data-bs-toggle='modal' data-bs-target='#mimodal3' onClick={() => guardarMensaje(modal[7],mensaje)}><FaPaperPlane className='bx bx-star ms-1' ></FaPaperPlane>   </button>
                                        <textarea className="form-control" aria-label="With textarea" onChange={(e)=>setMensaje(e.target.value)} value={mensaje}></textarea>
                                        </div>
                                        </div>   
                                                
                                            
                                            
                                    </div>    
                                    
                                </div>
                                <hr />
                                {modal[2]=== "Encuestar"? 
                                <div className="row">
                                    <h5 className="text-start">Le pedimos su opinión del servicio brindado:</h5>
                                    <div className="col-8">
                                    <p className="text-start">Opinión:</p>
                                    <textarea className="form-control" aria-label="With textarea" onChange={(e)=>setOpinion(e.target.value)} value={opinion} ></textarea>
                                        
                                    </div>

                                    <div className="col-4">
                                    <p className="text-start">Calificación:</p>
                                    <Rating  onClick={handleRating}/>
                                    </div>

                                </div>
                                : null}
                                
                            </div>
                            <div className="modal-footer">

                            {modal[2]=== "Realizado"? 
                                <div className="row" style={{width:"100%"}}>
                                    <div className="col-6">
                                    <button type="button" className="btn btn-success" data-bs-toggle='modal' data-bs-target='#mimodal' onClick={() => botonPagar() }>Pagar servicio</button>
                                         {preferenceId && <Wallet initialization={ preferenceId } />}
                                    </div>
                                    <div className="col-6">
                                        <button type="button" className="btn btn-success"  data-bs-toggle='modal' data-bs-target='#mimodal3' onClick={() => cambiarEstado(modal[7],"Encuestar")}>Aceptar</button>
                                    </div>
                                </div>
                            : null}
                                
                            {modal[2]=== "Encuestar"? 
                                <div className="row" style={{width:"100%"}}>
                                    <div className="col-6">
                                        
                                    </div>
                                    <div className="col-6">
                                        <button type="button" className="btn btn-success"  data-bs-toggle='modal' data-bs-target='#mimodal3' onClick={() => guardarEncuesta(modal[7],modal[6],modal[5])}>Aceptar</button>
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

export default ServiciosRealizadosC
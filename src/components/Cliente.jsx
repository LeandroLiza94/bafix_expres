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

const ClienteCreado =()=>{

    const [cliente,setCliente]= React.useState('');
    const [id,setId]= useState('');
    const [nombre,setNombre]= useState('');
    const [apellido,setApellido]= useState('');
    const [dni,setDni]= useState('');
    const [mail,setMail]= useState('');
    const [telefono,setTelefono]= useState('');
    const [direccion,setDireccion]= useState('');
    const [operacion,setOperacion]= useState(1);
    const [titulo,setTitulo]= useState('');

    useEffect( ()=>{
        getCliente();
    },[]);


    const getCliente = () => {
        //console.log(getIdCliente);
        if (cliente === '') {
            request(
                "POST",
                "/Cliente",
                {
                   id:1
                }
            ).then((response) => {
                setCliente(response.data) ; 

            }).catch((error) => {
                console.log(error);
            });
        } else {
            Swal.fire('Debes cargar tus datos', 'presiona el boton Crear cliente', 'success');
        };
    }

    const openModal = (op, id, nombre, apellido, dni, mail, telefono, direccion) =>{
        setNombre('');
        setApellido('');
        setDni('');
        setMail('');
        setTelefono('');
        setDireccion('');
        setOperacion(op);
        if(op === 1){
            setTitulo('Registrar Cliente');
        }
        else if(op === 2){
            setTitulo('Editar Cliente');
            setId(id);
            setNombre(nombre);
            setApellido(apellido);
            setDni(dni);
            setMail(mail);
            setTelefono(telefono);
            setDireccion(direccion);
        }
        window.setTimeout(function(){
            document.getElementById('nombre').focus();
        },500);
    }

    const validar = ()=>{
        var parametros;
        var metodo;
        var url;

        if(nombre.trim() === ''){
            show_alert('Escribe tu nombre', 'warning');
        }
        else if(apellido.trim === ''){
            show_alert('Escribe tu apellido','warning');
        }
        else if(dni.trim === ''){
            show_alert('Escribe tu dni','warning');
        }
              else if(mail.trim === ''){
            show_alert('Escribe tu mail','warning');
        }
        else if(telefono.trim === ''){
            show_alert('Escribe tu telefono','warning');
        }
        else if(direccion.trim === ''){
            show_alert('Escribe tu direccion','warning');
        }
        else{
            if(operacion === 1){
                parametros = {nombre:nombre.trim(), apellido:apellido.trim(), dni:dni.trim(), mail:mail.trim(), telefono:telefono.trim(), direccion:direccion.trim()};
                metodo = 'POST';
                url = '/ClienteAgregar';    
            }
            else{
                parametros ={nombre:nombre.trim(), apellido:apellido.trim(), dni:dni.trim(), mail:mail.trim(), telefono:telefono.trim(), direccion:direccion.trim()};
                metodo = 'PUT' ;
                url = '/ClienteActualizar';   
            }

            enviarSolicitud(metodo, url, parametros);
        }
    }

    const enviarSolicitud = (metodo, url, parametros) =>{
        request(`${metodo}`,`${url}`,{
            nombre: parametros.nombre,
            apellido: parametros.apellido,
            dni: parametros.dni,
            mail: parametros.mail,
            telefono: parametros.telefono,
            direccion: parametros.direccion
        }).then((response) =>{
            let usuario
        }).catch((error) => {
            console.log(error);
        });
        

    }
    return ( 
        <div className="App">
            <div className="container-fluid" >
            
                <div className="row mt-3">
               
                <div className='col-12 '>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Id: {cliente.idCliente}</li>
                        <li className="list-group-item">Nombre: {cliente.nombre}</li>
                        <li className="list-group-item">Apellido: {cliente.apellido}</li>
                        <li className="list-group-item">Mail: {cliente.mail}</li>
                        <li className="list-group-item">Telefono: {cliente.telefono}</li>
                        <li className="list-group-item">Dni: {cliente.dni}</li>
                        <li className="list-group-item">Direccion: {cliente.direccion}</li>
                        <button onClick={() => openModal(2, id, nombre, apellido, dni,  mail, telefono, direccion)} className="btn btn-warning" 
                        data-bs-toggle='modal' data-bs-target='#modalProducts'>
                            <i className="fa-solid fa-edit"></i>Editar datos
                        </button>
                    </ul>
                    </div>
                    
                    <div id='modalProducts' className='modal fade' aria-hidden='true'>
                        <div className='modal-dialog'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <label className="h5">{titulo}</label>
                                    <button type='button' className='btn-close' data-bs-dismiss='modal' ariel-label='Close'></button>
                                </div>
                            </div>
                        </div>
                        <div className='modal-body'>
                            <input type="hidden" id='id' />
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type="text" id='nombre' className='form-control' placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type="text" id='apellido' className='form-control' placeholder='Apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} />
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type="text" id='dni' className='form-control' placeholder='DNI' value={dni} onChange={(e) => setDni(e.target.value)} />
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type="text" id='mail' className='form-control' placeholder='Mail' value={mail} onChange={(e) => setMail(e.target.value)} />
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type="text" id='telefono' className='form-control' placeholder='Telefono' value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type="text" id='direccion' className='form-control' placeholder='Direccion' value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                            </div>
                            <div className='d-grid col-6 mx-auto'>
                                <button onClick={() => validar()} className='btn btn-success'>
                                    <i className='fa-solid fa-floppy-disk'></i> Guardar
                                </button>
                            </div>
                            <div className='modal-footer'>
                                <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Cerrar</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>


        </div>
    )

    }

export default ClienteCreado
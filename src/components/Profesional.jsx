import  React,{useEffect, useState} from 'react';
import Salir from './Salir';
import Navegador from './Navegador';
import { request, getIdProfesional, setIdProfesional } from '../axios_helper';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alert } from '../function';

const ProfesionalCreado =()=>{

    const [profesional,setProfesional]= useState([]);
    const [id,setId]= useState('');
    const [nombre,setNombre]= useState('');
    const [apellido,setApellido]= useState('');
    const [dni,setDni]= useState('');
    const [experiencia,setExperiencia]= useState('');
    const [foto,setFoto]= useState('');
    const [mail,setMail]= useState('');
    const [telefono,setTelefono]= useState('');
    const [ubicacion,setUbicacion]= useState('');
    const [operacion,setOperacion]= useState(1);
    const [titulo,setTitulo]= useState('');

    useEffect( ()=>{
        getProfesional();
    },[]);


    const getProfesional = () => {
        let idPro = getIdProfesional();
        if ( idPro !== null) {
            request(
                "GET",
                "/Profesionales/" + idPro,
                {}
            ).then((response) => {
                let resArray = Object.values(response.data);
                setProfesional(resArray)
                setId(resArray[0]);
                setNombre(resArray[1]);
                setApellido(resArray[2]);
                setDni(resArray[3]);
                setExperiencia(resArray[4]);
                setFoto(resArray[5]);
                setMail(resArray[6]);
                setTelefono(resArray[7]);
                setUbicacion(resArray[8]);

            })
        } else {
            Swal.fire('Debes cargar tus datos', 'presiona el boton Crear profesinal', 'success');
        };
    }

    const openModal = (op, id, nombre, apellido, dni, experiencia, foto, mail, telefono, ubicacion) =>{
        setNombre('');
        setApellido('');
        setDni('');
        setExperiencia('');
        setFoto('');
        setMail('');
        setTelefono('');
        setUbicacion('');
        setOperacion(op);
        if(op === 1){
            setTitulo('Registrar profesional');
        }
        else if(op === 2){
            setTitulo('Editar profesional');
            setId(id);
            setNombre(nombre);
            setApellido(apellido);
            setDni(dni);
            setExperiencia(experiencia);
            setFoto(foto);
            setMail(mail);
            setTelefono(telefono);
            setUbicacion(ubicacion);
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
        else if(experiencia.trim === ''){
            show_alert('Escribe tu experiencia','warning');
        }
        else if(foto.trim === ''){
            show_alert('Sube tu foto','warning');
        }
        else if(mail.trim === ''){
            show_alert('Escribe tu mail','warning');
        }
        else if(telefono.trim === ''){
            show_alert('Escribe tu telefono','warning');
        }
        else if(ubicacion.trim === ''){
            show_alert('Escribe tu ubicacion','warning');
        }
        else{
            if(operacion === 1){
                parametros = {nombre:nombre.trim(), apellido:apellido.trim(), dni:dni.trim(), experiencia:experiencia.trim(), foto:foto.trim(), mail:mail.trim(), telefono:telefono.trim(), ubicacion:ubicacion.trim()};
                metodo = 'POST';
                url = '/ProfesionalAgregar';    
            }
            else{
                parametros ={nombre:nombre.trim(), apellido:apellido.trim(), dni:dni.trim(), experiencia:experiencia.trim(), foto:foto.trim(), mail:mail.trim(), telefono:telefono.trim(), ubicacion:ubicacion.trim()};
                metodo = 'PUT' ;
                url = '/ProfesionalActualizar';   
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
            foto: parametros.foto,
            experiencia: parametros.experiencia,
            ubicacion: parametros.ubicacion
        }).then((response) =>{
            setIdProfesional(response.data.idProfesional);
            let nombre = "Bienvenido " +response.data.nombre;
            let icono = "success";
            //show_alert(nombre, icono);
            Swal.fire('Profesional creado', nombre,'success');
                if(id !== null){
                    document.getElementById('btnCerrar').click();
                    getProfesional();
                }
            
        })
        .catch(function(error){
            show_alert('Error en la solicitud', 'error');
            console.log(error);
        })

    }
    return ( 
        <div className="App">
            <div className="container-fluid" >
            
                <div className="row mt-3">
                <Salir/>
                <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Id: {profesional[0]}</li>
                        <li className="list-group-item">Nombre: {profesional[1]}</li>
                        <li className="list-group-item">Apellido: {profesional[2]}</li>
                        <li className="list-group-item">Mail: {profesional[3]}</li>
                        <li className="list-group-item">Foto:{profesional[4]}</li>
                        <li className="list-group-item">Telefono: {profesional[5]}</li>
                        <li className="list-group-item">Experiencia: {profesional[6]}</li>
                        <li className="list-group-item">Dni: {profesional[7]}</li>
                        <li className="list-group-item">Ubicacion: {profesional[8]}</li>
                        <button onClick={() => openModal(2, id, nombre, apellido, dni, experiencia, foto, mail, telefono, ubicacion)} className="btn btn-warning" 
                        data-bs-toggle='modal' data-bs-target='#modalProducts'>
                            <i className="fa-solid fa-edit"></i>Editar datos
                        </button>
                    </ul>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-4 offset-md-4">
                            <div className="d-grid mx-auto">
                                <button onClick={() => openModal(1)} className="btn btn-dark" data-bs-toggle='modal' data-bs-target='#modalProducts'>
                                    <i className='fa-solid fa-circle-plus'></i>Crear profesional
                                </button>   
                            </div>
                        </div>
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
                            <div className='row'>
                                <div className='col-6'>
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
                                <input type="text" id='experiencia' className='form-control' placeholder='Experiencia' value={experiencia} onChange={(e) => setExperiencia(e.target.value)} />
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type="text" id='foto' className='form-control' placeholder='Foto' value={foto} onChange={(e) => setFoto(e.target.value)} />
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
                                <input type="text" id='ubicacion' className='form-control' placeholder='Ubicacion' value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} />
                            </div>
                                </div>
                      
                            </div>
                            <div className='row'>
                            <div className='d-grid col-6 mx-auto'>
                                <button onClick={() => validar()} className='btn btn-success'>
                                    <i className='fa-solid fa-floppy-disk'></i> Guardar
                                </button>
                            </div>
                            </div>

                            <div className='modal-footer'>
                                <button type='button' id='btnCerrar' className='btn btn-secondary' data-bs-dismiss='modal'>Cerrar</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>


        </div>
    )

    }

export default ProfesionalCreado
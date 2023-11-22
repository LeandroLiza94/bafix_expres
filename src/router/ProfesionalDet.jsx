import React from "react"
import  '../assetss/css/Inicio.css';
import Navegador from '../components/Navegador';
import { FaStar } from "react-icons/fa";
import { request} from '../axios_helper';
import  '../assetss/css/Inicio.css';
import { useParams  } from 'react-router-dom'
import { Link  } from 'react-router-dom';
import { useEffect } from 'react';

class ProfesionalDet extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          listaPro: []
        }
      }

    
    /*componentDidMount(){
        request(
            "GET",
            "/Profesionales",
            {
               
            }
           
        ).then((response) =>{
            console.log(response.data);
            this.setState({listaPro: response.data})  
        }).catch((error) => {
            console.log(error);
        });
    }*/


        render(){
            
            return(   <React.Fragment>
                <Navegador />
                <Component></Component>
            </React.Fragment>)

        }

        

}

export default ProfesionalDet;


const Component = () =>{
    const {idProfesional} = useParams();

    const [profesional, setProfesional] = React.useState('');

    const [promedio, setPromedio] = React.useState('');

    const [encuestas, setEncuestas] = React.useState('');

    const style = {  fontSize: "0.5em" }
    const style2 = { textAlign: 'left'}

    useEffect(()=>{

        if (profesional==='') {
           traerDatos();
       }
       
   }, [profesional])
    
   function traerDatos() {
    request(
        "POST",
        "/Profesional",
        {
           id:idProfesional
        }
       
    ).then((response) =>{
        //console.log(response);
        setProfesional(response.data) ; 
    }).catch((error) => {
        console.log(error);
    });

    request(
        "POST",
        "/PromedioProfesional",
        {
           id:idProfesional
        }
       
    ).then((response) =>{
        //console.log(response.data);
        setPromedio(response.data) ; 
    }).catch((error) => {
        console.log(error);
    });

    request(
        "POST",
        "/EncuestasProfesional",
        {
           id:idProfesional
        }
       
    ).then((response) =>{
        console.log(response.data);
        setEncuestas(response.data) ; 
    }).catch((error) => {
        console.log(error);
    });
   }
    

    return (
        <React.Fragment>


        <div className="container rounded bg-white mt-5 mb-5 border">

            <div className="row">
                <div className="col-md-3 border-right border">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img className="rounded-circle mt-5" width="200px" src={profesional.foto} alt="Perfil"></img>
                        <div className="col-md-12">
                            <div className="ratings"> 
                            

                            {Math.floor(promedio) === 1? 
                                <div className="ratings"> 
                                <FaStar className='bx bx-star ms-1' ></FaStar> 
                            </div> : null }

                            {Math.floor(promedio) === 2? 
                                <div className="ratings"> 
                                <FaStar className='bx bx-star ms-1' ></FaStar> 
                                <FaStar className='bx bx-star ms-1' ></FaStar> 
                            </div> : null }

                            {Math.floor(promedio) === 3? 
                                <div className="ratings"> 
                                <FaStar className='bx bx-star ms-1' ></FaStar> 
                                <FaStar className='bx bx-star ms-1' ></FaStar> 
                                <FaStar className='bx bx-star ms-1' ></FaStar> 
                            </div> : null }


                            {Math.floor(promedio) === 4? 
                                <div className="ratings"> 
                                <FaStar className='bx bx-star ms-1' ></FaStar> 
                                <FaStar className='bx bx-star ms-1' ></FaStar> 
                                <FaStar className='bx bx-star ms-1' ></FaStar> 
                                <FaStar className='bx bx-star ms-1' ></FaStar> 
                            </div> : null }


                            {Math.floor(promedio) === 5? 
                                <div className="ratings"> 
                                <FaStar className='bx bx-star ms-1' ></FaStar> 
                                <FaStar className='bx bx-star ms-1' ></FaStar>
                                <FaStar className='bx bx-star ms-1' ></FaStar> 
                                <FaStar className='bx bx-star ms-1' ></FaStar> 
                                <FaStar className='bx bx-star ms-1' ></FaStar>  
                            </div> : null }





                            </div> 
                        </div>
                        <div className="mt-5 text-center" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <button className="btn btn-primary profile-button" role="tab" type="button"> <Link to={"/Tarea"} className="nav-link">Solicitar Servicio</Link></button>
                
                </div>
                    </div>
                </div>
                <div className="col-md-5 border-right border">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Descripción Profesional</h4>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6 text-start">
                                <h5 >Nombre y Apellido:</h5>
                                <p>{profesional.nombre} {profesional.apellido}</p>
                            </div>
                            <div className="col-md-6 text-start">
                                <h5 >Profesión:</h5>
                                <p>{profesional.profesion}</p>
                            </div>
                        </div>
                        <br />
                        <div className="row mt-2 text-start">
                            <div className="col-md-6">
                                <h5 >Ubicación:</h5>
                                <p>{profesional.ubicacion}</p>
                            </div>
                            <div className="col-md-6 text-start">
                                <h5 >E-mail:</h5>
                                <p>{profesional.mail}</p>
                            </div>
                        </div>
                        <br />
                        <div className="row mt-3">
                            
                            <div className="col-md-12 text-start">
                                <h5 >Experiencia:</h5>
                                <p>{profesional.experiencia}</p>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                </div>
                <div className="col-md-4 border">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center experience">
                            <h4>Opiniones</h4>
                            
                        </div>
                        
                        <ul className="list-group" style={{overflowY:"scroll",height: "350px"}}>
                            {encuestas && encuestas.map(encuesta =>             
                            
                            <li className="list-group-item list-group-item">
                            <div className="card "  >
                                
                                <div className="row g-0">
                                    
                                    <div className="col-12">

                                    
                                        
                                            <div className="card-body"  style={style2}>
                                            <div className="small-ratings">
                                            
                                            {Math.floor(encuesta.calificacion) === 1? 
                                            <div className='row'>
                                            <div className='col-6'>
                                            {encuesta.nombre }
                                            </div> 
                                            <div className='col-6'>
                                             <div className="ratings"> 
                                             <FaStar className='bx bx-star ms-1' style={style}></FaStar> 
                                            </div> 
                                            </div> 
                                            </div> : null }

                                            {Math.floor(encuesta.calificacion) === 2? 
                                            <div className='row'>
                                            <div className='col-6'>
                                            {encuesta.nombre }
                                            </div> 
                                            <div className='col-6'>
                                             <div className="ratings"> 
                                             <FaStar className='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar className='bx bx-star ms-1' style={style}></FaStar> 
                                            </div> 
                                            </div> 
                                            </div> : null }
                                            
                                            {Math.floor(encuesta.calificacion) === 3? 
                                            <div className='row'>
                                            <div className='col-6'>
                                            {encuesta.nombre }
                                            </div> 
                                            <div className='col-6'>
                                             <div className="ratings"> 
                                             <FaStar className='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar className='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar className='bx bx-star ms-1' style={style}></FaStar> 
                                            </div> 
                                            </div> 
                                            </div> : null }

                                            {Math.floor(encuesta.calificacion) === 4? 
                                            <div className='row'>
                                            <div className='col-6'>
                                            {encuesta.nombre }
                                            </div> 
                                            <div className='col-6'>
                                             <div className="ratings"> 
                                             <FaStar className='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar className='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar className='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar className='bx bx-star ms-1' style={style}></FaStar> 
                                            </div> 
                                            </div> 
                                            </div> : null }

                                            {Math.floor(encuesta.calificacion) === 5? 
                                            <div className='row'>
                                            <div className='col-6'>
                                            {encuesta.nombre }
                                            </div> 
                                            <div className='col-6'>
                                             <div className="ratings"> 
                                             <FaStar className='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar className='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar className='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar className='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar className='bx bx-star ms-1' style={style}></FaStar> 
                                            </div> 
                                            </div> 
                                            </div> : null }

                                            
                                            
                                            </div>
                                            
                                            
                                            
                                           
                                        </div>
                                        <div className="col-12 ">
                                        <p >
                                            {encuesta.comentario}
                                            </p>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            </li>
                               )}
                            </ul>                
                           
                    </div>
                </div>
            </div>
        </div>
        
        </React.Fragment>
        )

}
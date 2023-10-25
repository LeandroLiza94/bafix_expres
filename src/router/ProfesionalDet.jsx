import React, { useState } from "react"
import  '../assetss/css/Inicio.css';
import Navegador from '../components/Navegador';
import { FaStar } from "react-icons/fa";
import { request} from '../axios_helper';
import  '../assetss/css/Inicio.css';
import { useParams  } from 'react-router-dom'
import { Link,useNavigate  } from 'react-router-dom';

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

    return (
        <React.Fragment>


        <div class="container rounded bg-white mt-5 mb-5 border">

            <div class="row">
                <div class="col-md-3 border-right border">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img class="rounded-circle mt-5" width="150px" src={profesional.foto}></img>
                        <div class="col-md-12"><label class="labels">Puntaje</label>
                            <div class="ratings"> 
                            <span>4.0</span> <FaStar class='bx bx-star ms-1'></FaStar> 
                            </div> 
                        </div>
                        <div class="mt-5 text-center" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <button class="btn btn-primary profile-button" role="tab" type="button"> <Link to={"/Tarea"} className="nav-link">Solicitar Servicio</Link></button>
                
                </div>
                    </div>
                </div>
                <div class="col-md-5 border-right border">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="text-right">Descripción Profesional</h4>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <label class="labels">Nombre y Apellido</label>
                                <p>{profesional.nombre} {profesional.apellido}</p>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12">
                                <label class="labels">Profesión</label>
                                <p>{profesional.profesion}</p>
                            </div>
                            <div class="col-md-12">
                                <label class="labels">Ubicacion</label>
                                <p>{profesional.ubicacion}</p>
                            </div>
                            <div class="col-md-12"><label class="labels">Experiencia</label>
                                <p>{profesional.experiencia}</p>
                            </div>
                            
                           
                        </div>
                        
                        
                    </div>
                </div>
                <div class="col-md-4 border">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center experience">
                            <span>Opiniones</span>
                            
                        </div>
                        
                        <div className="row" key="">
                                            
                            <div className="card m-2"  >
                                
                                <div className="row g-0">
                                    
                                    <div className="col-8">
                                        <div className="card-body">
                                            <div class="small-ratings">
                                                <FaStar class="fa fa-star rating-color"></FaStar>
                                                <FaStar class="fa fa-star rating-color"></FaStar>
                                                <FaStar class="fa fa-star rating-color"></FaStar>
                                                <FaStar class="fa fa-star"></FaStar>
                                                <FaStar class="fa fa-star"></FaStar>
                                            </div>
                                            <p className="card-text">
                                                nombre persona
                                            </p>
                                            <p className="card-text">
                                                COMENTARIO DE LA ENCUESTA ALGO
                                            </p>
                                            
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                                             
                            </div>
                    </div>
                </div>
            </div>
        </div>
        
        </React.Fragment>
        )

}
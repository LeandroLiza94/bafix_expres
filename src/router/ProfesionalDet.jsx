import React from "react"
import  '../assetss/css/Inicio.css';
import Navegador from '../components/Navegador';
import { FaStar } from "react-icons/fa";
import { request} from '../axios_helper';
import  '../assetss/css/Inicio.css';
import { useParams  } from 'react-router-dom'
import { Link  } from 'react-router-dom';

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

    return (
        <React.Fragment>


        <div class="container rounded bg-white mt-5 mb-5 border">

            <div class="row">
                <div class="col-md-3 border-right border">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img class="rounded-circle mt-5" width="150px" src={profesional.foto} alt="Perfil"></img>
                        <div class="col-md-12">
                            <div class="ratings"> 
                            

                            {Math.floor(promedio) === 1? 
                                <div class="ratings"> 
                                <FaStar class='bx bx-star ms-1' ></FaStar> 
                            </div> : null }

                            {Math.floor(promedio) === 2? 
                                <div class="ratings"> 
                                <FaStar class='bx bx-star ms-1' ></FaStar> 
                                <FaStar class='bx bx-star ms-1' ></FaStar> 
                            </div> : null }

                            {Math.floor(promedio) === 3? 
                                <div class="ratings"> 
                                <FaStar class='bx bx-star ms-1' ></FaStar> 
                                <FaStar class='bx bx-star ms-1' ></FaStar> 
                                <FaStar class='bx bx-star ms-1' ></FaStar> 
                            </div> : null }


                            {Math.floor(promedio) === 4? 
                                <div class="ratings"> 
                                <FaStar class='bx bx-star ms-1' ></FaStar> 
                                <FaStar class='bx bx-star ms-1' ></FaStar> 
                                <FaStar class='bx bx-star ms-1' ></FaStar> 
                                <FaStar class='bx bx-star ms-1' ></FaStar> 
                            </div> : null }


                            {Math.floor(promedio) === 5? 
                                <div class="ratings"> 
                                <FaStar class='bx bx-star ms-1' ></FaStar> 
                                <FaStar class='bx bx-star ms-1' ></FaStar>
                                <FaStar class='bx bx-star ms-1' ></FaStar> 
                                <FaStar class='bx bx-star ms-1' ></FaStar> 
                                <FaStar class='bx bx-star ms-1' ></FaStar>  
                            </div> : null }





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
                            {encuestas && encuestas.map(encuesta =>             
                            
                            <div className="card m-2"  >
                                
                                <div className="row g-0">
                                    
                                    <div className="col-8">

                                    
                                        
                                            <div className="card-body"  style={style2}>
                                            <div class="small-ratings">
                                            
                                            {Math.floor(encuesta.calificacion) === 1? 
                                            <div className='row'>
                                            <div className='col-6'>
                                            {encuesta.nombre }
                                            </div> 
                                            <div className='col-6'>
                                             <div class="ratings"> 
                                             <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                            </div> 
                                            </div> 
                                            </div> : null }

                                            {Math.floor(encuesta.calificacion) === 2? 
                                            <div className='row'>
                                            <div className='col-6'>
                                            {encuesta.nombre }
                                            </div> 
                                            <div className='col-6'>
                                             <div class="ratings"> 
                                             <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                            </div> 
                                            </div> 
                                            </div> : null }
                                            
                                            {Math.floor(encuesta.calificacion) === 3? 
                                            <div className='row'>
                                            <div className='col-6'>
                                            {encuesta.nombre }
                                            </div> 
                                            <div className='col-6'>
                                             <div class="ratings"> 
                                             <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                            </div> 
                                            </div> 
                                            </div> : null }

                                            {Math.floor(encuesta.calificacion) === 4? 
                                            <div className='row'>
                                            <div className='col-6'>
                                            {encuesta.nombre }
                                            </div> 
                                            <div className='col-6'>
                                             <div class="ratings"> 
                                             <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                            </div> 
                                            </div> 
                                            </div> : null }

                                            {Math.floor(encuesta.calificacion) === 5? 
                                            <div className='row'>
                                            <div className='col-6'>
                                            {encuesta.nombre }
                                            </div> 
                                            <div className='col-6'>
                                             <div class="ratings"> 
                                             <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                             <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                            </div> 
                                            </div> 
                                            </div> : null }

                                            
                                            
                                            </div>
                                            
                                            <p className="card-text ">
                                            {encuesta.comentario}
                                            </p>
                                            
                                           
                                        </div>
                                        
                                       
                                    </div>
                                </div>
                            </div>
                               )}              
                            </div>
                    </div>
                </div>
            </div>
        </div>
        
        </React.Fragment>
        )

}
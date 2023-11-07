import React, { useState } from "react"
import  '../assetss/css/Inicio.css';
import Navegador from '../components/Navegador';
import { FaSearch } from "react-icons/fa";
import { request} from '../axios_helper';
import  '../assetss/css/Inicio.css';
import { useParams  } from 'react-router-dom'
import { Link,useNavigate  } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

class Buscar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          listaPro: []
        }
      }

    
    /*componentDidMount(){
        request(
            "GET",
            "/Encuestas",
            {
               
            }
           
        ).then((response) =>{
            console.log(response.data);
            //this.setState({listaPro: response.data})  
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

export default Buscar;



const Component = () =>{
    const {profesion} = useParams();
    //console.log(profesion);
    const [profesional, setProfesional] = React.useState('');

    const[queryNombre,setQueryNombre] =useState("");

    const[queryUbicacion,setQueryUbicacion] =useState("");


    const[queryBuscar,setQueryBuscar] =useState("");

    const style = {  fontSize: "0.5em" }

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/Buscar/${queryBuscar}`; 
      navigate(path);
    }

    
    request(
        "GET",
        "/Profesionales",
        {
           
        }
       
    ).then((response) =>{
        //console.log(response.data);
        setProfesional(response.data) ; 
    }).catch((error) => {
        console.log(error);
    });

    /*request(
        "POST",
        "/EncuestasProfesional",
        {
           id:1
        }
       
    ).then((response) =>{
        //console.log(response.data);
        //setProfesional(response.data) ; 
    }).catch((error) => {
        console.log(error);
    });
    
    request(
        "POST",
        "/TareasC",
        {
           id:1,
           estado:"solicitado"
        }
       
    ).then((response) =>{
        console.log(response.data);
        //setProfesional(response.data) ; 
    }).catch((error) => {
        console.log(error);
    });*/


    /*request(
        "POST",
        "/PromedioProfesional",
        {
           id:1
        }
       
    ).then((response) =>{
        console.log(response.data);
        //setProfesional(response.data) ; 
    }).catch((error) => {
        console.log(error);
    });*/
    return (
        <React.Fragment>
                <div className="container fadeIn">
                
                <br />
                <div className="row"   >
                        <div className="col-sm-2" >
                               
                        </div>
                        <div className="col-sm-8">
                        
                                <div className="input-group-sm mb-3">
                                <input type="text" className="form-control border border-secondary" placeholder="" aria-label="" aria-describedby="button-addon2" onChange={(e)=>setQueryBuscar(e.target.value)}></input>
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2"  onClick={routeChange}><FaSearch id="search-icon" />Buscar</button>
                                </div>

                        </div>
                        <div className="col-sm-2" ></div>
                </div>
                </div>
                <br />
                <br />
                <div className="container fadeIn border">
                        <div className="row"  >
                                <div className="col-3 border">
                                    
                        
                                <div className="form-floating mb-3">
                                <input type="text" className="form-control text-start" id="floatingNombre" placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1" onChange={(e)=>setQueryNombre(e.target.value)}></input>
                                <label htmlFor="floatingNombre">Nombre</label>
                                </div>
                                <div className="form-floating mb-3">
                                <input type="text" className="form-control text-start" id="floatingUbicacion" placeholder="Ubicacion" aria-label="Ubicacion" aria-describedby="basic-addon1" onChange={(e)=>setQueryUbicacion(e.target.value)}></input>
                                <label htmlFor="floatingUbicacion">Ubicacion</label>
                                </div>
                                <div className="form-floating mb-3">
                                <input type="text" className="form-control text-start" id="floatingPuntaje" placeholder="Puntaje" aria-label="Puntaje" aria-describedby="basic-addon1"></input>
                                <label htmlFor="floatingPuntaje">Puntaje</label>
                                </div>

                                </div>
                                <div className="col-9 border">
                                
                                {profesional === ''? <div className="spinner-border text-info" role="status"></div>: null }

                                <div className="d-flex">
                                    <div className="overflow-auto" >

                                    {profesional && profesional.filter((profesional) =>
                                        profesional.profesion.toLowerCase().includes(profesion.toLowerCase())&&
                                        (profesional.nombre+" "+profesional.apellido).toLowerCase().includes(queryNombre.toLowerCase())
                                        && profesional.ubicacion.toLowerCase().includes(queryUbicacion.toLowerCase())
                                        ).map(profesional =>
                                        
                                        <div className="row" key={profesional.idProfesional}>
                                            <Link to={{pathname: `/Profesional/${profesional.idProfesional}`}} className='link' target="_blank" rel="noopener noreferrer" >
                                            <div className="card m-2"  >
                                                
                                                <div className="row g-0">
                                                    <div className="col-4">
                                                        <img  src={profesional.foto} className="foto img-fluid rounded-start" alt="Perfil"/>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="card-body">
                                                            <h5 className="card-title">{profesional.nombre} {profesional.apellido}</h5>
                                                            <p className="card-text">
                                                                {profesional.profesion}
                                                            </p>
                                                            <p className="card-text">
                                                                {profesional.ubicacion}
                                                            </p>
                                                            
                                                            {Math.floor(profesional.telefono) === 1? 
                                                            <div class="ratings"> 
                                                            <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                                            </div> : null }

                                                            {Math.floor(profesional.telefono) === 2? 
                                                            <div class="ratings"> 
                                                            <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                                            <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                                            </div> : null }

                                                            {Math.floor(profesional.telefono) === 3? 
                                                            <div class="ratings"> 
                                                            <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                                            <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                                            <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                                            </div> : null }

                                                            {Math.floor(profesional.telefono) === 4? 
                                                            <div class="ratings"> 
                                                            <FaStar class='bx bx-star ms-1' style={style}></FaStar>
                                                            <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                                            <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                                            <FaStar class='bx bx-star ms-1' style={style}></FaStar>  
                                                            </div> : null }

                                                            {Math.floor(profesional.telefono) === 5? 
                                                            <div class="ratings"> 
                                                            <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                                            <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                                            <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                                            <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                                            <FaStar class='bx bx-star ms-1' style={style}></FaStar> 
                                                            </div> : null }

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </Link>   
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



import React from 'react'
import { FaSearch } from "react-icons/fa";
import Navegador from '../components/Navegador';
import { Link,useNavigate  } from 'react-router-dom';
import logo from '../assetss/img/logo.png';
import logobafix from '../assetss/img/bafix-logo.png';
import { useState } from "react";
import { request } from '../axios_helper';
import  '../assetss/css/Inicio.css';

class Inicio extends React.Component{

        render(){
            return(
                <React.Fragment>
                <Component></Component>
                
           
                </React.Fragment>
                );
            
        }


}

export default Inicio

const Testconsulta =()=>{

        /*request(
                "GET",
                "/Profesionales",
                {
                   
                }
               
            ).then((response) =>{
                    //console.log(response);
                
            }).catch((error) => {
                console.log(error);
            });*/

        /*request(
                "POST",
                "/Profesional",
                {
                   id:2
                }
               
            ).then((response) =>{
                    console.log(response);
                
            }).catch((error) => {
                console.log(error);
            });*/

            request(
                "POST",
                "/Cliente",
                {
                   id:2
                }
               
            ).then((response) =>{
                    console.log(response);
                
            }).catch((error) => {
                console.log(error);
            });



}

const Component = () => {
        let navigate = useNavigate();
        const [test, setTest] = useState('');
        /*const handleChange = (event) => {
                const value = event.target.value;
                setTest(value);
        };*/

        const[queryBuscar,setQueryBuscar] =useState("");
        const routeChange = () =>{ 
                let path = `/Buscar/${queryBuscar}`; 
                navigate(path);
        }
        /*const handlePress = e => {
                if(e.key === 'Enter') { 
                        let path = `Buscar/${test}`; 
                        navigate(path);
                }
        }*/

                return (
                <React.Fragment>
                <Navegador />
                        <div className="container fadeIn">
                        <br />
                        <div className="row" >
                        <div className="col-sm-12" >
                                        <img className='logo' src={logobafix} alt="" />
                                </div>
                        </div>
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
                        <div className="container fadeIn ">
                                <div className="row"  >
                                        <div className="col-3"><Link to={{pathname: `/Buscar/${"Gasista"}`}} className='link'> 
                                        <img src="https://gasista.net.ar/wp-content/uploads/2022/09/gasista-plomero-matriculado-buenos-aires-capital-federal-1-1024x683.jpg" className='foto' alt="Coding Beauty logo"></img> <p className="header">Gasista</p> 
                                        </Link></div>
                                        <div className="col-3"><Link to={{pathname: `/Buscar/${"Plomero"}`}} className='link'> 
                                        <img src="https://previews.123rf.com/images/kurhan/kurhan1611/kurhan161100461/65722590-plomero-profesional-que-hace-la-renovaci%C3%B3n-en-el-hogar-de-la-cocina.jpg" className='foto' alt="Coding Beauty logo"></img> <p className="header">Plomero</p> 
                                        </Link></div>
                                        <div className="col-3"><Link to={{pathname: `/Buscar/${"Cerrajero"}`}} className='link'> 
                                        <img src="https://www.electroparvigo.com/como-encontrar-a-un-buen-cerrajero_img85498t1.jpg" className='foto' alt="Coding Beauty logo"></img> <p className="header">Cerrajero</p> 
                                        </Link></div>
                                        <div className="col-3"><Link to={{pathname: `/Buscar/${"Albañil"}`}} className='link'> 
                                        <img src="https://cd1.distincion.eu/wp-content/uploads/2019/12/ropa-de-trabajo-protecciones-alba%C3%B1il-distincion-e1575369728738-200x186.jpg" className='foto' alt="Coding Beauty logo"></img> <p className="header">Albañil</p> 
                                        </Link></div>
                                </div>
                                <br />
                                <br />
                                <div className="row"  >
                                        <div className="col"><Link to={{pathname: `/Buscar/${"Electricista"}`}} className='link'> 
                                        <img src="https://image.jimcdn.com/app/cms/image/transf/none/path/sb00e8250327cd0a1/image/i4a413653d6352fc2/version/1604231609/funciones-de-un-electricista.png" className='foto' alt="Coding Beauty logo"></img> <p className="header">Electricista</p> 
                                        </Link></div>
                                        <div className="col"><Link to={{pathname: `/Buscar/${"Pintor"}`}} className='link'> 
                                        <img src="https://pinturashipopotamo.es/wp-content/uploads/2020/01/como-elegir-un-buen-pintor.jpg" className='foto' alt="Coding Beauty logo"></img> <p className="header">Pintor</p> 
                                        </Link></div>
                                        <div className="col"><Link to={{pathname: `/Buscar/${"Service Aire AC"}`}} className='link'> 
                                        <img src="https://static.wixstatic.com/media/c37115_5d7c76cd254f4ec2a10e9915969eb040~mv2.jpg/v1/fill/w_778,h_558,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/mecanico-tecnico-aire-acondicionado-masc.jpg" className='foto' alt="Coding Beauty logo"></img> <p className="header">Service Aire AC</p> 
                                        </Link></div>
                                        <div className="col"><Link to={{pathname: `/Buscar/${"Jardinero"}`}} className='link'> 
                                        <img src="https://www.diariodecuyo.com.ar/__export/1655020537819/sites/diariodecuyo/img/2022/06/12/jardin_3_crop1655020536923.jpg_24607264.jpg" className='foto' alt="Coding Beauty logo"></img> <p className="header">Jardinero</p> 
                                        </Link></div>
                                </div>
                                
                        </div>
                </React.Fragment>
                )

        
        
        
    }
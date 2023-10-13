<<<<<<< Updated upstream
import React from "react"
import  '../assetss/css/App.css';
import  '../assetss/css/Buscar.css';
import Navegador from '../components/Navegador';
import { useParams  } from 'react-router-dom'
import {Container,Row,Col,Button,Form} from 'react-bootstrap'
import { useState,useEffect } from "react";
import { useNavigate  } from 'react-router-dom';
import { redirect } from "react-router-dom";

class Buscar extends React.Component{

    
=======
import React, { useState } from "react"
import  '../assetss/css/Inicio.css';
import Navegador from '../components/Navegador';
import { FaSearch } from "react-icons/fa";
import { request} from '../axios_helper';
import  '../assetss/css/Inicio.css';
import { useParams  } from 'react-router-dom'
import { Link,useNavigate  } from 'react-router-dom';

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


>>>>>>> Stashed changes
        render(){
            
            return(   <React.Fragment>
                <Navegador />
            
<<<<<<< Updated upstream
                
                
                <div className="fadeIn first">
                  
                  
                  <Component></Component>
                  <Container>
                          <Row>
                                  <Col sm={2}>
                                          <div className='borde'>
                                          <Button>Filtro 1</Button>
                                          <br />
                                          <Button>Filtro 2</Button>
                                          </div>
                                  </Col> 
                                  <Col sm={10}>
                                          <div className='borde'>
                                          <List></List>
                                          </div>
                                  </Col> 
                          </Row>
                  </Container>
                        
                    
                </div>
=======
                <Component></Component>
>>>>>>> Stashed changes
            </React.Fragment>)

        }

        

}

export default Buscar;

<<<<<<< Updated upstream
const Component = () => {
  let navigate = useNavigate();
  const [test, setTest] = useState('');
  

  const handleChange = (event) => {
    const value = event.target.value;
    setTest(value);
  };

  const routeChange = () =>{ 
    let path = `Buscar/${test}`; 
    navigate(path,{replace: false}); 
    //redirect("/login");  
  }
  const handlePress = e => {
    if(e.key === 'Enter') { 
      let path = `Buscar/${test}`; 
      navigate(path);
    }
  }

  return (
  <React.Fragment>
    <Container className="mt-5 fadeIn">
    <Row   >
            <Col sm={2}></Col>
            <Col sm={8}>
            <Form className="d-flex">
            <Form.Control type="search" placeholder="Buscar" className="me-2" aria-label="Search" id="buscar" value={test} onChange={handleChange} onKeyPress={handlePress}/>
            <Button onClick={routeChange} >Buscar</Button>
            </Form>
            </Col>
            <Col sm={2}></Col>
    </Row>
    </Container>
    <br />     
  </React.Fragment>
  )

  
  
  
}

export function List() {
    const {especialidad} = useParams();
    const chemists = people.filter(person =>
      person.profession === especialidad
    );
    const cargarprofesionales = async() =>{
      const respuesta = await fetch('https://testbackend-9g7x.onrender.com/profesionales')
      const data = await respuesta.json()
      console.log(data)
    }
    useEffect(()=>{
      cargarprofesionales()
    },[])
    //console.log("asdad")
    const listItems = chemists.map(person =>
      <li>
        <Container className='card'>
          <Row>
            <Col sm={2}>
              <img
                src={getImageUrl(person)}
                alt={person.name}
              />
            </Col>
            <Col sm={10}>
              <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              conocido/a por {person.accomplishment}
              </p>  
            </Col>
        
          </Row>
         
        </Container>
        
      </li>
    );
    return <ul>{listItems}</ul>;
  }

  export function getImageUrl(person) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }

  export const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'matemática',
    accomplishment: 'los cálculos de vuelos espaciales',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'Plomero',
    accomplishment: 'el descubrimiento del agujero de ozono en el Ártico',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'físico',
    accomplishment: 'la teoría del electromagnetismo',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'químico',
    accomplishment: 'ser pionero en el uso de cortisona, esteroides y píldoras anticonceptivas',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrofísico',
    accomplishment: 'los cálculos de masa de estrellas enanas blancas',
    imageId: 'lrWQx8l'
  }];
=======


const Component = () =>{
    const {profesion} = useParams();
    //console.log(profesion);
    const [profesional, setProfesional] = React.useState('');

    const[queryNombre,setQueryNombre] =useState("");

    const[queryUbicacion,setQueryUbicacion] =useState("");


    const[queryBuscar,setQueryBuscar] =useState("");

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
                                                        <img  src={profesional.foto} className="foto img-fluid rounded-start" />
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
                                                            <p className="card-text">
                                                                <small className="text-muted">Puntaje todo</small>
                                                            </p>
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

>>>>>>> Stashed changes


import React from 'react'
import Navegador from '../components/Navegador';
import {Container,Row,Col,Button,Form} from 'react-bootstrap'
import { Link,useNavigate  } from 'react-router-dom';
import logo from '../assetss/img/logo.png';
import { useState } from "react";
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





const Component = () => {
        let navigate = useNavigate();
        const [test, setTest] = useState('');
        const handleChange = (event) => {
                const value = event.target.value;
                setTest(value);
        };

        const routeChange = () =>{ 
                let path = `Buscar/${test}`; 
                navigate(path);   
        }
        const handlePress = e => {
                if(e.key === 'Enter') { 
                        let path = `Buscar/${test}`; 
                        navigate(path);
                }
        }

        if (2==1) {
                return (
                        <React.Fragment>
                        <Navegador />
                        <Container>
                                <Row>
                                       <Col sm={3}>
                                               <div className='borde'>
                                                <Button>Servicios actuales</Button>
                                                <br />
                                                <Button>Servicios pendientes</Button>
                                               </div>
                                       </Col> 
                                       <Col sm={9}>
                                               <div className='borde'>

                                               </div>
                                       </Col> 
                                </Row>
                        </Container>
                        </React.Fragment>
                    )    
        }
        else{

                return (
                <React.Fragment>
                <Navegador />
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
                        <br />
                        <Container className="fadeIn">
                                <Row>
                                        <Col><Link to={{pathname: `/Buscar/${"Gasista"}`}} className='link'> 
                                        <img src={logo} className='picture' alt="Coding Beauty logo"></img> <p className="header">Gasista</p> 
                                        </Link></Col>
                                        <Col><Link to={{pathname: `/Buscar/${"Plomero"}`}} className='link'> 
                                        <img src={logo} className='picture' alt="Coding Beauty logo"></img> <p className="header">Plomero</p> 
                                        </Link></Col>
                                        <Col><Link to={{pathname: `/Buscar/${"Cerrajero"}`}} className='link'> 
                                        <img src={logo} className='picture' alt="Coding Beauty logo"></img> <p className="header">Cerrajero</p> 
                                        </Link></Col>
                                        <Col><Link to={{pathname: `/Buscar/${"Albañil"}`}} className='link'> 
                                        <img src={logo} className='picture' alt="Coding Beauty logo"></img> <p className="header">Albañil</p> 
                                        </Link></Col>
                                </Row>
                                <br />
                                <br />
                                <Row>
                                        <Col><Link to={{pathname: `/Buscar/${"Electricista"}`}} className='link'> 
                                        <img src={logo} className='picture' alt="Coding Beauty logo"></img> <p className="header">Electricista</p> 
                                        </Link></Col>
                                        <Col><Link to={{pathname: `/Buscar/${"Pintor"}`}} className='link'> 
                                        <img src={logo} className='picture' alt="Coding Beauty logo"></img> <p className="header">Pintor</p> 
                                        </Link></Col>
                                        <Col><Link to={{pathname: `/Buscar/${"Service Aire AC"}`}} className='link'> 
                                        <img src={logo} className='picture' alt="Coding Beauty logo"></img> <p className="header">Service Aire AC</p> 
                                        </Link></Col>
                                        <Col><Link to={{pathname: `/Buscar/${"Jardinero"}`}} className='link'> 
                                        <img src={logo} className='picture' alt="Coding Beauty logo"></img> <p className="header">Jardinero</p> 
                                        </Link></Col>
                                </Row>
                                
                        </Container>
                </React.Fragment>
                )

        }
        
        
    }
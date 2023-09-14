import React from "react"
import  '../assetss/css/App.css';
import  '../assetss/css/Buscar.css';
import Navegador from '../components/Navegador';
import { useParams  } from 'react-router-dom'
import {Container,Row,Col,Button,Form} from 'react-bootstrap'
import { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import { redirect } from "react-router-dom";

class Buscar extends React.Component{

    
        render(){
            
            return(   <React.Fragment>
                <Navegador />
            
                
                
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
            </React.Fragment>)

        }

        

}

export default Buscar;

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
    profession: 'químico',
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
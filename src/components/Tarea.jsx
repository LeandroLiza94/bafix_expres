import Navegador from '../components/Navegador';
import * as React from 'react';
import  '../assetss/css/index.css';
import { request, setAuthtoken } from '../axios_helper';
import {  Navigate } from 'react-router-dom';
//import { useForm } from 'react-hook-form';


class Tarea extends React.Component {


    constructor(props) {
        
        super(props);
        
        this.state = {
            componentToShow: "bienvenido",
            telefono: "",
            mail: "",
            direccion: "",
            horario: "",
            descripcion: "",
            apellidoC:"",
            direccionC:"",
            dniC:"",
            mailC:"",
            nombreC:"",
            telefonoC:"",
            apellidoP:"",
            nombreP:"",
        }
        
    }

    traerCliente=(e)=>{
        request(
        "POST",
        "/Cliente",
        {
           id:1
        }
    ).then((response) => {
        //setCliente(response.data) ; 
        //console.log(response.data);
        this.setState({["nombreC"]: response.data.nombre})
        this.setState({["apellidoC"]: response.data.apellido})
        this.setState({["direccionC"]: response.data.direccion})
        this.setState({["dniC"]: response.data.dni})
        this.setState({["mailC"]: response.data.mail})
        this.setState({["telefonoC"]: response.data.telefono})
       

    }).catch((error) => {
        console.log(error);
    });

    request(
        "GET",
        "/Profesionales/" + "1",
        {}
    ).then((response) => {
        //console.log(response.data);
       
        this.setState({["nombreP"]: response.data.nombre})
        this.setState({["apellidoP"]: response.data.apellido})
       

    });



    
    };

    onChangeHandler = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    };

    
    onSubmitTarea = (e) => {
        e.preventDefault();
        alert ('Datos enviados exitosamente. Muchas gracias.');
        request(
            "POST",
            "/Tarea",
            {
                telefono: this.state.telefonoC,
                mail: this.state.mailC,
                direccion: this.state.direccionC,
                horario: this.state.horario,
                descripcion: this.state.descripcion,
            }
            
           
        ).then((response) =>{
                this.setState({componentToShow: "Enviado"})
            
            setAuthtoken(response.data.token);
        }).catch((error) => {
            this.setState({componentToShow: "enviado"})
        });
        


    }

    
    render(){
            
        return(   
            <div onLoad={this.traerCliente}>
                <Navegador />  
                {this.state.componentToShow === "Enviado" && <Navigate to="/" />}
                <form onSubmit={this.onSubmitTarea} className= "form" >
                   <center><fieldset className="fieldset-auto-width">
                    <legend>FORMULARIO DE SOLICITUD DE SERVICIO</legend>
                    <p>Nombre:</p>
                    <div className="flexbox">
                    <label className="form-control-label px-3"> {this.state.nombreC} {this.state.apellidoC}</label> 
                    </div>
                    <br></br>
                                     
                    <p>Nombre del profesional:</p>
                    <div className="flexbox">
                    <label className="form-control-label px-3"> {this.state.nombreP} {this.state.apellidoP}</label> 
                    </div>
                    <br></br>

                    <p>Teléfono:</p>
                    <div className="flexbox">
                    <input id="idtelefono" name="telefono" type="int" width="100%" size="40" placeholder="54 11 1234 5894" required onChange={this.onChangeHandler} value={this.state.telefonoC}/>
                    </div>
                    <br></br>

                    <p>Correo Electrónico:</p>
                    <div className="flexbox">
                    <input id="idmail" name="mail" type="email" width="100%" size="40" placeholder="nombre@mail.com" required onChange={this.onChangeHandler}  value={this.state.mailC}/>
                    </div>
		            <br></br>

                    <p>Dirección:</p>
                    <div className="flexbox">
                    <input id="iddireccion" name="direccion" type="direccion" width="100%" size="40" placeholder="Ingrese su dirección" required onChange={this.onChangeHandler}  value={this.state.direccionC}/>
                    </div>
                    <br></br>


                    <p>Preferencia horaria:</p>
                    <div className="flexbox">
                    <select defaultValue="" id ="idhorario" placeholder= "Ingrese su preferencia horaria" name="horario" required onChange={this.onChangeHandler} >
                      <option hidden value="">Seleccionar preferencia horaria</option>
                      <option>Mañana</option>
                      <option>Tarde</option>
                    </select>
                    </div>
                    <br></br>

                    <p>Descripción:</p>
                    <div className="flexbox"> 
                    <textarea id="descripcion" name="descripcion"  width="100%" cols="40" rows="2" placeholder="Describa el problema que presenta..." required onChange={this.onChangeHandler}></textarea>
                    </div> 

                    
                    <button type="submit" classname="btn btn-primary"><font color="green size=4">ENVIAR</font></button>
                    <button  type="reset" className="button button"><font color="red size=4">BORRAR</font></button>
                    
                    </fieldset></center>

                </form>


                
            </div>
        )

      }
    }

 

export default Tarea
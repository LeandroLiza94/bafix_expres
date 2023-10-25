import Navegador from '../components/Navegador';
import * as React from 'react';
import  '../assetss/css/index.css';
import { request, setAuthtoken } from '../axios_helper';
import {  Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';



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
            componentToShow: "",
        }
    }

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
                telefono: this.state.telefono,
                mail: this.state.mail,
                direccion: this.state.direccion,
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
            <div>
                <Navegador />  
                {this.state.componentToShow == "Enviado" && <Navigate to="/" />}
                <form onSubmit={this.onSubmitTarea} >
                   <center><fieldset class="fieldset-auto-width">
                    <legend>FORMULARIO DE SOLICITUD DE SERVICIO</legend>
                    <p>Nombre:</p>
                    <div class="flexbox">
                    <input id="idnombrecliente" name="nombrecliente" type="text" width="100%" size="40" placeholder="Nombre del cliente"/>
                    </div>
                    <br></br>
                                     
                    <p>Nombre del profesional:</p>
                    <div class="flexbox">
                    <input id="idnombreprof" name="nombreprof" type="text" width="100%" size="40" placeholder="Nombre del profesional"/>
                    </div>
                    <br></br>

                    <p>Teléfono:</p>
                    <div class="flexbox">
                    <input id="idtelefono" name="telefono" type="int" width="100%" size="40" placeholder="54 11 1234 5894" required onChange={this.onChangeHandler}/>
                    </div>
                    <br></br>

                    <p>Correo Electrónico:</p>
                    <div class="flexbox">
                    <input id="idmail" name="mail" type="email" width="100%" size="40" placeholder="nombre@mail.com" required onChange={this.onChangeHandler}/>
                    </div>
		            <br></br>

                    <p>Dirección:</p>
                    <div class="flexbox">
                    <input id="iddireccion" name="direccion" type="direccion" width="100%" size="40" placeholder="Ingrese su dirección" required onChange={this.onChangeHandler}/>
                    </div>
                    <br></br>


                    <p>Preferencia horaria:</p>
                    <div class="flexbox">
                    <select defaultValue="" id ="idhorario" placeholder= "Ingrese su preferencia horaria" name="horario" width="100%" required onChange={this.onChangeHandler} >
                      <option hidden value="">Seleccionar preferencia horaria</option>
                      <option>Mañana</option>
                      <option>Tarde</option>
                    </select>
                    </div>
                    <br></br>

                    <p>Descripción:</p>
                    <div class="flexbox"> 
                    <textarea id="descripcion" name="descripcion"  width="100%" cols="40" rows="20" placeholder="Describa el problema que presenta..." required onChange={this.onChangeHandler}></textarea>
                    </div> 
                    <br></br>	

                    <h2></h2>
                    <button type="submit" classname="btn btn-primary"><font color="green size=4">ENVIAR</font></button>
                    <button  type="reset" class="button button"><font color="red size=4">BORRAR</font></button>
                    <h2></h2>
                    <br></br>
                    </fieldset></center>

                </form>


                <h2></h2>
            </div>
        )

      }
    }

 

export default Tarea
import React from 'react';

import { request, setAuthtoken } from '../axios_helper';
import { Link, Navigate } from 'react-router-dom';
import Salir from './Salir';


class Profesional extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            componentToShow: "bienvenido",
            nombre: "",
            apellido: "",
            dni: "",
            mail: "",
            telefono: "",
            foto: "",
            experiencia: "",
            ubicacion: ""

        }
    }


    onChangeHandler = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    };

    onSubmitProfesional = (e) => {
        e.preventDefault();
        request(
            "POST",
            "/ProfesionalAgregar",
            {
                nombre: this.state.nombre,
                apellido: this.state.apellido,
                dni: this.state.dni,
                mail: this.state.mail,
                telefono: this.state.telefono,
                foto: this.state.foto,
                experiencia: this.state.experiencia,
                ubicacion: this.state.ubicacion
            }
           
        ).then((response) =>{
                this.setState({componentToShow: "bienvenido"})
            
            setAuthtoken(response.data.token);
        }).catch((error) => {
            this.setState({componentToShow: "bienvenido"})
        });
    }


    render(){
        return(
            <React.Fragment>
    

                <Salir/>
                
                <form onSubmit={this.onSubmitProfesional} >
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8 offset-md-3 border rounde p-4 mt-2 shadow'>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="nombre" placeholder="Nombre" name="nombre" onChange={this.onChangeHandler} />
                                </div>
                                <div className="mb-3">
                                    <label for="formGroupExampleInput2" className="form-label">Apellido</label>
                                    <input type="text" className="form-control" id="apellido" name="apellido"  onChange={this.onChangeHandler}  />
                                </div>
                                <div className="mb-3">
                                    <label for="formGroupExampleInput" className="form-label">DNI</label>
                                    <input type="text" className="form-control" id="documento" placeholder="Documento" name="dni" onChange={this.onChangeHandler} />
                                </div>
                                <div className="mb-3">
                                    <label for="formGroupExampleInput2" className="form-label">Mail</label>
                                    <input type="text" className="form-control" id="mail" placeholder="Mail" name="mail" onChange={this.onChangeHandler} />
                                </div>
                                <div className="mb-3">
                                    <label for="formGroupExampleInput" className="form-label">Telefono</label>
                                    <input type="text" className="form-control" id="telefono" placeholder="Telefono" name="telefono" onChange={this.onChangeHandler} />
                                </div>
                                <div className="mb-3">
                                    <label for="formGroupExampleInput2" className="form-label">Foto</label>
                                    <input type="text" className="form-control" id="foto" placeholder="Foto" name="foto" onChange={this.onChangeHandler} />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">Experiencia</span>
                                    <textarea className="form-control" aria-label="With textarea" name="experiencia" onChange={this.onChangeHandler}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label for="formGroupExampleInput2" className="form-label">Ubicacion</label>
                                    <input type="text" className="form-control" id="ubicacion" name="ubicacion" placeholder="Ubicacion" onChange={this.onChangeHandler} />
                                </div>
                                <button type="submit" className="btn btn-primary">Crear</button>
                            </div>
                        </div>
                    </div>
                </form>


            </React.Fragment>
        )
    }


}
export default Profesional
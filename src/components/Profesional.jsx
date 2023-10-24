import React from 'react';

import { request, setAuthtoken, setIdProfesional } from '../axios_helper';
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
           
        ).then((response) => {
            setIdProfesional(response.data.idProfesional);
            this.setState({ componentToShow: "profesionalCreado" })
        }).catch((error) => {
            this.setState({ componentToShow: "bienvenido" })
        });
    }


    render(){
        return(
            <React.Fragment>

                {this.state.componentToShow === "profesionalCreado" && <Navigate to="/ProfesionalCreado" />}
                <Salir/>
                <div>
                    
                <form onSubmit={this.onSubmitProfesional} >
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-15 offset-md-10 border rounde p-4 mt-2 shadow'>
                                <div className="mb-4">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="nombre" placeholder="Nombre" name="nombre" onChange={this.onChangeHandler} />
                                </div>
                                <div className="mb-4">
                                    <label for="formGroupExampleInput2" className="form-label">Apellido</label>
                                    <input type="text" className="form-control" id="apellido" placeholder="Apellido" name="apellido"  onChange={this.onChangeHandler}  />
                                </div>
                                <div className="mb-4">
                                    <label for="formGroupExampleInput" className="form-label">DNI</label>
                                    <br/>
                                    <input type="text" className="form-control" id="documento" placeholder="Documento" name="dni" onChange={this.onChangeHandler} />
                                </div>
                                <div className="mb-4">
                                    <label for="formGroupExampleInput2" className="form-label">Mail</label>
                                    <br/>
                                    <input type="text" className="form-control" id="mail" placeholder="Mail" name="mail" onChange={this.onChangeHandler} />
                                </div>
                                <div className="mb-4">
                                    <label for="formGroupExampleInput" className="form-label">Telefono</label>
                                    <input type="text" className="form-control" id="telefono" placeholder="Telefono" name="telefono" onChange={this.onChangeHandler} />
                                </div>
                                <div className="mb-4">
                                    <label for="formGroupExampleInput2" className="form-label">Foto</label>
                                    <br/>
                                    <input type="text" className="form-control" id="foto" placeholder="Foto" name="foto" onChange={this.onChangeHandler} />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">Experiencia</span>
                                    <textarea className="form-control" aria-label="With textarea" name="experiencia" onChange={this.onChangeHandler}></textarea>
                                </div>
                                <br/>
                                <div className="mb-4">
                                    <label for="formGroupExampleInput2" className="form-label">Ubicacion</label>
                                    <input type="text" className="form-control" id="ubicacion" name="ubicacion" placeholder="Ubicacion" onChange={this.onChangeHandler} />
                                </div>
                                <button type="submit" className="btn btn-primary">Crear</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


            </React.Fragment>
        )
    }


}
export default Profesional
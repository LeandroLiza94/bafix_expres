import Navegador from '../components/Navegador';
import * as React from 'react';
import classNames from 'classnames';
import {  Navigate } from 'react-router-dom';

import { request, setAuthtoken } from '../axios_helper';


class Registrarse extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      active: "login",
      login: "",
      password: "",
      esProfesional: false,
      componentToShow: "",
    }
  }

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  setProfesional = () => {
    this.setState({esProfesional:true})

  }



  onSubmitRegister = (e) =>{
            e.preventDefault();
            request(
              "POST",
              "/Registrarse",
              {
                login: this.state.login,
                password: this.state.password,
                esProfesional: this.state.esProfesional
              }
            ).then((response) =>{
            console.log('funciona!')
            setAuthtoken(response.data.token)
            this.setState({componentToShow: "prueba"})         
          });
  };

  render() {
    return (
      <div>
        <Navegador />
        {this.state.componentToShow === "prueba" && <Navigate to="/Ingresar" />}
        <form onSubmit={this.onSubmitRegister} >
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 offset-md-3 border rounde p-4 mt-2 shadow'>
                <div className="mb-1">
                  <label htmlFor="loginName" className="form-label">Usuario</label>
                  <input type="text" className="form-control" id="loginName" name='login' onChange={this.onChangeHandler} />
                </div>
                <div className="mb-1">
                  <label htmlFor="loginPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="loginPassword" name='password' onChange={this.onChangeHandler} />
                </div>
                <div className="mb-1 form-check">
                  <input type="checkbox" className="form-check-input" id="esProfesional" name='profesional' onChange={this.setProfesional} />
                  <label className="form-check-label" htmlFor="esProfesional" >Soy profesional</label>
                </div>
                <button type="submit" className="btn btn-primary">Registrar</button>
              </div>
            </div>
          </div>
        </form>

      </div>

    );
  };

}

export default Registrarse
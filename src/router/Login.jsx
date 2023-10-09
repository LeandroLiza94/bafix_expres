
import  '../assetss/css/Login.css';
import { Link, Navigate } from 'react-router-dom';
import logo from '../assetss/img/logo.png';
import Navegador from '../components/Navegador';
import * as React from 'react';


import { request, setAuthtoken } from '../axios_helper';


class Login extends React.Component{


    
    constructor(props) {
        super(props);
        this.state = {
            componentToShow: "bienvenido",
            login: "",
            password: "",
            //onLogin: props.onLogin
        }
    }




    onChangeHandler = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    };


    login =()=>{
        this.setState({componentToShow: "login"});
    }




    /*onSubmitLogin = (e) =>{
        this.state.onLogin(e, this.state.login, this.state.password);
    };*/



    onSubmitLogin = (e) => {
        e.preventDefault();
        request(
            "POST",
            "/Ingresar",
            {login: this.state.login, password: this.state.password}
           
        ).then((response) =>{
            if(!response.data.esProfesional){
                this.setState({componentToShow: "mensaje"});
            }else{
                this.setState({componentToShow: "profesinal"})
            }
            
            setAuthtoken(response.data.token);
        }).catch((error) => {
            this.setState({componentToShow: "bienvenido"})
        });
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <Navegador />
                    {this.state.componentToShow === "mensaje" && <Navigate to="/mensajes" /> }
                    {this.state.componentToShow === "profesinal" && <Navigate to="/NavPro" /> }
                </div>
                <div className="wrapper fadeInDown">
                    <div id="formContent">

                        <div className="fadeIn first">
                            <img src={logo} width="100px" alt="User Icon" />
                        </div>

                        <form onSubmit={this.onSubmitLogin}>
                            <input type="text" id="login" className="fadeIn second" name="login" placeholder="usuario" onChange={this.onChangeHandler}/>
                            <input type="password" id="password" className="fadeIn third" name="password" placeholder="contraseña" onChange={this.onChangeHandler}/>
                            <input type="submit" className="fadeIn fourth" value="Ingresar" />
                        </form>


                        <div id="formFooter">
                        <Link to={"/Registrarse"} className="nav-link">Registrarse </Link>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default Login
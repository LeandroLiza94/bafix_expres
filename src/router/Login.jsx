import React from 'react'
import  '../assetss/css/Login.css';
import { Link } from 'react-router-dom';
import logo from '../assetss/img/logo.png';
import Navegador from '../components/Navegador';


class Login extends React.Component{

    render(){
        return(
            <React.Fragment>
                <div>
                    <Navegador />
                </div>
                <div className="wrapper fadeInDown">
                    <div id="formContent">

                        <div className="fadeIn first">
                            <img src={logo} width="100px" alt="User Icon" />
                        </div>

                        <form>
                            <input type="text" id="login" className="fadeIn second" name="login" placeholder="usuario" />
                            <input type="text" id="password" className="fadeIn third" name="login" placeholder="contraseña" />
                            <input type="submit" className="fadeIn fourth" value="Ingresar" />
                        </form>


                        <div id="formFooter">
                        <Link to={"/Registrarse"} class="nav-link">Registrarse </Link>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default Login
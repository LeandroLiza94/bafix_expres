
import React from 'react'
import { Link } from 'react-router-dom';
import Salir from './Salir';

class Navegador extends React.Component {

    render() {
        return (
            <div>



                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                    <Link to={"/"} className="nav-link active">Inicio</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to={"/"} className="nav-link active">Inicio</Link>
                                <Link to={"/Ingresar"} className="nav-link">Ingresar </Link>
                                <Link to={"/AcercaDe"} className="nav-link">Acerca De </Link>
                               
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Navegador
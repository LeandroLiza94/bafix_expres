
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assetss/img/bafix-logo-min.png';

class Navegador extends React.Component {

    render() {
        return (
            <div>



<<<<<<< Updated upstream
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                    <Link to={"/"} class="nav-link active">Inicio</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
=======
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                    <Link to={"/"} className="nav-link active"><img src={logo} className='logobfix'></img></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
>>>>>>> Stashed changes
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <Link to={"/"} class="nav-link active">Inicio</Link>
                                <Link to={"/Ingresar"} class="nav-link">Ingresar </Link>
                                <Link to={"/AcercaDe"} class="nav-link">Acerca De </Link>

                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Navegador
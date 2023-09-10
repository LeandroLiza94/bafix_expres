
import React from 'react'
import { Link } from 'react-router-dom';

class Navegador extends React.Component {

    render() {
        return (
            <div>



                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                    <Link to={"/"} class="nav-link active">Inicio</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
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
import * as React from 'react';
//import {  Route,Routes } from 'react-router-dom';
import Navegador from '../components/Navegador';
//import ProfesionalCreado from '../components/ProfesionalCreado';
import Cliente from '../components/Cliente';
import Solicitados from '../components/ServiciosSolicitadosC';
import Proceso from '../components/ServiciosProcesoC';
import Finalizado from '../components/ServiciosFinalizadosC';
import Realizado from '../components/ServiciosRealizadosC';
//import { getIdProfesional } from '../axios_helper';

class NavVerticalC extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            active: "clienteNuevo"
        }
    }


   /* componentDidMount() {
        if(getIdProfesional()===undefined){
            this.setState({active: "profesionalCreado"});
        }
    }*/


    render() {
        return (
            
            
            <div>
                <Navegador />

        
           

            <div className="d-flex align-items-start">

                    <div className="nav flex-column nav-pills me-3 col-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" >Datos Cliente</button>
                    <button className="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Servicios Solicitados</button>
                    <button className="nav-link" id="v-pills-Proceso-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Proceso" type="button" role="tab" aria-controls="v-pills-Proceso" aria-selected="false">Servicios en Proceso</button>
                    <button className="nav-link" id="v-pills-Realizado-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Realizado" type="button" role="tab" aria-controls="v-pills-Realizado" aria-selected="false">Servicios Realizados</button>
                    <button className="nav-link" id="v-pills-Finalizado-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Finalizado" type="button" role="tab" aria-controls="v-pills-Finalizado" aria-selected="false">Servicios Finalizados</button>
                </div>
                    <div className="tab-content col-8" id="v-pills-tabContent">
                        <div className="tab-pane fade " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0" >
                            <Cliente /> 
                          
                        </div>
                        <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                        {this.state.active === "clienteNuevo" && <Solicitados /> }
                        </div>
                        <div className="tab-pane fade" id="v-pills-Proceso" role="tabpanel" aria-labelledby="v-pills-Proceso-tab" tabIndex="0">
                        <Proceso /> 
                        </div>
                        <div className="tab-pane fade" id="v-pills-Realizado" role="tabpanel" aria-labelledby="v-pills-Realizado-tab" tabIndex="0">
                        <Realizado />
                        </div>
                        <div className="tab-pane fade" id="v-pills-Finalizado" role="tabpanel" aria-labelledby="v-pills-Finalizado-tab" tabIndex="0">
                        <Finalizado />
                        </div>
                    </div>
            </div>
            </div>
        )
    }
            
}

export default NavVerticalC
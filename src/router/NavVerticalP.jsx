import * as React from 'react';
import { Navigate, Route,Routes } from 'react-router-dom';
import Navegador from '../components/Navegador';
import ProfesionalCreado from '../components/ProfesionalCreado';
import Profesional from '../components/Profesional';
import { getIdProfesional } from '../axios_helper';

class NavVerticalP extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            active: "profesionalNuevo"
        }
    }


    componentDidMount() {
        if(getIdProfesional()===undefined){
            this.setState({active: "profesionalCreado"});
        }
    }


    render() {
        return (
            
            
            <div>
                <Navegador />
                <Routes>
                    <Route path="/Profesional" element={<Profesional />} />
                    

                </Routes>
        
           

            <div class="d-flex align-items-start">

                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" >Datos profesional</button>
                    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profesional Creado</button>
                    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
                    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
                </div>
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0" >
                            {this.state.active === "profesionalNuevo" && <Profesional /> }
                          
                        </div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                            
                        </div>
                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
                    </div>
            </div>
            </div>
        )
    }

}

export default NavVerticalP
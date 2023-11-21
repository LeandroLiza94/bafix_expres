import * as React from 'react';
import Navegador from '../components/Navegador';
import Profesional from '../components/Profesional';
import ServiciosSinConfirmar from '../components/ServiciosSinConfirmar';


class NavVerticalP extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            active: "profesionalNuevo"
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

                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" >Datos profesional</button>
                    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Servicios sin confirmar</button>
                    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Servicios confirmados</button>
                    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Servicios pagados</button>
                </div>
                    <div className="tab-content col-10" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0" >
                            {this.state.active === "profesionalNuevo" && <Profesional /> }
                          
                        </div>
                        <div className="tab-pane " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                            <ServiciosSinConfirmar />
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">...</div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex="0">...</div>
                    </div>
            </div>
            </div>
        )
    }

}

export default NavVerticalP
import * as React from 'react';
import Salir from './Salir';
import Navegador from './Navegador';
import { request, getIdProfesional } from '../axios_helper';

class ProfesionalCreado extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    };




    componentDidMount() {
        request(
            "GET",
            "/Profesionales/"+getIdProfesional(),
            {}
            ).then((response) => {
                let resArray  = Object.values(response.data);
                this.setState({ data: resArray })
            });
    };



    render() {
        return (
            <div>
                <Navegador />
                <div style={{right: "0"}}>
                <Salir />
                </div>
                
                {this.state.data && this.state.data.map((line) =>
                    <div className="card" style={{width: "18rem",  margin: "0 auto"}}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{line}</li>
                        </ul>
                    </div>
                )}

                <div>HOLA</div>
            </div>


        );

    };

    }

export default ProfesionalCreado
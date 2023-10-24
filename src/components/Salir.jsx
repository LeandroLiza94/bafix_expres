import React from "react";
import { cleanAuthToken } from '../axios_helper';
import { Link } from 'react-router-dom';

class Salir extends React.Component{

    logout =()=>{
        cleanAuthToken();
    }

    render(){
        return(
            <React.Fragment>
                <Link to={"/Ingresar"} className="nav-link">
                    <button type="submit" className="btn btn-dark"  onClick={this.logout}>Salir</button>
                </Link>


            </React.Fragment>
        )
    }


} 

export default Salir;
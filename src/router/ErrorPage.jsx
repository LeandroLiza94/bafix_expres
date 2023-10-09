
import React from 'react'
import Navegador from '../components/Navegador';

class ErrorPage extends React.Component{

        render(){
            return(
                    <React.Fragment>
                         <Navegador />
                        <div>Pagina desconocidad</div>
                    </React.Fragment>
                );
            
        }


}

export default ErrorPage
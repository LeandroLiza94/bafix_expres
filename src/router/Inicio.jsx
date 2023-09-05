
import React from 'react'
import Navegador from '../components/Navegador';

class Inicio extends React.Component{

        render(){
            return(
                    <React.Fragment>
                         <Navegador />
                        <div>Esta es la pagina de inicio</div>
                    </React.Fragment>
                );
            
        }


}

export default Inicio
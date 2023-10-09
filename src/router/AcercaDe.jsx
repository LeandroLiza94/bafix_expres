import React from "react"
import  '../assetss/css/App.css';
import Navegador from '../components/Navegador';
import bfx from '../assetss/img/bfx.jpg';

class AcercaDe extends React.Component{

        render(){
            return(   <React.Fragment>
                  <Navegador />
                
                  <div className="fadeIn first"><h3>Somos Bafix Express</h3>
                  <br></br>
                <p>Bafix Express es una empresa dedicada a presentar una solución, tanto a particulares como a empresas, a la hora de contratar personal técnico calificado para tareas domésticas y corporativas. Nuestra empresa se caracteriza por proveer un servicio de confianza, transparencia y profesionalismo, con una experiencia de servicio acorde a lo esperado.</p>
                  </div>

                <div className="fadeIn second">
                            <img src={bfx} width="500px" alt="Bfx" />
                            <br></br>
                            <br></br>
                 <p>Nuestra misión es ser líderes y competitivos en el mercado, donde los clientes aprovechen al máximo los servicios disponibles y satisfagan sus necesidades propuestas, permitiendo encontrar a los profesionales de oficio de una manera rápida y lo más cercana posible a través de geolocalización. Queremos estar comprometidos con los problemas de nuestros clientes de forma transparente y eficaz para convertirnos en su principal socio de confianza.</p>
                        </div>
            </React.Fragment>)

        }

}

export default AcercaDe
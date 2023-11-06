import React from "react"
import  '../assetss/css/App.css';
import Navegador from '../components/Navegador';
import bfx from '../assetss/img/logo-us.png';
import imgservicio from '../assetss/img/servicio.png';

class AcercaDe extends React.Component{

        render(){
            return(<React.Fragment>
                  <Navegador />
                  <body classname='body'>
                  <div className="fadeIn first">
                  <img  src={bfx} width="210px" alt="/" />
                  <h1 class="titulo">Somos Bafix Express</h1>
                  <br></br>
                  </div>
                  <div className="fadeIn second">
                  <div class="cont"> 
                  <p>Bafix Express es una empresa dedicada a presentar una solución, tanto a particulares como a empresas, a la hora de contratar personal técnico calificado para tareas domésticas y corporativas. Nuestra empresa se caracteriza por proveer un servicio de confianza, transparencia y profesionalismo, con una experiencia de servicio acorde a lo esperado.
                  <br></br><br></br>
                  Nuestra misión es ser líderes y competitivos en el mercado, donde los clientes aprovechen al máximo los servicios disponibles y satisfagan sus necesidades propuestas, permitiendo encontrar a los profesionales de oficio de una manera rápida y lo más cercana posible a través de geolocalización. Queremos estar comprometidos con los problemas de nuestros clientes de forma transparente y eficaz para convertirnos en su principal socio de confianza.
                  </p>
                  <div class="image"><img src={imgservicio}  alt="/" width="900px"/></div>
                  </div>
                    </div>
                       </body>
            </React.Fragment>)

        }

}

export default AcercaDe
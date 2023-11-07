import { request } from '../axios_helper';
import React,{ useEffect, useState } from 'react';


const ServiciosSinConfirmar = () => {

    const [serviciosSinConfirmar,setServiciosSinConfirmar]= useState([]);
    const [descripcion,setDescripcion]= useState('');
    const [direccion,setDireccion]= useState('');
    const [horario,setHorario]= useState('');
    const [mail,setMail]= useState('');
    const [experiencia,setExperiencia]= useState('');
    const [telefono,setTelefono]= useState('');
    const [servicio,setServicio]= useState('');
   

    useEffect( ()=>{
        getServiciosSinConfirmar();
    },[]);

    const getServiciosSinConfirmar = () =>{
        request(
            "GET",
            "/ServiciosSinConfirmar",
            {}
        ).then((response) => {
            let resArray = Object.values(response.data);
            setServiciosSinConfirmar(resArray)
        })
            
    }





  return (
    <div className='App'>
        <div className='container-fluid'>
            <div className='row mt-3'>
                <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr><th>ID</th><th>DESCRIPCION</th><th>ESTADO</th><td>FECHA</td><th></th></tr>
                            </thead>
                                <tbody className='table-group-divider'>
                                    {serviciosSinConfirmar.map((servicio, id)=>(
                                        <tr key={servicio.idServicio}>
                                            <td>{servicio.idServicio}</td>
                                            <td>{servicio.descripcion}</td>
                                            <td>{servicio.estado}</td>
                                            <td>{servicio.fecha}</td>
                                            <td>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='modal fade'></div>

    </div>
  )
}

export default ServiciosSinConfirmar;
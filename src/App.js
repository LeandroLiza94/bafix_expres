import React from 'react'
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import  Switch  from 'react-switch';
import Login from './router/Login';
import Inicio from './router/Inicio';
import AcercaDe from './router/AcercaDe';
import Registrarse from './components/Registrarse'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Inicio/>,
      errorElement: <h1>La pagina no existe x(</h1>
    },
    {
      path:'/Ingresar',
      element: <Login/>
    },
    {
      path:'/AcercaDe',
      element: <AcercaDe/>
    },
    {
      path:'/Registrarse',
      element: <Registrarse/>
    }
  ]);

  return (
    <div className='App'>

      <React.Fragment>
        <RouterProvider router={ router }></RouterProvider>
      </React.Fragment>

    </div>
  );
}

export default App;

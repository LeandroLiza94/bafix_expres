import React from 'react'
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import  Switch  from 'react-switch';
import Login from './router/Login';
import Inicio from './router/Inicio';
import Buscar from './router/Buscar';
import AcercaDe from './router/AcercaDe';
<<<<<<< Updated upstream
import Buscar from './router/Buscar';
import Registrarse from './components/Registrarse'

=======
import Registrarse from './components/Registrarse';
import WelcomeContent from './components/WelcomeContent';
import NavVerticalP from './router/NavVerticalP';
import AuthContent from './components/AuthContent';
import ProfesionalDet from './router/ProfesionalDet';
>>>>>>> Stashed changes
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
    },
    {
      path:'/Buscar/:especialidad',
      element: <Buscar/>
      
    },
  ]);

  return (
    <div className='App'>
<<<<<<< Updated upstream
=======
      
      <BrowserRouter>
    <Routes>
    <Route path = "/" element = {<Inicio/>} errorElement= {<WelcomeContent />}  />
      <Route path = "/Ingresar" element = {<Login/>} />
      <Route path = "/AcercaDe" element = {<AcercaDe/>} />
      <Route path = "/Registrarse" element = {<Registrarse/>} />
      <Route path = "/mensajes" element = {<AuthContent/>} />
      <Route path = "/Buscar/:profesion" element = {<Buscar/>} />
      <Route path = "/Profesional/:idProfesional" element = {<ProfesionalDet/>} />
      <Route path = "/NavPro" element = {<NavVerticalP/>} />
          <Route
            path="/error-page"
            element={<ErrorPage />}
          />
>>>>>>> Stashed changes

      <React.Fragment>
        <RouterProvider router={ router }></RouterProvider>
      </React.Fragment>

    </div>
  );
}

export default App;

import React from 'react'
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route} from 'react-router-dom';
import ErrorPage from './router/ErrorPage';
import Login from './router/Login';
import Inicio from './router/Inicio';
import AcercaDe from './router/AcercaDe';
import Registrarse from './components/Registrarse';
import WelcomeContent from './components/WelcomeContent';
import NavVerticalP from './router/NavVerticalP';
import AuthContent from './components/AuthContent';
import ProfesionalCreado from './components/ProfesionalCreado';
import Profesional from './components/Profesional';


function App() {

/*const router = createBrowserRouter([
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
      path:'/mensajes',
      element: <WelcomeContent/>
    },
  ]);
  
  ---- dentro de return
        <React.Fragment>
      
        <RouterProvider router={ router }></RouterProvider>
        
      </React.Fragment>

    <Route path="Profesional" element={<Profesional />} />

  */



  return (
    <div className='App'>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} errorElement={<WelcomeContent />} />
          <Route path="/Ingresar" element={<Login />} />
          <Route path="/AcercaDe" element={<AcercaDe />} />
          <Route path="/Registrarse" element={<Registrarse />} />
          <Route path="/mensajes" element={<AuthContent />} />
          <Route path="/NavPro/*" element={<NavVerticalP />} />
          <Route path="Profesional" element={<Profesional />} />
          <Route path="ProfesionalCreado" element={<ProfesionalCreado />} />
       
          <Route
            path="/error-page"
            element={<ErrorPage />}
          />


        </Routes>  

      </BrowserRouter>


  </div>
  );



}

export default App;

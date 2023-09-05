import Navegador from '../components/Navegador';
function Registrarse(){

    return(
        <div>
            <Navegador />
            <form>
        <div className="mb-1">
          <label for="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">Ingresa su</div>
        </div>
        <div className="mb-1">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-1 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Soy profesional</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </div>
        
    );

}

export default Registrarse
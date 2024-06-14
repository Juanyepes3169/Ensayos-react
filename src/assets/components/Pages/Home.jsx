// Home.js
import { Link } from "react-router-dom";
import './Home.css'
const Home = () => {
  return (
    <div>
      <img src="" alt="" />
      <nav className="segunda">
        <Link to="#">HOME</Link><br />
        <Link to="/usuario">USUARIO</Link><br/>
      </nav>
      <br />

      <button>
        <Link to="/" className="btn">Cerrar Sesion</Link>
      </button>
    </div>
  )
}

export default Home;

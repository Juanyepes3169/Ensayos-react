// Main.js
import './Main.css';
import { useState } from "react";
import { usuarios } from '../database/database';
import { useNavigate } from "react-router-dom";

const Main = () => {
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const redireccion = useNavigate();

    function validarInicioSesion() {
        if (buscarUsuario()) {
          console.log("Inicio de sesión correcta");
          redireccion("/home"); // Redirecciona al usuario a la página de inicio
        } else {
          console.log("Error de credenciales");
        }
    }

    function buscarUsuario() {
        return usuarios.some(
          (usuarioDB) =>
            usuarioDB.user === usuario && usuarioDB.contrasena === contrasena
        );
    }

    return (
        <div className='login-container'>
            <form action="" className="login-form">
                <h2>Login</h2><br />
                <div className="input-group">
                    <label htmlFor="usuario">Username</label><br />
                    <input type="text" id='usuario' name='usuario' required  
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                </div><br />
                <div className="input-group">
                    <label htmlFor="password">Password</label><br />
                    <input type="password" id="password" name="password" required   
                        onChange={(e) => setContrasena(e.target.value)}
                    /><br />
                </div><br />
                <div>
                    <button className="btnenviar" type="button" onClick={validarInicioSesion}>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Main;

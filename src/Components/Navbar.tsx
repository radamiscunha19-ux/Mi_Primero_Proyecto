import '../StyleCss/Navbar.css'
import {Inicio, Servicios, Contactos,Login, Register} from './Buttons';

export default function Navbar() {
  return (
    <div className="container">
    <nav className="BarraNave"> 
        <div className="d-logo"> 
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Logo" className="logo" />
        <h1>My App</h1>
        </div>
        <div className="Botao-group">
        <Inicio />
        <Servicios />
        <Contactos />
        </div>
        <div className="Botao-group">
        <Login />
        <Register />
        </div>
    </nav>
    </div>
  )
};
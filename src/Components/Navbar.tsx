import '../StyleCss/Navbar.css'

export default function Navbar() {
  return (
    <div className="container">
    <nav className="BarraNave"> 
        <div className="d-logo"> 
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Logo" className="logo" />
        <h1>My App</h1>
        </div>
        <div>
        <button className="btn">Inicio</button>
        <button className="btn">Servicios</button>
        <button className="btn">Contactos</button>
        </div>
        <div className="Botao-group">
        <button className="btn bg-blue-500 Botao-l">Iniciar Sesión</button>
        <button className="btn bg-blue-500 Botao-r">Register</button>
        </div>
    </nav>
    </div>
  )
};
import "../StyleCss/Navbar.css";
import { Login, Register } from "./Buttons";

export default function Navbar() {
  return (
    <div>
      <nav className="BarraNave">
        <div className="d-logo">
          <a href="/">
          <button type="button"  className="BotaoHome">
          <div className="book">
            <div className="book__pg-shadow"></div>
            <div className="book__pg">♥</div>
            <div className="book__pg book__pg--2">♥</div>
            <div className="book__pg book__pg--3">♥</div>
            <div className="book__pg book__pg--4">♥</div>
            <div className="book__pg book__pg--5">♥</div>
          </div>
          <div className="Home">Home</div></button>
          </a>
        </div>
        <div className="TituloNavBar">
          <h1>Milionário Dos Sonhos</h1>
        </div>
        <div className="Botao-group">
          <Login />
          <Register />
        </div>
      </nav>
    </div>
  );
}

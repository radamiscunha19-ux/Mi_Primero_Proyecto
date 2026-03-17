import { Link } from "react-router-dom"

export function Capa() {

    return (
    <div>
      <img className="TamanhoImg" src="capa_livro_1.png" alt="Poesia" />
    </div>
  )
};

export function Page1() {

    return (
    <div>
      <Link to="/Page1">
        <img className="TamanhoImg" src="Poesia.jpeg" alt="Poesia" />
      </Link>
    </div>
  )
};

export function Page2() {

    return (
    <div>
      <Link to="/Page2">
        <img className="TamanhoImg" src="Poesia_1.jpg" alt="Poesia" />
      </Link>
    </div>
  )
};
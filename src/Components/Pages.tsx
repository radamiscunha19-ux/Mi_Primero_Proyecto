import { Link } from "react-router-dom";

export function Capa() {
  return (
    <div>
      <img className="TamanhoImg" src="capa_livro_1.png" alt="Poesia" />
    </div>
  );
}

export function Page1() {
  return (
    <div>
      <Link to="/Page1">
        <img className="TamanhoImg" src="Poesia_1.png" alt="Poesia" />
      </Link>
    </div>
  );
}

export function Page2() {
  return (
    <div>
      <Link to="/Page2">
        <img className="TamanhoImg" src="Poesia_2.jpg" alt="Poesia" />
      </Link>
    </div>
  );
}

export function Page3() {
  return (
    <div>
      <Link to="/Page3">
        <img className="TamanhoImg" src="Poesia_3.jpg" alt="Poesia" />
      </Link>
    </div>
  );
}

export function Page4() {
  return (
    <div>
      <Link to="/Page4">
        <img className="TamanhoImg" src="Poesia_4.png" alt="Poesia" />
      </Link>
    </div>
  );
}

export function ContraCapa() {
  return (
    <div>
      <img className="TamanhoImg" src="RadamisKeoma.png" alt="Poesia" />
    </div>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import PaginaUno from "../Pages/PaginaUno";
import PaginaDos from "../Pages/PaginaDos";
import PaginaTres from "../Pages/PaginaTres";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Page1" element={<PaginaUno />} />
        <Route path="/Page2" element={<PaginaDos />} />
        <Route path="/Page3" element={<PaginaTres />} />
      </Routes>
    </BrowserRouter>
  );
}

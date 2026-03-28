import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import PaginaUno from "../Pages/PaginaUno";
import PaginaDos from "../Pages/PaginaDos";
import PaginaTres from "../Pages/PaginaTres";
import PaginaCuatro from "../Pages/PaginaCuatro";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Page1" element={<PaginaUno />} />
        <Route path="/Page2" element={<PaginaDos />} />
        <Route path="/Page3" element={<PaginaTres />} />
        <Route path="/Page4" element={<PaginaCuatro />} />
      </Routes>
    </BrowserRouter>
  );
}

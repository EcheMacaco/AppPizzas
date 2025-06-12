import "./Navbar.css";
import { Link } from "react-router-dom";

import Logo from "../../Img/Logo.jpg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img className="logo" src={Logo} alt="LOGO" />
      </div>
      <ul>
        <li>
          <Link to="/inicio">Nosotros</Link>
        </li>
        <li>
          <Link to="/carrito">Carrito</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/inicio">Inicio</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

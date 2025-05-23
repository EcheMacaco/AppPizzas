import "./Navbar.css";

import Logo from "../../Img/Logo.jpg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img className="logo" src={Logo} alt="LOGO" />
      </div>
      <ul>
        <li>
          <a href="/Nosotros">Nosotros</a>
        </li>
        <li>
          <a href="#.com">Carrito</a>
        </li>
        <li>
          <a href="/Menu">Menu</a>
        </li>
        <li>
          <a href="/inicio">Inicio</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

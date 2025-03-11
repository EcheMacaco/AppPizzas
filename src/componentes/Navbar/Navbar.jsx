import "./Navbar.css";
const Navbar = () => {
  // Navbar component

  return (
    <nav className="navbar">
      
        <div className="logo">LOGO PIZZA </div>
        <ul>
          <li>
            <a href="#.com">Inicio</a>
          </li>
          <li>
            <a href="#.com">Menu</a>
          </li>
          <li>
            <a href="#.com">Ubicacion</a>
          </li>
          <li>
            <a href="#.com">Contacto</a>
          </li>
          <li>
            <a href="#.com">Carrito</a>
          </li>
        </ul>
      
    </nav>
  );
};
export default Navbar;

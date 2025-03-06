const Navbar = () => {      // Navbar component
  return (
    <nav className="navbar">
     <a href="#"> 
        <h1>Pizzeria </h1> 
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Ubicacion</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Carrito</a></li>
        </ul>

     </a>
    </nav>
  );
}
export default Navbar;
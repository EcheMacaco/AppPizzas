import { useState } from "react";
import "./Pizza.css";
import { pizzaImg } from "../../Img/Img.jsx";

// Pizza.jsx
// Este componente es responsable de mostrar la información de una pizza individual.
// Recibe un objeto pizzaItem como props y muestra su nombre, imagen, precio e ingredientes.
const Pizza = ({
  pizzaItem,
  agregarAlCarrito,
  restarAlCarrito,
  cantidad = 0,
}) => {
  const [showIngredientes, setShowIngredientes] = useState(false);

  return (
    <div className="pizza-card" style={{ position: "relative" }}>
      {!showIngredientes ? (
        <>
          <div className="pizza-info">
            <h1> {pizzaItem.nombre} </h1>
            <div className="pizza-img-container">
              <img src={pizzaImg[pizzaItem.nombre]} alt={pizzaItem.nombre} />
              {cantidad > 0 && (
                <span className="pizza-cantidad">{cantidad}</span>
              )}
            </div>
            <p> {"$" + pizzaItem.precio} </p>
          </div>
          <div className="pizza-buttons">
            <div>
              <button onClick={() => agregarAlCarrito(pizzaItem.id)}>
                Agregar
              </button>
              <button
                className={cantidad === 0 ? "btn-quitar-disabled" : ""}
                style={
                  cantidad === 0 ? { cursor: "not-allowed", opacity: 0.5 } : {}
                }
                onClick={
                  cantidad === 0
                    ? undefined
                    : () => restarAlCarrito(pizzaItem.id)
                }
                disabled={cantidad === 0}
              >
                Quitar
              </button>
            </div>
            <div>
              <button
                className="btn-ingredientes"
                onClick={() => setShowIngredientes(true)}
              >
                Ingredientes
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="ingredientes-overlay">
          <h1>Ingredientes</h1>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {pizzaItem.ingredientes.map((ing, i) => (
              <li key={i} style={{ textTransform: "uppercase" }}>
                {ing.trim()}
              </li>
            ))}
          </ul>
          <button onClick={() => setShowIngredientes(false)}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default Pizza;

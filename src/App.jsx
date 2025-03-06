import Pedidos from "./componentes/Pedidos/Pedidos";
import Navbar from "./componentes/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <h1>
        <Navbar />
        <Pedidos />{" "}
      </h1>
    </div>
  );
}

export default App;

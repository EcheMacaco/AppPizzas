import PizzaItem from "./componentes/PizzaItem/PizzaItem";
import Navbar from "./componentes/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <h1>
        <Navbar />
        <PizzaItem />{" "}
      </h1>
    </div>
  );
}

export default App;

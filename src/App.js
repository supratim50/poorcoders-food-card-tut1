import "./assets/styles/style.css";
import svg from "./assets/images/hiking.svg";

// COMPONENT
import Card from "./components/cards/foodCards/FoodCard";

function App() {
  return (
    <section className="body">
      <Card />

      {/* SVG */}
      <div className="svg-box">
        <img className="image-svg" src={svg} alt="Svg" />
      </div>
    </section>
  );
}

export default App;

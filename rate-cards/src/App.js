import "./RateCard/RateCard.css";
import RateCard from "./RateCard/RateCard";
import Json from "./RateCard/RateJson";
import "./RateCard/RateCard.css";

let cards = JSON.parse(Json);

console.log(cards);

function App() {
  return (
    <div className="cards">
      <div className="cards__container container">
        <div className="cards__body">
          {cards.map((card) => (
            <RateCard
              kay={card.id}
              rate={card.rate}
              price={card.price}
              speed={card.speed}
              color={card.color}
              isSelected={card.isSelected}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

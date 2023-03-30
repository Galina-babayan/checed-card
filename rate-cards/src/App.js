import "./RateCard/RateCard.css";
import RateCard from "./RateCard/RateCard";
import Json from "./Utils/RateJson";

import { useState } from "react";

let cards = JSON.parse(Json);

console.log(cards);

function App() {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <div className="cards">
      <div className="cards__container container">
        <div className="cards__body">
          {cards.map((card) => (
            <RateCard
              kay={card.id}
              id={card.id}
              rate={card.rate}
              price={card.price}
              speed={card.speed}
              color={card.color}
              isSelected={isSelected === card.id}
              onButtonClick={setIsSelected}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

import "./RateCard.css";

import cN from "classnames";

export default function RateCard(props) {
  let { rate, price, speed, color, id, isSelected, onButtonClick } = props;

  let classSelect = "";
  if (isSelected) classSelect = "selected";

  function onClick() {
    onButtonClick(id);
  }

  console.log(isSelected);
  return (
    <div className="cards__column">
      <article className={cN([`cards-item ` + `${classSelect} ` + `${color}`])}>
        <div className="cards-item__body">
          <p className="cards-item__rate">{rate}</p>
          <div className="cards-item__price">
            <span className="cards-item__word-top">руб</span>
            <span className="cards-item__number">{price}</span>
            <span className="cards-item__word-bottom">/мес</span>
          </div>

          <div className="cards-item__speed">{speed}</div>
          <div className="cards-item__info">
            <span>Объем включенного</span>
            <span>трафика не ограничен</span>
          </div>
          {!isSelected && (
            <button className="cards__button" onClick={onClick}>
              Выбрать
            </button>
          )}
        </div>
      </article>
    </div>
  );
}

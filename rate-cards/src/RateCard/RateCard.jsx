import "./RateCard.css";

// const stylesArr = Object.entries(styles);
// console.log(stylesArr);

import cN from "classnames";

// "cards-item " + (isSelected ? "selected" : "");

export default function RateCard(props) {
  let { rate, price, speed, isSelected, color } = props;
  let classSelect = "";
  if (isSelected) classSelect = "selected";
  return (
    // for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);

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
        </div>
      </article>
    </div>
  );
}

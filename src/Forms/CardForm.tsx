import React from "react";
import { CardeForm } from "./FormData";

interface CardFormProps {
  cards: CardeForm[];
}

const CardForm = ({ cards }: CardFormProps) => {
  if (cards.length === 0) {
    return (
      <div className="cards__error">
        <p className="error__text">Cards not found</p>
      </div>
    );
  }
  return (
    <>
      {cards.map((card) => {
        return (
          <div className="form-card" key={card.indexId}>
            <div className="form-card__img">
              <img
                src={card.image}
                alt="fotoCard"
                className="form-card__img"
              ></img>
            </div>
            <div className=" ">{card.firstName}</div>
            <div className=" ">
              <p className="birth__title">Date registration:</p>
              <p className="birth__text">{card.valid}</p>
            </div>
            <div className=" ">
              <span className="form-card__span">Division code:</span>{" "}
              {card.divisionCode}
            </div>
            <div className="form-card__info">
              <div className="form-card__ingredient item">
                <p className="item__title">{card.officeLocation}</p>
                <p className="item__text">Office location</p>
              </div>
              <div className="form-card__cost item">
                <p className="item__title">{card.gender}$;</p>
                <p className="item__text">Gender</p>
              </div>
              <div className="form-card__house item">
                <p className="item__title">{card.accept}</p>
                <p className="item__text">Accept</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardForm;

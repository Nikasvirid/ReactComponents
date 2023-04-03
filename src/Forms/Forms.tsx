import { useState, useEffect } from "react";
import CardForm from "./CardForm";
import Popup from "./popup";
import { CardeForm } from "./FormData";
import Form from "./Form";

export const Forms = () => {
  const [cards, setCards] = useState<CardeForm[]>([]);
  const [popup, setPopup] = useState(false);

  const handleCard = (card: CardeForm) => {
    setCards([...cards, card]);
    setPopup(true);
  };

  useEffect(() => {
    popup &&
      setTimeout(() => {
        setPopup(false);
      }, 3000);
  }, [popup]);

  return (
    <div className="main__container">
      <Form handleCard={handleCard} cards={cards.length} />
      <div className="forms__cards">
        <CardForm cards={cards} />
      </div>
      <Popup showPopup={popup} />
    </div>
  );
};

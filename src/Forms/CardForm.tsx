import { useEffect, useState } from "react";
import styles from "./Card.module.css";
import { IForm, InputForm } from "./FormData";
import { getPlanetPerson } from "./Utils";

function Card(props: IForm) {
  const [home, setHome] = useState<InputForm | []>([]);
  const {
    firstName,
    divisionCode,
    url,
    gender,
    officeLocation,
    dateRegistration,
    checkbox,
  } = props;

  useEffect(() => {
    getPlanetPerson(officeLocation).then((e) => {
      const homeworldRes = e as InputForm;
      setHome(homeworldRes);
    });
  }, [officeLocation]);

  return (
    <li className={styles.person_item} key={url}>
      <img className={styles.person_foto} src={url} alt={url} />
      <div>
        <h4>{url}</h4>
        <h3>{firstName}</h3>
        <h3>{divisionCode}</h3>
        <h4>Date: {dateRegistration}</h4>
        <h4>Office: {officeLocation}</h4>
        <h4>Gender: {gender}</h4>
        <h4>Accept {checkbox}</h4>
      </div>
    </li>
  );
}

export default Card;

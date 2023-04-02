import React from "react";
import { ICardDataForm } from "./FormData";
import styles from "./form.module.css";

class CardDataForm extends React.Component<ICardDataForm> {
  render() {
    return (
      <div className={styles.container}>
        <div className={" "}>
          <p className={" "}>
            First Name:
            <span className={styles.text}>{this.props.name}</span>
          </p>
          <p className={styles.title}>
            Division Code:
            <span className={" "}>{this.props.numbCode}</span>
          </p>
          <p className={styles.title}>
            Registration date:
            <span className={styles.text}>{this.props.registration}</span>
          </p>
          <p className={styles.title}>
            Office location:
            <span className={styles.text}>{this.props.select}</span>
          </p>
          <p className={styles.title}>
            Gender:
            <span className={styles.text}>{this.props.radio}</span>
          </p>
        </div>
        <img
          className={styles.img}
          src={this.props.image}
          alt="photo"
          width="100px"
        />
      </div>
    );
  }
}

export default CardDataForm;

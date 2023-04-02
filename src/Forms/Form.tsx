import React from "react";
import { CardsState, ICardDataForm } from "./FormData";
import styles from "./form.module.css";
import CardDataForm from "./CardForm";

const cities: string[] = ["Georgia", "Belarus", "Hungary"];

class Form extends React.Component<unknown> {
  state = {
    cards: [],
  };

  inputName = React.createRef<HTMLInputElement>();
  inputNumb = React.createRef<HTMLInputElement>();
  inputDate = React.createRef<HTMLInputElement>();
  selectRef = React.createRef<HTMLSelectElement>();
  inputCheckbox = React.createRef<HTMLInputElement>();
  inputRadioMale = React.createRef<HTMLInputElement>();
  inputRadioFeMale = React.createRef<HTMLInputElement>();
  inputFile = React.createRef<HTMLInputElement>();

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const name = this.inputName.current?.value;
    const numbCode = this.inputNumb.current?.value;
    const male = this.inputRadioMale.current?.value;
    const female = this.inputRadioFeMale.current?.value;
    const registration = this.inputDate.current?.value;
    const select = this.selectRef.current?.value;
    const file = this.inputFile.current?.files?.[0];

    const card = {
      name: "",
      numbCode: "",
      registration,
      select,
      radio: "",
      image: "",
    };

    if (name != undefined) {
      if (/[A-Z, А-Я]/.test(name.charAt(0))) {
        card.name = name;
      }
    }

    if (numbCode != undefined) {
      if (numbCode.length >= 6) {
        card.numbCode = numbCode;
      }
    }

    if (male != undefined) {
      if (this.inputRadioMale.current?.checked) {
        card.radio = male;
      }
    }

    if (female != undefined) {
      if (this.inputRadioFeMale.current?.checked) {
        card.radio = female;
      }
    }

    if (file) {
      card.image = URL.createObjectURL(file);
    }

    if (
      this.inputCheckbox.current?.checked &&
      name &&
      numbCode &&
      registration &&
      select &&
      file
    ) {
      this.setState((prevState: CardsState) => ({
        cards: [...prevState.cards, card],
      }));

      this.clearForm();
    }
  }

  clearForm() {
    if (
      this.inputName.current?.value &&
      this.inputNumb.current?.value &&
      this.inputDate.current?.value &&
      this.selectRef.current?.value &&
      this.inputCheckbox.current?.value &&
      this.inputRadioFeMale.current?.value &&
      this.inputRadioMale.current?.value &&
      this.inputFile.current?.value != undefined
    ) {
      this.inputName.current.value = "";
      this.inputNumb.current.value = "";
      this.inputDate.current.value = "";
      this.selectRef.current.value = "";
      this.inputCheckbox.current.checked = false;
      this.inputRadioFeMale.current.checked = false;
      this.inputRadioMale.current.checked = false;
      this.inputFile.current.value = "";
    }
  }

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <div>
            <h2 className={styles.title}>Fill in the data!</h2>
          </div>
          <div className={styles.box}>
            <form
              className={styles.container}
              onSubmit={this.handleSubmit.bind(this)}
            >
              <label className={styles.label}>
                First Name:
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Your name.."
                  ref={this.inputName}
                  required
                />
              </label>
              <label className={styles.label}>
                Division code:
                <input
                  className={styles.input}
                  type="number"
                  placeholder="Your division code.."
                  ref={this.inputNumb}
                  required
                />
              </label>
              <label className={styles.label}>
                Registration date:
                <input
                  className={styles.input}
                  type="date"
                  ref={this.inputDate}
                  required
                />
              </label>
              <label className={styles.label}>
                Office location:
                <select
                  name="select"
                  className={styles.input}
                  ref={this.selectRef}
                  required
                >
                  {cities.map(function (city: string, index: number) {
                    return (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    );
                  })}
                </select>
              </label>
              <div className={styles.radio}>
                <label className={styles.radio_label}>
                  {" "}
                  Male
                  <input
                    type="radio"
                    value="Male"
                    name="gender"
                    ref={this.inputRadioMale}
                    className={" "}
                    required
                  />
                </label>
                <label className={styles.radio_label}>
                  {" "}
                  Female
                  <input
                    type="radio"
                    value="Female"
                    name="gender"
                    ref={this.inputRadioFeMale}
                    className=""
                    required
                  />
                </label>
              </div>
              <label className={styles.label}>
                Add your foto:
                <input
                  className={styles.input}
                  type="file"
                  ref={this.inputFile}
                  required
                />
              </label>
              <label className={styles.checkbox}>
                I agree to the processing of my data
                <input
                  className={styles.checkbox_input}
                  type="checkbox"
                  ref={this.inputCheckbox}
                />
              </label>
              <button className={styles.button}>Submitted</button>
            </form>
            <div className={styles.data}>
              {this.state.cards.map((obj: ICardDataForm, index) => {
                return (
                  <CardDataForm
                    key={index}
                    name={obj.name}
                    numbCode={obj.numbCode}
                    registration={obj.registration}
                    select={obj.select}
                    image={obj.image}
                    radio={obj.radio}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Form;

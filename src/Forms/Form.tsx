import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./form.module.css";
import { CardeForm } from "./FormData";
import { resolver } from "./resolver";
import "./form.module.css";
interface FormDataProps {
  handleCard: (card: CardeForm) => void;
  cards: number;
}
const Form = ({ handleCard }: FormDataProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver, mode: "onSubmit" });

  const onSubmit: SubmitHandler<CardeForm> = (data) => {
    handleCard({
      ...data,
    });
  };
  //const officeLocation: string[] = ["Georgia", "Belarus", "Hungary"];

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      First Name:
      <input
        className={styles.input}
        type="text"
        {...register("firstName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
        {...(errors.firstName && <p>First name is required.</p>)}
      />
      Division code:
      <input
        className={styles.input}
        type="number"
        {...register("divisionCode", { pattern: /\d+/ })}
      />
      {errors.divisionCode && <p> Please enter code.</p>}Registration date:
      <input className={styles.input} type="date" {...register("date")} />{" "}
      Office location:
      <select className={styles.input} {...register("officeLocation")}>
        <option value="Belarus">Belarus</option>
        <option value="Hungary">Hungary</option>
        <option value="Georgia">Georgia</option>
      </select>{" "}
      <div className={styles.radio_label}>
        Female
        <input className={""} type="radio" {...register("gender")} />
        Male
        <input className={""} type="radio" {...register("gender")} />
      </div>
      <input className={styles.input} type="file" {...register("image")} />
      {errors.image && <p className="input__error">{errors.image?.message}</p>}
      I consent to the processing of my personal data
      <input className={styles.radio} type="checkbox" {...register("accept")} />
      {errors.accept && (
        <p className="input__error">{errors.accept?.message}</p>
      )}
      <button type="submit"> Submitted!!!</button>
    </form>
  );
};
export default Form;

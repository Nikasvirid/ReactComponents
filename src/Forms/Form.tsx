import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "./Form.module.css";
import getCreatedPersonArr from "./Create";
import DEAFULT_FORM from "./FormData";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: "onSubmit",
    defaultValues: DEAFULT_FORM,
  });

  const [uploadImg, setUploadImg] = useState("");

  const handlerImgChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.files) {
      const file = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        const urlImgForm = String(fileReader.result);
        setUploadImg(urlImgForm);
      };
    }
  };

  const setAllInputLocalStorage = () => {
    const myForm = watch();
    myForm.foto = uploadImg;
    localStorage.setItem("form", JSON.stringify(myForm));
  };

  const createPerson = () => {
    const createdPersonArr = getCreatedPersonArr();
    localStorage.setItem("createdPerson", JSON.stringify(createdPersonArr));
  };

  const handleFormSubmit = () => {
    setAllInputLocalStorage();
    createPerson();
    alert("Card created!!!");
    reset();
  };

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <h2>Your data:</h2>
      <label htmlFor="input">
        Name:
        <input
          {...register("firstName", {
            required: "Please enter your name",
            minLength: {
              value: 2,
              message: "Minimum two characters",
            },
          })}
          id="name-input"
          className={`${styles.input} ${styles.form_input}`}
          data-testid="name-input"
          placeholder="Enter your name..."
        />
        <div className={`${styles.error_title}`}>
          {errors?.firstName && (
            <p>{errors?.firstName?.message || "Errors!"}</p>
          )}
        </div>
      </label>
      <label htmlFor="divisionCode" style={{ width: "100%" }} />
      Division code:
      <input
        className={`${styles.input} ${styles.form_input}`}
        data-testid="divCode"
        type="number"
        {...register("divisionCode", {
          required: "Please enter code division",
        })}
      />
      <label htmlFor="date-input" style={{ width: "100%" }}>
        Date registration:
        <input
          className={`${styles.input} ${styles.form_input}`}
          data-testid="date-input"
          type="date"
          {...register("dateRegistration", {
            required: "Please enter date registration",
          })}
        />
        <div className={`${styles.error_title}`}>
          {errors?.dateRegistration && (
            <p>{errors?.dateRegistration?.message || "Errors!"}</p>
          )}
        </div>
      </label>
      <div className={`${styles.radio}`}>
        <label htmlFor="maleId" className={styles.gender_input__content}>
          Male
          <input
            id="maleId"
            data-testid="gender-input"
            type="radio"
            value="Male"
            {...register("gender", {
              required: "Choose the gender!",
            })}
          />
        </label>
        <label htmlFor="femaleId" className={styles.gender_input}>
          Famale
          <input
            id="femaleId"
            data-testid="gender-input"
            {...register("gender", {
              required: "Choose the gender!",
            })}
            type="radio"
            value="Female"
          />
        </label>
        <div className={`${styles.input_}`}>
          {errors?.gender && <p>{errors?.gender.message || "Errors!"}</p>}
        </div>
      </div>
      <label htmlFor="" style={{ width: "100%" }}>
        OfficeLocation:
        <select
          className={`${styles.input} ${styles.form_input}`}
          data-testid="homeworld-input"
          placeholder="Select country"
          {...register("officeLocation", {
            required: "Choose office!",
          })}
        >
          <option value="Belarus">Belarus</option>
          <option value="Georgia">Georgia</option>
          <option value="Hungary">Hungary</option>
        </select>
        <div className={`${styles.input_}`}>
          {errors?.officeLocation && (
            <p>{errors?.officeLocation.message || "Errors!"}</p>
          )}
        </div>
      </label>
      <label htmlFor="foto-input" style={{ width: "100%" }}>
        Photo:
        <input
          className={`${styles.form_input__photo} ${styles.input}`}
          data-testid="url"
          type="file"
          {...register("foto", {
            required: "Add your photo!",
          })}
          onChange={handlerImgChange}
        />
        <div className={`${styles.input_}`}>
          {errors?.foto && <p>{errors?.foto.message || "Errors!"}</p>}
        </div>
      </label>
      <div>
        <label
          htmlFor="Accept"
          className={`${styles.form_input__checkbox} ${styles.form_input}`}
        >
          Consent to the processing of personal data
          <input
            id="checkboxAccept"
            data-testid="checkbox-input"
            {...register("checkbox", {
              required:
                "To send a form confirming the processing of personal data",
            })}
            type="checkbox"
          />
        </label>
        <div className={`${styles.error_title}`}>
          {errors?.checkbox && <p>{errors?.checkbox.message || "Errors!"}</p>}
        </div>
      </div>
      <button type="submit" className={styles.input}>
        Submit
      </button>
    </form>
  );
}
export default Form;

import { Resolver } from "react-hook-form";
import { CardeForm } from "./FormData";

export type FormErrors = {
  [PropertyKey in keyof CardeForm]: {
    type: string;
    message: string;
  };
};

export const resolver: Resolver<CardeForm> = async (values) => {
  const hanldeValues = (values: CardeForm) => {
    if (Object.values(values).some((value) => !value)) return {};
    return values;
  };
  const error = "Required field";
  const curent = new Date().toISOString().slice(0, 10);
  const handleErrors = (values: CardeForm) => {
    const errors = {} as FormErrors;
    //Name Validation
    if (!values.firstName)
      errors.firstName = {
        type: "required",
        message: error,
      };
    else if (!/^[A-ZА-Я]{1}.*$/.test(values.firstName))
      errors.firstName = {
        type: "required",
        message: "Should starts with uppercased letter",
      };
    //Validation

    //Date Validation
    if (!values.valid)
      errors.valid = {
        type: "required",
        message: error,
      };
    else if (Date.parse(values.valid!) <= Date.parse(curent))
      errors.valid = {
        type: "required",
        message: `Date should be later than ${curent.replace(
          /^(\d+)-(\d+)-(\d+)$/,
          `$3.$2.$1`
        )}`,
      };

    if (!values.officeLocation)
      errors.officeLocation = {
        type: "required",
        message: error,
      };

    if (!values.gender)
      errors.gender = {
        type: "required",
        message: error,
      };
    else if (parseInt(values.gender) <= 0)
      errors.gender = {
        type: "required",
        message: "Should be greater than 0",
      };

    if (!values.accept)
      errors.accept = {
        type: "required",
        message: error,
      };

    if (!values.image.length)
      errors.image = {
        type: "required",
        message: error,
      };
    else if (
      !["image/jpeg", "image/png", "image/gif"].includes(values.image[0]?.type)
    )
      errors.image = {
        type: "required",
        message: "Selected file is not an image",
      };

    if (!values.accept)
      errors.accept = {
        type: "required",
        message: error,
      };

    return errors;
  };

  return {
    values: hanldeValues(values),
    errors: handleErrors(values),
  };
};

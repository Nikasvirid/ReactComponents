import DEAFULT_FORM from "./FormData";
import { IForm } from "./FormData";

function createdPersonArr() {
  const createdForm = (JSON.parse(
    localStorage.getItem("form") as string
  ) as IForm)
    ? (JSON.parse(localStorage.getItem("form") as string) as IForm)
    : DEAFULT_FORM;
  const newIForm: IForm = {
    firstName: createdForm.firstName,
    divisionCode: createdForm.divisionCode,
    dateRegistration: createdForm.dateRegistration,
    gender: createdForm.gender,
    officeLocation: createdForm.officeLocation,
    url: createdForm.firstName,
    checkbox: createdForm.checkbox,
  };
  const getPersonArr: IForm[] = (JSON.parse(
    localStorage.getItem("createdPerson") as string
  ) as IForm[])
    ? (JSON.parse(localStorage.getItem("createdPerson") as string) as IForm[])
    : [];
  getPersonArr.push(newIForm);
  return getPersonArr;
}

export default createdPersonArr;

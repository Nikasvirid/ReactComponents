export interface CardsState {
  cards: string[];
}

export type InputForm = {
  firstName: string;
  divisionCode: number;
  date: string;
  officeLocation: string;
  gender: string;
  accept: string;
  image: string;
  id: number;
};
export type ProductForm = {
  firstName: string;
  divisionCode: number;
  date: string;
  officeLocation: string;
  gender: string;
  accept: string;
  addFile: string;
};

export interface CardFromProps {
  product: ProductForm;
}

export interface IForm {
  firstName: string;
  divisionCode: string;
  dateRegistration: string;
  gender: string;
  officeLocation: string;
  url: string;
  checkbox: boolean;
}
const DEAFULT_FORM = {
  firstName: "",
  divisionCode: "",
  dateRegistration: "",
  gender: "",
  officeLocation: "",
  foto: "",
  checkbox: false,
};

export default DEAFULT_FORM;

const HTTPS = "https://";
const SWAPI_ROOT = "swapi.dev/api/";
const PATH_PERSON = "people";
export const API_PERSON = HTTPS + SWAPI_ROOT + PATH_PERSON;
const IMG_ROOT = "starwars-visualguide.com/assets/img/";
const IMG_PERSONS = "characters/";
export const IMG_EXTENSION = ".jpg";
export const IMG_PERSON_URL = HTTPS + IMG_ROOT + IMG_PERSONS;

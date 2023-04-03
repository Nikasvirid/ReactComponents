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
  image: FileList;
  type: string;
  checkbox: boolean;
  valid: string;
};
export type ProductForm = {
  firstName: string;
  divisionCode: number;
  date: string;
  officeLocation: string;
  gender: string;
  accept: string;
  image: string;
};

export interface CardFromProps {
  product: ProductForm;
}
export type CardeForm = Omit<InputForm, "image" | "checkbox"> & {
  image: string;
  indexId: number;
};

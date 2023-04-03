export interface CardProd {
  id: number;
  name: string;
  price: number | string;
  searchTerm: string;
  image: string;
}

export type Card = {
  id: number;
  image: string;
  title: string;
  valid: string;
  firstName: string;
  date: string;
  officeLocation: string;
  gender: string;
  accept: boolean;
};

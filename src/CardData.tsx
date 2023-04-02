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
  lastName: string;
  ingredient: string;
  experience: string;
  gender: string;
};

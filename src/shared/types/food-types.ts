const FOOD_FIELDS = {
  ID: "id",
  TITLE: "title",
  DESC: "desc",
  PRICE: "price",
  IMG: "img",
}; // постоянные типы

export interface FoodMenuType {
  id?: string;
  title?: string;
  desc?: string;
  price?: number;
  img?: string;
  quantity?: number;
}

export interface FoodCartType extends Omit<FoodMenuType, "desc"> {
  quantity?: number;
}

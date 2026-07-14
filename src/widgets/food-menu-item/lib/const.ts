import type { FoodMenuType } from "../../../shared/types/food-types";

export const FOOD_ITEM: FoodMenuType[] = [
  {
    id: "1",
    title: "Классическая паэлья с курицей",
    desc: "Мы не просто готовим и продаём еду. Хорошая еда согревает.",
    img: "./images/food-list-1.jpg",
    price: 1200,
  },
  {
    id: "2",
    title: "Тако Дель Мар",
    desc: "Taco Del Mar раскрывает лучшее из мексиканской кухни с свежими ингредиентами.",
    img: "./images/food-list-2.jpg",
    price: 800,
  },
  {
    id: "3",
    title: "Пицца Хат",
    desc: "Bon Au Pain — пионер в сфере здорового фаст-фуда.",
    img: "./images/food-list-3.jpg",
    price: 1500,
  },
  {
    id: "4",
    title: "Паэлья с курицей",
    desc: "Хотя цены в меню Пицца Хат со временем снизились.",
    img: "./images/food-list-4.jpg",
    price: 1100,
  },
  {
    id: "5",
    title: "Куринный пирог",
    desc: "Самый вкусный пирог от Софи",
    img: "./images/pirog_sonya.jpg",
    price: 1000,
  },
  {
    id: "6",
    title: "Яичница «С добрым утром»",
    desc: "Утро добрым не бывает",
    img: "./images/morning.jpg",
    price: 133,
  },
  {
    id: "7",
    title: "Хрустящие баклажаны",
    desc: "Просто, вкусно и сытно",
    img: "./images/ilnara.jpg",
    price: 400,
  },
  {
    id: "8",
    title: "Такояки «Русская рулетка»",
    desc: "Попробуй блюдо родом из Осоки, но с острой русской душой, в одном из шариков с кальмаром",
    img: "./images/andrey.jpg",
    price: 612,
  },
] as const;

import { FoodMenuItem } from "../food-menu-item/ui/food-menu-item";
import { FOOD_ITEM } from "../food-menu-item/lib/const";

export function FoodMenuList() {
  return (
    <section className="food-list">
      <div className="container food-list__container">
        {FOOD_ITEM.map((item) => (
          <FoodMenuItem
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.desc}
            img={item.img}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}

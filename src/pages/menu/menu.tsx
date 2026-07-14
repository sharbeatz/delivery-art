import { FoodMenuList } from "../../widgets/food-menu-list/food-menu-list";
import Filter from "../../widgets/filter/filter";

export default function Menu() {
  return (
    <section className="menu">
      <div className="container menu__container">
        <FoodMenuList />
      </div>
    </section>
  );
}

import { FoodMenuList } from "../../widgets/food-menu-list/food-menu-list";

export default function Menu() {
  return (
    <section className="menu">
      <div className="container menu__container">
        <FoodMenuList />
      </div>
    </section>
  );
}

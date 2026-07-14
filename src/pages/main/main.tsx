import "./main.css";
import Header from "../../widgets/header/header";
import Welcome from "../../widgets/welcome/welcome";
import { FoodMenuList } from "../../widgets/food-menu-list/food-menu-list";
import OrderSection from "../../widgets/order-section/order-section";

export const Main = () => {
  return (
    <>
      <main className="main">
        <Welcome />
        <FoodMenuList />
        <OrderSection />
      </main>
    </>
  );
};

import "./cart.css";
import { FoodCartList } from "../../widgets/food-cart-list/food-cart-list";

export default function Cart() {
  return (
    <main className="cart">
      <section className="cart-list">
        <div className="container cart__container">
          <p className="cart__title">Корзина</p>
          <FoodCartList />
        </div>
      </section>
    </main>
  );
}

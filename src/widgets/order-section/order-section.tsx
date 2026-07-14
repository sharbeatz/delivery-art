import OrderButton from "../order-button/order-button";
import "./order-section.css";

export default function OrderSection() {
  return (
    <section className="order-section">
      <div className="container order-section__container">
        <img className="order-section__img" src="./images/burger.png" alt="" />
        <div className="order-section__text-block">
          <h3 className="order-section__title">Burger King</h3>
          <p className="order-section__desc">
            Together with McDonald’s, Burger King has grown to become synonymous
            with burgers in the US.
          </p>
          <span className="order-section__price">$6</span>
          <OrderButton />
        </div>
      </div>
    </section>
  );
}

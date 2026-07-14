import OrderButton from "../order-button/order-button";
export default function Welcome() {
  return (
    <section className="welcome">
      <div className="container welcome__container">
        <div className="welcome__inner-wrapper">
          <h1 className="welcome__title">Delivery Art</h1>
          <p className="welcome__desc">
            Самая быстрая еда для мгновенного утоления голода. Вкусно, сытно и
            всегда свежее.
          </p>
          <OrderButton />
        </div>
      </div>
    </section>
  );
}

import "./food-cart-item.css";
import type { FoodMenuType } from "../../../shared/types/food-types";
import { useAddToCartStore } from "../../../shared/stores/add-to-cart";

export function FoodCartItem({
  id,
  title,
  img,
  price,
  quantity,
}: FoodMenuType) {
  const removeItem = useAddToCartStore((state) => state.removeItem);
  const decrementItem = useAddToCartStore((state) => state.decrementItem);
  const incrementItem = useAddToCartStore((state) => state.incrementItem);
  // заменить потом string на норм значения типа FoodItemType
  const handleRemoveToCart = (id: string) => {
    const confirmRemove = confirm(
      "Действительно ли хотите удалить выбранный продукт?"
    );
    if (confirmRemove) {
      removeItem(id);
    }
  };

  const handleDecrement = (id: string) => {
    decrementItem(id);
  };

  const handleIncrement = (id: string) => {
    incrementItem(id);
  };

  return (
    <div className="cart-list__item">
      <img src={img} alt="Food Item" className="cart-list__img" />
      <p className="cart-list_title">{title}</p>
      <div className="cart-list__quantity">
        {" "}
        <button
          className="cart-list__quantity-btn"
          onClick={() => handleDecrement(id!)}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="cart-list__quantity-btn"
          onClick={() => handleIncrement(id!)}
        >
          +
        </button>
      </div>
      <span className="cart-list__price">{price} руб.</span>
      <button
        className="cart-list__delete"
        // показываю что id точно будет !
        onClick={() => handleRemoveToCart(id!)}
      >
        <img
          className="cart-list__delete--img"
          src="./images/icons/delete.svg"
        />
      </button>
    </div>
  );
}

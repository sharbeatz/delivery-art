import type { FoodMenuType } from "../../../shared/types/food-types";
import "./food-menu-item.css";
import { useAddToCartStore } from "../../../shared/stores/add-to-cart";
import { Toast } from "./notification";
import { useState } from "react";

export function FoodMenuItem({ id, title, desc, img, price }: FoodMenuType) {
  const addItem = useAddToCartStore((state) => state.addItem);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleAddToCart = (
    id: string,
    title: string,
    price: number,
    img: string,
  ) => {
    const foodItem = { id, title, price, img };
    addItem(foodItem);
    setToastMessage(`✅ "${title}" добавлено в корзину!`);
    setShowToast(true);
  };

  return (
    <div className="food-list__card">
      <img src={img} alt="" className="food-list__img" />
      <div className="food-list__text-wrapper">
        <h4 className="food-list__title">{title}</h4>
        <p className="food-list__desc">{desc}</p>
        <div className="food-list__cart">
          <span className="food-list__price">{price} руб.</span>
          <button
            className="food-list__cart-btn"
            onClick={() => handleAddToCart(id!, title!, price!, img!)}
          >
            +
          </button>
        </div>
      </div>

      {/* Toast уведомление */}
      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
    </div>
  );
}

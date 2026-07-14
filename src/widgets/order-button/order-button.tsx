import "./order-button.css";
import { useNavigate } from "react-router-dom";

export default function OrderButton() {
  const navigate = useNavigate();

  return (
    <a href="#!" className="btn" onClick={() => navigate("menu")}>
      Заказать
    </a>
  );
}

import { Main } from "../pages/main/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderSection from "../widgets/order-section/order-section";
import Menu from "../pages/menu/menu";
import Header from "../widgets/header/header";
import Cart from "../pages/cart/cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/order" element={<OrderSection />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

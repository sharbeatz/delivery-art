import "./filter.css";

export default function Filter() {
  return (
    <div className="menu__filter">
      <div className="menu__filter-food">
        <button className="menu__filter-btn menu__filter-btn--active">
          All
        </button>
        <button className="menu__filter-btn">Бургеры</button>
        <button className="menu__filter-btn">Пицца</button>
        <button className="menu__filter-btn">Суши</button>
        <button className="menu__filter-btn">Салаты</button>
      </div>
      <div className="menu__filter-categories">
        <p className="menu__filter-text">Сортировка по:</p>
        <select name="" id="" className="menu__filter-select">
          <option className="menu__filter-option" value="">
            популярности
          </option>
          <option value="" className="menu__filter-option">
            цене
          </option>
          <option value="" className="menu__filter-option">
            алфавиту
          </option>
        </select>
      </div>
    </div>
  );
}
